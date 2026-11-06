# Kiểm thử hộp đen — Hệ thống quản lý thư viện

Repository: https://github.com/thanhcodeai/quanlythuvien_byAI

Commit được kiểm thử: `6bba7d7693c4deb0edeab8c5c44b2bdda1c82ea2` (main tại thời điểm lấy mẫu). Ngày thực hiện: 06/11/2026, giờ Việt Nam (UTC+7); timestamp bằng chứng dùng UTC.

Tổng2 lỗi, gộp theo biểu hiện chung để tránh tạo5bug auth và3bug parser trùng lặp. Việc gộp không khẳng định cùng nguyên nhân mã nguồn. Không phân tích/sửa logic nội bộ. Status cả hai: **Open**; chưa có bản sửa/retest sau sửa.

## BUG-BB-001 — Guest nhận500 thay vì401 trên một số endpoint bảo vệ

| Trường | Nội dung |
| --- | --- |
| Bug ID | BUG-BB-001 |
| Title | Truy cập không cookie vào API Admin và tạo yêu cầu mượn trả500 SERVICE_ERROR |
| Module | Authorization / Borrow / Admin |
| Severity | Major |
| Priority | High |
| Environment | Commit6bba7d7; Node24.22.1; Express5; MySQL8.4.7; DBbb_library; development; localhost3001 |
| Preconditions | App và DB đang chạy; không gửi Cookie hoặc Authorization; dùng client mới. |
| Steps to Reproduce | 1. GET /api/v1/admin/stats không cookie.<br>2. Lặp với GET /admin/books, /admin/users, /admin/borrow-requests.<br>3. POST /borrow-requests body {bookId:"1",borrowDate:"2026-11-06",dueDate:"2026-11-20"} không cookie.<br>4. Đối chứng GET /books,/me không cookie và GET /health. |
| Expected Result | 401 error envelope yêu cầu đăng nhập cho tất cả endpoint bảo vệ; không trả lỗi server. |
| Actual Result | Cả5endpoint trên trả500 success:false, error.code=SERVICE_ERROR, message="Có lỗi hệ thống, vui lòng thử lại". /books và/me trả401; /health200. Lặp riêng2vòng vẫn như vậy. |
| Impact | Sai hợp đồng xử lý Guest, gây báo lỗi hệ thống không phù hợp cho người dùng/monitoring. Không quan sát thấy Guest được cấp dữ liệu hoặc quyền Admin. |
| Evidence | [TC046](evidence/TC-BB-046.json); [TC067](evidence/TC-BB-067.json); [TC069](evidence/TC-BB-069.json); [TC071](evidence/TC-BB-071.json); [TC073](evidence/TC-BB-073.json); [replay](evidence/bug-replay.json) |
| Status | Open |
| Suggested resolution | Kiểm tra đường xử lý xác thực Guest của nhóm endpoint; chuẩn hóa401 trước xử lý nghiệp vụ. Đây là hướng xử lý để đội phát triển kiểm tra, chưa xác định root cause từ source. |
| Retest acceptance | 5endpoint trả401 nhất quán; User/Admin hợp lệ giữ quyền đúng; không phát sinh dữ liệu mượn/ghi khi Guest. |

## BUG-BB-002 — Response lỗi parser/body thiếu requestId

| Trường | Nội dung |
| --- | --- |
| Bug ID | BUG-BB-002 |
| Title | Body JSON hỏng/null/quá lớn trả lỗi không có requestId và X-Request-ID |
| Module | API Error Handling |
| Severity | Minor |
| Priority | Medium |
| Environment | Như BUG-BB-001; Content-Type application/json |
| Preconditions | App sẵn sàng; không cần phiên đăng nhập; dùng POST /api/v1/auth/register. |
| Steps to Reproduce | 1. Gửi raw body {"username": (JSON chưa hoàn chỉnh).<br>2. Gửi raw body null.<br>3. Gửi object có fullName="A" lặp150000 ký tự.<br>4. Kiểm body và X-Request-ID; GET /health đối chứng. |
| Expected Result | 400 cho JSON sai/null hoặc400/413 cho payload quá lớn, error envelope luôn chứa requestId theo README; lỗi được kiểm soát, app tiếp tục hoạt động. |
| Actual Result | Status400/400/413, success:false, error.code=INTERNAL_ERROR nhưng không có requestId trong body, không có X-Request-ID. Message là lỗi parser tiếng Anh. /health sau đó200. Trọng tâm defect là thiếu requestId; không suy ra lộ stack hoặc mất dữ liệu. |
| Impact | Không thể liên hệ lỗi input với mã truy vết như hợp đồng đã công bố; hỗ trợ/chẩn đoán khó nhất quán. |
| Evidence | [TC 117](evidence/TC-BB-117.json); [TC118](evidence/TC-BB-118.json); [TC119](evidence/TC-BB-119.json); [replay](evidence/bug-replay.json) |
| Status | Open |
| Suggested resolution | Bảo đảm correlation ID được cấp cho cả lỗi parse/size trước khi trả error envelope; chuẩn hóa mã/thông báo. Chưa xác định root cause qua cấu trúc code. |
| Retest acceptance | 3payload trả status phù hợp và requestId không rỗng; cùng correlation trong header nếu được công bố; health vẫn200; không echo secret/stack. |

## Ghi nhận chưa kết luận bug

Ảnh ui-user.png cho thấy các title fixture có chuỗi dài không ngắt gây card bị ép và có tràn ngang tại viewport1280 của discovery. Chưa có acceptance responsive đã duyệt và chưa thiết kế/retest thành ca độc lập, nên ghi **rủi ro UX cần kiểm tra thêm**, không cộng vào8 Fail/2 bug. Không suy ra UI đã được kiểm chứng trên mobile.

Các lỗi tải browser, thiếu Docker/libaio, UNIX socket bị chặn và rate limiter trong lượt retry là vấn đề môi trường/harness, không ghi thành lỗi phần mềm. Sửa hồ sơ/trả sách chưa tồn tại không phải defect của phạm vi hiện tại.
