# Website quản lý thư viện

Ứng dụng tiếng Việt: frontend HTML/CSS/JavaScript, Node.js/Express 5 và MySQL 8.4 InnoDB. Có API `/api/v1`, giao diện độc giả và Admin, session phía server, CSRF, bcrypt, audit và transaction duyệt sách.

## Chạy trong môi trường phát triển

Yêu cầu Node.js >=22, Docker Engine + Compose.

```sh
npm ci
node scripts/init-env.js
docker compose up -d --wait db
npm run migrate
npm run seed
npm start
```

Dùng trình duyệt tại cổng 3000 trong môi trường có hỗ trợ truy cập. Có thể đăng ký tài khoản độc giả trực tiếp. Admin mặc định có username `admin`; mật khẩu ngẫu nhiên ở `ADMIN_PASSWORD` trong `.env` cục bộ, xem bằng trình soạn thảo riêng, không gửi lên Git hoặc log. Đặt mật khẩu của bạn trước khi seed nếu muốn. Seed không thay đổi mật khẩu tài khoản đã tồn tại. `.env` được giữ nguyên khi chạy lại init. Không dùng tài khoản mẫu/mật khẩu phát triển trên production.

MySQL chỉ bind 127.0.0.1:3307, dữ liệu ở Docker volume `library-data`. `docker compose stop` giữ dữ liệu. Không xóa volume nếu cần giữ dữ liệu. `scripts/schema.sql` là baseline migration đầu tiên, chạy lại an toàn khi schema không thay đổi; thay đổi schema về sau cần migration có version, không dựa vào CREATE IF NOT EXISTS để nâng cấp.

## Kiểm thử

```sh
npm test
npm run test:ui
```

API tests cần DB đang chạy và Admin đã seed. Test dùng tên ngẫu nhiên, dọn user/book/request test; audit được giữ. Không chạy test trên production. Browser test dùng Chromium ở `/usr/bin/chromium`; đặt `CHROMIUM_PATH` nếu khác, hoặc cài Chromium phù hợp. Test UI tạo tài khoản và request riêng để kiểm tra luồng; không xóa lịch sử tự động.

API integration kiểm tra quyền, role/userId injection, duplicate username, ngày không hợp lệ, tính riêng tư lịch sử, concurrency bản sách cuối, terminal state, rollback khi audit thất bại, CSRF, FK, thống kê và logout. Không thay MySQL bằng mock để chứng minh transaction.

## Chính sách phát triển tạm thời (cần chốt trước production)

- Chọn session MySQL, cookie HttpOnly/SameSite Strict; Secure khi NODE_ENV=production; session 8 giờ, không refresh token. Mỗi thao tác ghi sau login cần X-CSRF-Token nhận từ login hoặc `/me`. Logout xóa session ngay.
- Mật khẩu tối thiểu 8 ký tự cấu hình, tối đa 72 byte do bcrypt. Bcrypt cost 12. Email tùy chọn, đăng nhập bằng username.
- Chỉ tài khoản đã login được đọc sách; chỉ USER tạo request, Admin đọc lịch sử của mình được phép.
- Chưa đặt giới hạn ngày/sách; `MAX_BORROW_DAYS`, `MAX_ACTIVE_BORROWS` tùy chọn. Khi cấu hình max active, đếm cả PENDING+APPROVED và khóa user để tránh race khi tạo. `DENY_DUPLICATE_PENDING=false` cho phép trùng pending. Phải chốt nghiệp vụ trước vận hành thật.
- Tạo PENDING không giữ chỗ, có thể tạo khi hết sách; approve mới kiểm tồn. Không có trả sách/gia hạn/hủy.
- Backend quản lý available; sửa total giữ nguyên số đã cấp phát, không giảm thấp hơn số đó.
- Hard delete bị FK chặn nếu có history, kể cả reviewer (thận trọng hơn SET NULL mẫu SRS). Không tự xóa/hạ quyền; không xóa/hạ quyền Admin cuối cùng. Đổi role thu hồi session của tài khoản bị đổi.
- Thống kê sách theo đầu sách, User chỉ role USER; search theo collation mặc định MySQL 8.4 ai_ci. Paging default 12/max100; sort title/newest/available. Timestamp UTC, ngày mượn là DATE.
- Production cần HTTPS, chính sách timeout/password/borrow được duyệt, backup+restore/RPO/RTO, log retention, SLA và load testing. Hiện chưa tuyên bố production-ready.

## API

Danh mục theo thiết kế ở [docs/DESIGN.md](docs/DESIGN.md). Register/login public. GET `/me` trả public profile và CSRF token dành cho chính session hiện hành. Không trả password/hash hoặc session credential.

Các endpoint đã triển khai: auth/register, auth/login, auth/logout; GET books và books/:id; POST borrow-requests; GET me, me/borrow-requests; GET admin/stats; GET/POST admin/books + PUT/DELETE admin/books/:id; GET/PATCH admin/borrow-requests; GET/POST admin/users + PUT/DELETE admin/users/:id. PATCH review nhận `{decision: 'APPROVE'|'DENY', note?}`. Health: GET `/api/v1/health` kiểm tra MySQL.

Response thành công `{success:true,data,meta:{requestId,...}}`, lỗi `{success:false,error:{code,message},requestId}`. Pagination trong meta. ID trả chuỗi. 204 không body. Không tự nhận `availableQuantity`, `userId` hoặc `status` do client gửi để quyết định nghiệp vụ.
