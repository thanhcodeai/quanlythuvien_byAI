# Kiểm thử hộp đen — Hệ thống quản lý thư viện

Repository: https://github.com/thanhcodeai/quanlythuvien_byAI

Commit được kiểm thử: `6bba7d7693c4deb0edeab8c5c44b2bdda1c82ea2` (main tại thời điểm lấy mẫu). Ngày thực hiện: 06/11/2026, giờ Việt Nam (UTC+7); timestamp bằng chứng dùng UTC.

## Mục tiêu và cơ sở đánh giá

Đánh giá hành vi quan sát được qua HTTP và trình duyệt của bản demo; phát hiện lỗi có thể tái hiện, cung cấp bộ ca tái sử dụng. Không dùng nhánh lệnh, thuật toán, câu lệnh SQL nội bộ hay coverage làm cơ sở thiết kế. Không sửa logic ứng dụng; không chạy bộ unit/integration sẵn có để lấy số liệu hộp đen.

Nguồn oracle ưu tiên: README hiện tại (API và chính sách phát triển đã công bố); danh mục API/FR/BR của docs/DESIGN.md cho phần không mâu thuẫn, có nhãn đề xuất; khảo sát API/UI để xác nhận endpoint và cấu trúc DTO thực tế. SRS gốc không có trong repository, nên đây là kiểm thử hồi quy theo hợp đồng hiện hành, chưa phải nghiệm thu toàn bộ SRS. Không dùng hành vi bị nghi là lỗi làm oracle cho chính hành vi đó.

## Kỹ thuật áp dụng

- EP: input hợp lệ/thiếu/rỗng/null/sai kiểu/không tồn tại/trùng; User/Admin/Guest.
- BVA: password ASCII 7,8,9,71,72,73 byte theo README (min 8 ký tự, max 72 byte); 25 ký tự € =75 byte; page/pageSize theo default12/max100; totalQuantity -1,0 và phân số theo catalog không âm/nguyên; dueDate trước/bằng/ngay sau borrowDate theo dueDate>borrowDate. Không đặt giới hạn số ngày mượn hay số request khi cấu hình chưa đặt.
- Decision table: auth × role × CSRF × stock; xem 03_Requirement_Analysis.md. Không gọi ma trận này là vét cạn mọi tổ hợp.
- State transition: PENDING→APPROVED/DENIED; lặp approve, APPROVED→DENIED, DENIED→APPROVED; kiểm tồn trước/sau và lịch sử qua API.
- Error guessing: SQL-like input, gửi trùng, JSON hỏng, payload lớn, cookie giả, reload, hai request tranh bản cuối. Payload 150000 ký tự là dữ liệu gây áp lực có chủ đích, không phải giới hạn nghiệp vụ suy đoán.

## Các lớp kiểm thử

121 ca API bằng Node fetch/assert, 16 ca giao diện bằng Playwright/Chromium thật. Thiết lập fixture và cleanup có thể dùng SQL trên database test; assertion nghiệp vụ chỉ đọc response/API/UI. Không chèn lỗi audit, thay schema hay sửa DB giữa ca để chứng minh rollback nội bộ. Concurrency chỉ chứng minh kết quả bên ngoài trong một lượt chạy, không chứng minh toàn bộ transaction hoặc mọi race.

Pass phải đạt mọi assertion của ca. Fail là lệch oracle đã ghi, có trace. Blocked dùng khi không đủ điều kiện chạy hoặc lỗi công cụ; Not Run khi chưa chạy. HTTP 200 riêng lẻ không đủ: có kiểm DTO, ID, role, trạng thái, tồn kho, lịch sử, session và tổng thống kê phù hợp từng ca.

## Phân loại và điều kiện ra

Critical: mất dữ liệu nghiêm trọng/bỏ qua kiểm soát quyền; Major: sai hành vi chức năng/hợp đồng quan trọng; Minor: sai thông báo/metadata làm giảm khả năng sử dụng hoặc hỗ trợ; Trivial: thẩm mỹ nhỏ. Priority được xác định theo ảnh hưởng sửa và tái kiểm thử.

Hoàn thành vòng test khi mọi ca đã phân loại và có bằng chứng, lỗi có bước tái hiện, thống kê đối chiếu được và môi trường test được dọn. Điều kiện đề xuất để phát hành: không còn Critical/Major, lỗi nhỏ được chấp nhận có ghi nhận; phải chốt SRS/chính sách và chạy thêm NFR trước khi công bố production-ready.
