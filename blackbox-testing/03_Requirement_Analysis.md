# Kiểm thử hộp đen — Hệ thống quản lý thư viện

Repository: https://github.com/thanhcodeai/quanlythuvien_byAI

Commit được kiểm thử: `6bba7d7693c4deb0edeab8c5c44b2bdda1c82ea2` (main tại thời điểm lấy mẫu). Ngày thực hiện: 06/11/2026, giờ Việt Nam (UTC+7); timestamp bằng chứng dùng UTC.

## Nguồn và mức độ chắc chắn

Không tìm thấy SRS gốc trong cây repository. docs/DESIGN.md dẫn “SRS1.0 ngày16/10/2026” nhưng tự ghi “đề xuất, chưa triển khai”; README mới hơn mô tả các endpoint đã triển khai và policy tạm. Trạng thái dưới đây được xác minh bằng response và UI thực tế, không lấy dòng trạng thái cũ trong DESIGN làm kết luận.

Các FR được kế thừa như mã truy vết từ DESIGN; test password/paging/auth/stock theo README. Quy tắc dữ liệu ngày và số lượng theo catalog thiết kế, đồng thời UI cung cấp đúng các trường tương ứng. Các quyết định tạm không được coi là SRS đã duyệt. Sự khác biệt reviewer hard-delete RESTRICT so với đề xuất SET NULL được README giải thích nên không tạo bug.

| ID | Chức năng | Vai trò | Đầu vào | Đầu ra mong đợi | Trạng thái triển khai xác minh | TC-BB |
| --- | --- | --- | --- | --- | --- | --- |
| FR-01 | Đăng ký | Guest | username/fullName/password/email? | 201 USER; lỗi400/409 | Đã quan sát API và UI | 001–017;124 |
| FR-02 | Đăng nhập | Guest/User/Admin | username/password | 200 role đúng + session; sai401 | Đã quan sát API và UI | 018–024;125–126;134 |
| FR-03 | Danh sách/tìm/lọc/phân trang sách | User/Admin | q/category/page/pageSize/sort | items+metadata; rỗng200; query sai400 | Đã quan sát API và UI | 026–032;036–043;127–128 |
| FR-04 | Chi tiết sách | User/Admin | bookId | đúng DTO; sai400/404 | Đã quan sát API và UI | 033–035;129 |
| FR-05 | Gửi yêu cầu mượn một sách | User | bookId/borrowDate/dueDate | 201 PENDING; không giữ chỗ | Đã quan sát API và UI; Guest lỗi500 | 044–060;130 |
| FR-06 | Hồ sơ chỉ đọc | User/Admin | session | profile chính mình; không secret | Đã quan sát API và UI | 061–062;131 |
| FR-07 | Lịch sử cá nhân | User/Admin | status/page; session | request chỉ thuộc chính mình | Đã quan sát API và UI | 063–066;130 |
| FR-08 | Đăng xuất | User/Admin | session+CSRF | 204; phiên cũ vô hiệu | Đã quan sát API và UI | 025;133 |
| FR-09 | Thống kê | Admin | session | đầu sách/User roleUSER/request theo status | Đã quan sát; Guest lỗi500 | 067–068;116;134 |
| FR-10 | CRUD sách | Admin | bookCode/title/author/category?/description?/totalQuantity | tồn do server quản lý; unique; xóa có history409 | Đã quan sát API; UI danh sách | 069–070;075–089;100–102;135 |
| FR-11 | Danh sách và duyệt yêu cầu | Admin | status; decision APPROVE/DENY; note? | chỉ PENDING→APPROVED/DENIED; approve tồn-1 | Đã quan sát API; UI danh sách; Guest lỗi500 | 073–074;090–099;103;136 |
| FR-12 | CRUD tài khoản | Admin | username/fullName/password khi tạo/email?/role | public DTO; bảo vệ self; role đổi thu hồi phiên | Đã quan sát API; UI danh sách; Guest lỗi500 | 071–072;104–115;137 |

## Không triển khai / ngoài phạm vi

| Chức năng | Phân loại | Căn cứ |
| --- | --- | --- |
| Trả sách, gia hạn, hủy request | Not Implemented / Out of Scope | README: không có; DESIGN: ngoài phạm vi |
| Cập nhật hồ sơ của chính User | Out of Scope | DESIGN: hồ sơ chỉ đọc; không thấy API riêng |
| Mượn số lượng tùy chọn | Out of Scope | Catalog POST chỉ có bookId+hai ngày; approve giảm1 |
| Đăng nhập email, quên mật khẩu, phạt/thanh toán | Out of Scope | Không có trong README/catalog endpoint hiện hành |

## Bảng quyết định mượn/duyệt (các tổ hợp đã chọn)

| Đã login | Vai trò | CSRF | Input/stock/state | Kết quả mong đợi | Ca |
| --- | --- | --- | --- | --- | --- |
| Không | Guest | — | Tạo request hợp lệ | 401 | 046 (thực tế500) |
| Có | ADMIN | Đúng | Tạo request | 403 | 047 |
| Có | USER | Thiếu/sai | Tạo request | 403 | 058–059 |
| Có | USER | Đúng | Ngày hợp lệ; stock>0 | 201 PENDING; tồn giữ nguyên | 044 |
| Có | USER | Đúng | Ngày hợp lệ; stock=0 | 201 PENDING; tồn0 | 045 |
| Có | USER | Đúng | due<=borrow/invalid date | 400 | 049–053 |
| Có | USER | Đúng | Sách không tồn tại | 404 | 048 |
| Có | ADMIN | Đúng | APPROVE PENDING; stock>0 | 200 APPROVED; tồn-1 | 091 |
| Có | ADMIN | Đúng | APPROVE PENDING; stock0 | 409; PENDING; tồn0 | 096 |
| Có | ADMIN | Đúng | DENY PENDING | 200 DENIED; tồn giữ nguyên | 094 |
| Có | ADMIN | Đúng | Terminal state | 409; tồn giữ nguyên | 092–093;095 |
| Có | USER | Đúng | Duyệt request | 403 | 099 |

## Chuyển trạng thái

PENDING có thể sang APPROVED khi Admin duyệt và còn tồn; sang DENIED khi từ chối. APPROVED/DENIED là terminal theo README/catalog. Không có RETURNED. TC091–096 kiểm chuyển và thao tác sai thứ tự; TC103 kiểm cạnh tranh hai request qua kết quả API và tồn. Chưa thực hiện đủ mọi cặp quyết định lặp (ví dụ DENIED→DENIED), không suy rộng kết quả.

## Giới hạn và phân vùng

Password: dưới8,8,9; dưới72,72,73byte; Unicode vượt byte. Paging: page0/1, pageSize1/100/101 và sai kiểu/âm. Số lượng: âm,0,hợp lệ,phân số,null,sai kiểu. Ngày: trước,bằng,sau1ngày,không tồn tại,sai định dạng,null. Không đặt max borrow days, max active borrows hoặc số lượng borrow tùy ý. Các độ dài cột trong thiết kế chưa được dùng làm yêu cầu mật khẩu.
