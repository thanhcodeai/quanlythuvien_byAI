# Chạy lại kiểm thử hộp đen

## Điều kiện an toàn

Chỉ trỏ vào app local và database test riêng tênbb_*. Không dùng production. Không sửa mã nghiệp vụ. Các suite tạo/xóa/sửa dữ liệu fixture và thay role tài khoản do suite tạo. Cần migrate/seed từ đúng commit6bba7d7; bộ137 ca là stateful, chạy đúng thứ tự, không parallel toàn suite.

## Chuẩn bị

Clone repository vào thư mục riêng và checkout commit đã ghi. Trong repo ứng dụng:

```sh
npm ci
node scripts/init-env.js
# Chỉnh .env riêng để dùng database test bb_library và Admin test; không chia sẻ file.
docker compose up -d --wait db
npm run migrate
npm run seed
npm start
```

Nếu dùng MySQL8.4 local thay Docker, tạo database/user riêng và cấu hình tương ứng; giữ các policy đã ghi trong Test Plan. Không đóng gói hoặc hardcode ADMIN_PASSWORD. Khi chạy API suite, export BB_ADMIN_PASSWORD/BB_ADMIN_USERNAME bằng cách an toàn từ cấu hình test của bạn. Đừng in hoặc lưu credential vào terminal log.

SuiteAPI dùng Node>=22 và thư viện chuẩn, không cần Postman. Trong thư mục blackbox-testing:

```sh
export BB_BASE_URL=http://127.0.0.1:3000/api/v1
# BB_ADMIN_PASSWORD phải được cấp riêng trong environment
node automated-tests/api-suite.mjs --design-only
node automated-tests/api-suite.mjs
```

Tạo process app mới cho mỗi vòngAPI đầy đủ để tránh rate limiter40/15phút tích lũy; không tắt rate limiter trong app. Nếu gặp429, suite đánh dấuBlocked, cần chờ Retry-After hoặc khởi động lại app TEST và reset dữ liệu trước vòng mới. Không coi429 là bug chức năng đang kiểm.

## UI

Cài Playwright ở môi trường test riêng (không thêm vào source ứng dụng):

```sh
npm install --no-save playwright@1.56.1
npx playwright install chromium
export BB_UI_URL=http://127.0.0.1:3000
# Cấp BB_ADMIN_PASSWORD như ở API
node automated-tests/ui-suite.mjs
```

Suite mặc định importplaywright. Có thể đặt BB_PLAYWRIGHT_MODULE là fileURL tới bản cài riêng, CHROMIUM_PATH là browser tương thích. Vòng thực tế dùng Chromium Headless Shell141.0.7390.37 với no-sandbox/single-process/no-zygote do giới hạn môi trường. UI chạy tuần tự sauAPI; không reset giữa16ca. Chạy appUI process mới nếu đã chạy nhiều auth request. Không thực hiện các lệnh Docker nếu máy không có Docker; xem Test Plan để biết phương án runtime thực tế.

## Báo cáo và mã thoát

API ghi evidence/results.json, TC-BB-001..121.json; UI ghi ui-results.json,122..137.json vàPNG. Những file này bị ghi lại khi chạy suite, nên giữ một bản gói kết quả trước khi rerun. Báo cáo Markdown đi kèm là snapshot của vòng06/11/2026, cần cập nhật nếu chạy phiên bản/dữ liệu mới.

Suite ghi toàn bộ kết quả trước khi kết thúc. Dùng bước kiểm sau để CI trả exit1 nếu cóFail/Blocked/NotRun:

```sh
node automated-tests/assert-results.mjs
```

Vòng thực tế: assert-results trả exit1 với8ca không đạt, đúng mong đợi; không được bỏ qua khi tích hợpCI.

## Tái hiện riêng bug

```sh
node automated-tests/bug-replay.mjs
```

Dùng BB_BASE_URL và local app/DB sẵn sàng. Không cần credential; tạo22response hai vòng gồm endpoint lỗi và controls. Replay không được cộng vào tổng137 ca.

## Dọn dữ liệu

Dừng app test sau khi lưu evidence. reset-test-db.mjs chỉ chấp nhận DB_HOSTlocalhost/127.0.0.1 và DB_NAME khớpbb_*. Script xóa toàn bộ database TEST đó rồi tạo lại rỗng; không dùng trên database khác. Đây là cơ chế cleanup/reset cả audit/history của dataset disposable, không giả vờ xóa lịch sử qua API không hỗ trợ.

```sh
# Cấp DB_HOST,DB_PORT,DB_NAME,DB_USER,DB_PASSWORD riêng trong environment.
# Cài mysql2 trong môi trường test hoặc đặt BB_MYSQL_MODULE tới mysql2/promise.
node automated-tests/reset-test-db.mjs --reset-disposable-db
# Trước vòng sau: chạy migrate,seed rồi khởi động app test mới.
```

Sau vòng thực tế, DB test đã được reset và đã gửi SIGTERM tới MySQL test; xemcleanup.log. Không có dữ liệu production hay source ứng dụng bị sửa.
