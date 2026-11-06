# Kiểm thử hộp đen — Hệ thống quản lý thư viện

Repository: https://github.com/thanhcodeai/quanlythuvien_byAI

Commit được kiểm thử: `6bba7d7693c4deb0edeab8c5c44b2bdda1c82ea2` (main tại thời điểm lấy mẫu). Ngày thực hiện: 06/11/2026, giờ Việt Nam (UTC+7); timestamp bằng chứng dùng UTC.

## Kết luận

Đã hoàn thành vòng kiểm thử hộp đen trong phạm vi xác định, có thực thi API và trình duyệt thật. **129/137 caPass (94.16%),8 Fail quy về2 bugOpen (1 Major,1 Minor). Chưa đạt tiêu chí đề xuất để phát hành vì cònMajor và chưa nghiệm thu SRS/NFR.**

| Chỉ số | Giá trị |
| --- | --- |
| Total Test Cases | 137 |
| Executed Test Cases | 137 |
| Passed | 129 |
| Failed | 8 |
| Blocked | 0 |
| Not Run | 0 |
| Execution Rate | 100.00% |
| Pass Rate | 94.16% |
| Total Bugs | 2 |
| Critical Bugs | 0 |
| Major Bugs | 1 |
| Minor Bugs | 1 |
| Trivial Bugs | 0 |

## Phát hiện chính

1. BUG-BB-001 (Major): Guest truy cập4API danh sách/thống kê Admin hoặc tạo request mượn nhận500 thay vì401. Không quan sát thấy vượt quyền; lỗi là sai xử lý xác thực/error contract.
2. BUG-BB-002 (Minor): JSON hỏng/null/payload quá lớn trả lỗi thiếu requestId. Đã xác minh lại2vòng mỗi nhóm; chưa sửa source.

Luồng User/Admin thông thường, phân quyền User→Admin, lịch sử riêng tư, session logout/đổi role, bảo toàn tồn khi duyệt/sửa/xóa và thống kê trong dataset thử nghiệm đạt các assertion đã ghi.16 ca UI chính đềuPass. Kết quả này giới hạn ở commit/môi trường/dữ liệu và các tình huống đã chạy; không phải bảo đảm không có lỗi khác.

## Mức độ hoàn thành

| Tiêu chí | Trạng thái |
| --- | --- |
| Khảo sát repository/tài liệu | Hoàn thành; pin commit; không có SRS gốc |
| Xác định phạm vi | Hoàn thành; tách rõ ngoài phạm vi và chưa đánh giá |
| Thiết kế hộp đen | Hoàn thành137 ca; có EP/BVA/decision/state/error guessing |
| Chuẩn bị môi trường | Hoàn thành DB test/MySQL thật; có sai khác browser đã nêu |
| Thực thi ca có thể chạy | 137/137;129 Pass8 Fail |
| Actual/status/bug/evidence | Hoàn thành trace137 ca và16ảnh UI;2 bugOpen |
| Tổng hợp báo cáo | Hoàn thành; số liệu sinh từ results JSON |
| Xác minh source không đổi | Hoàn thành git diff/status sạch |
| Dọn môi trường | Xem evidence/cleanup.log; chỉ DBbb_library |
| Nghiệm thu toàn bộ SRS/NFR/production | Chưa hoàn thành: thiếu SRS gốc/chính sách và chưa chạy NFR |

## Rủi ro và việc cần tiếp tục

- Cần đội phát triển xử lý2 bug và cung cấp commit sửa; chạy bug replay rồi toàn bộ regression trên DB mới/process mới.
- Cần SRS gốc và quyết định phê duyệt timeout/password/borrow/delete/production để kết luận đáp ứng yêu cầu chính thức. README hiện dùng policy tạm; DESIGN còn mô tả trạng thái cũ.
- Chưa kiểm session hết hạn8giờ, toàn bộ quyền/method, nhiều lượt concurrency/load dài, mọi độ dài trường, SSL production, backup/restore, mobile/cross-browser/accessibility. Không có bằng chứng định lượng SLA.
- Browser thực thi khác bản browser dự án; nên rerun browser chuẩn trong môi trường hỗ trợ. Card với title không ngắt có dấu hiệu tràn ở ảnh discovery, cần chốt tiêu chí responsive và kiểm thêm.

## Điều kiện chạy tiếp

Môi trường Node>=22 và MySQL8.4 riêng có quyền migrate/seed, Admin test riêng, Chromium/Playwright dùng được, local app process mới và bộ file này. Dùng automated-tests/README.md để tạo fixture/chạy/dọn dữ liệu. Credential qua environment, không dùng database thật. Không cần thay logic ứng dụng để tái hiện hai lỗi đã ghi.
