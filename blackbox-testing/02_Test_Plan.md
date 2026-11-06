# Kiểm thử hộp đen — Hệ thống quản lý thư viện

Repository: https://github.com/thanhcodeai/quanlythuvien_byAI

Commit được kiểm thử: `6bba7d7693c4deb0edeab8c5c44b2bdda1c82ea2` (main tại thời điểm lấy mẫu). Ngày thực hiện: 06/11/2026, giờ Việt Nam (UTC+7); timestamp bằng chứng dùng UTC.

## Phạm vi

Trong phạm vi: 12 FR theo catalog (xác thực, tra cứu/chi tiết, yêu cầu mượn, hồ sơ chỉ đọc, lịch sử, logout, thống kê, CRUD sách, xét duyệt, CRUD tài khoản), phân quyền và dữ liệu bất thường. API chủ đạo; UI kiểm hành trình chính và màn hình Admin. Chi tiết truy vết tại 03 và 04.

Ngoài phạm vi được tài liệu xác nhận: trả sách/gia hạn/hủy, sửa hồ sơ cá nhân, mượn nhiều bản trong một request, thanh toán/phạt. Không đánh dấu Fail các tính năng này. Trường quantity không nằm trong hợp đồng tạo request; không tự tạo ca mượn số lượng âm cho chức năng không tồn tại.

Chưa đánh giá: HTTPS/production cookies, timeout 8 giờ thực, tải dài hạn/SLA, backup/restore, full XSS/CSRF penetration testing, mọi endpoint/method trong ma trận quyền, mọi boundary độ dài của tất cả trường, thiết bị thật/iOS, nhiều trình duyệt, accessibility đầy đủ, các cấu hình MAX_* khác mặc định. Không có ngưỡng hiệu năng được chốt nên không kết luận đạt hiệu năng từ durationMs.

## Môi trường và dữ liệu

Ubuntu 24.04.3, Node 24.22.1, npm 11.9.0; MySQL 8.4.7 InnoDB thật (cùng dòng8.4, không dùng MariaDB/mock); DB `bb_library`, utf8mb4_0900_ai_ci; TCP127.0.0.1:3307. Không có dữ liệu production. API tại3001, UI tại3002, cùng database thử nghiệm. UI dùng Playwright1.56.1/Chromium Headless Shell141.0.7390.37, viewport1440×1000; vì Chromium dự án yêu cầu tải lỗi. Đây là sai khác môi trường phải lưu ý khi chạy lại.

Policy: development, SESSION_HOURS=8, PASSWORD_MIN_LENGTH=8, DENY_DUPLICATE_PENDING=false; MAX_BORROW_DAYS/MAX_ACTIVE_BORROWS không đặt. Mật khẩu Admin được tạo ngẫu nhiên, truyền qua môi trường; không đóng gói `.env` hay credential. Mật khẩu fixture được tạo trong RAM.

Khởi tạo database, chạy migration/seed được cung cấp, sau đó fixture được tạo qua API. Dữ liệu seed BK-001..006, tài khoản Admin; fixture stock(2), zero(0), disposable(3), User u/v; tên duy nhất có prefixbb. Ca API dùng cùng fixture theo thứ tự; dependencies chi tiết trong từng ca. UI tạo tài khoản riêng, chạy sau API; vì vậy snapshot thống kê API có trước các tài khoản/yêu cầu phát sinh ở UI discovery.

## Lịch thực hiện thực tế (06/11/2026)

1. Khảo sát README, cấu trúc, thiết kế và cấu hình chạy; pin commit.
2. Cài npm dependency; tải MySQL8.4, thiết lập DB riêng, migrate/seed, khởi động; khảo sát API.
3. Thiết kế121 ca, chạy thử; điều chỉnh harness do POST chỉ trả ID ở một số endpoint; tách lỗi harness khỏi lỗi sản phẩm.
4. Dọn DB; khởi động app process mới tại3001 để tránh rate limiter tích lũy; chạy121 ca chính thức.
5. Cài browser riêng; khảo sát DOM, thiết kế và chạy16 ca UI tại3002.
6. Tái hiện mỗi nhóm bug thêm2 vòng không cookie; thu bằng chứng, kiểm toàn vẹn source và đóng gói báo cáo.

## Xử lý môi trường

Docker không có. Dùng bản MySQL minimal chính thức và libaio trong thư mục thử nghiệm, không sửa app. UNIX socket bị môi trường cấm; MySQL chạy `--socket=` và chỉ dùng TCP. Mỗi phiên lệnh có giới hạn kết nối riêng, nên DB/app/client được giữ trong cùng phiên. Chromium thường bị chặn socket singleton; headless_shell với single-process/no-zygote chạy được. Các thay đổi này chỉ phục vụ runtime test.

Rate limiter của app trả429 khi chạy lại liên tiếp; đó là hạn chế fixture/lượt test, không tạo bug nghiệp vụ. Đã reset DB và dùng process mới trước lượt chính thức; final không còn429. Lượt thử đầu có sai lệch harness (giả định DTO đầy đủ); giữ trong thư mục chẩn đoán và loại hoàn toàn khỏi tổng chính thức.

## Tiêu chí vào/ra và dọn dữ liệu

Vào: source pin, Node/dependency sẵn, DB riêng có schema/seed, health và login hoạt động. Ra: toàn bộ137 ca đã thực thi;8 Fail có2 bug nhóm, đủ trace/ảnh; báo cáo nêu các giới hạn. Bộ dữ liệu test có thể reset bằng automated-tests/reset-test-db.mjs (chỉ DB cục bộ prefixbb_). Dữ liệu production không được kết nối. Chi tiết cleanup thực tế tại evidence/cleanup.log.
