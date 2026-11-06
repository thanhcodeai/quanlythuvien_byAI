# Kiểm thử hộp đen — Hệ thống quản lý thư viện

Repository: https://github.com/thanhcodeai/quanlythuvien_byAI

Commit được kiểm thử: `6bba7d7693c4deb0edeab8c5c44b2bdda1c82ea2` (main tại thời điểm lấy mẫu). Ngày thực hiện: 06/11/2026, giờ Việt Nam (UTC+7); timestamp bằng chứng dùng UTC.

## Kết quả lượt chính thức

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

| Module | Total | Pass | Fail | Blocked | Not Run |
| --- | --- | --- | --- | --- | --- |
| Auth | 25 | 25 | 0 | 0 | 0 |
| Books | 18 | 18 | 0 | 0 | 0 |
| Borrow | 17 | 16 | 1 | 0 | 0 |
| Profile | 6 | 6 | 0 | 0 | 0 |
| Authorization | 8 | 4 | 4 | 0 | 0 |
| Admin books | 18 | 18 | 0 | 0 | 0 |
| Review | 11 | 11 | 0 | 0 | 0 |
| Admin users | 12 | 12 | 0 | 0 | 0 |
| Statistics | 1 | 1 | 0 | 0 | 0 |
| Errors | 4 | 1 | 3 | 0 | 0 |
| Health | 1 | 1 | 0 | 0 | 0 |
| UI | 16 | 16 | 0 | 0 | 0 |

Executed=Pass+Fail; Execution Rate=Executed/Total×100%; Pass Rate=Pass/(Pass+Fail)×100%. Nếu mẫu số0 hiển thịN/A. Không tính discovery, fixture, replay hay các lượt chẩn đoán vào số ca.

## Các ca không đạt

| Test case | Mục tiêu | Kết quả thực tế | Bug | Bằng chứng |
| --- | --- | --- | --- | --- |
| TC-BB-046 | Guest tạo yêu cầu | Expected values to be strictly equal:<br><br>500 !== 401<br> | BUG-BB-001 | [TC-BB-046](evidence/TC-BB-046.json) |
| TC-BB-067 | guest GET /admin/stats | Expected values to be strictly equal:<br><br>500 !== 401<br> | BUG-BB-001 | [TC-BB-067](evidence/TC-BB-067.json) |
| TC-BB-069 | guest GET /admin/books | Expected values to be strictly equal:<br><br>500 !== 401<br> | BUG-BB-001 | [TC-BB-069](evidence/TC-BB-069.json) |
| TC-BB-071 | guest GET /admin/users | Expected values to be strictly equal:<br><br>500 !== 401<br> | BUG-BB-001 | [TC-BB-071](evidence/TC-BB-071.json) |
| TC-BB-073 | guest GET /admin/borrow-requests | Expected values to be strictly equal:<br><br>500 !== 401<br> | BUG-BB-001 | [TC-BB-073](evidence/TC-BB-073.json) |
| TC-BB-117 | JSON sai cú pháp | The expression evaluated to a falsy value:<br><br>  assert.ok(r.json.requestId)<br> | BUG-BB-002 | [TC-BB-117](evidence/TC-BB-117.json) |
| TC-BB-118 | Body JSON null | The expression evaluated to a falsy value:<br><br>  assert.ok(r.json.requestId)<br> | BUG-BB-002 | [TC-BB-118](evidence/TC-BB-118.json) |
| TC-BB-119 | Payload quá dài | The expression evaluated to a falsy value:<br><br>  assert.ok(r.json.requestId)<br> | BUG-BB-002 | [TC-BB-119](evidence/TC-BB-119.json) |

## Kết quả nghiệp vụ đã quan sát

Tạo PENDING không giảm tồn kể cả tồn0. APPROVE thành công giảm đúng1; DENY không giảm; duyệt lặp/đổi terminal bị409; hai yêu cầu tranh bản cuối chỉ một APPROVED và tồn0. Đổi total giữ số bản đã cấp, giảm dưới số đã cấp bị409; xóa sách/User có lịch sử bị409. User không đọc API Admin; không đổi chủ lịch sử qua userId query. Đổi role thu hồi phiên, logout vô hiệu cookie cũ. Thống kê API khớp tổng danh sách/filter tại thời điểm TC116; dữ liệu UI được tạo sau đó.

Không chỉ nhìn HTTP: các ca tạo/sửa/xóa đọc lại sách/User, mượn đọc lịch sử/tồn, session đọc lại /me, thống kê so sánh các endpoint. Trường hợp lỗi parser Fail ngay tại thiếu requestId, nên assertion health ở cùng ca có thể chưa chạy; TC121 và replay /health sau payload đã thực sự trả200.

## Quản lý sai lệch lượt thử

`evidence/initial-run/`: lượt đầu có giả định sai của harness về DTO POST; kết quả này không phải bug được xác nhận. `evidence/rate-limited-run/`: lượt chạy lại bị429 do process app cũ chưa reset limiter, không dùng để đánh giá chức năng. Đã reset DB và khởi động process app mới3001 trước lượt chính thức. Không che các lượt này; thư mục chẩn đoán có nhãn rõ và bị loại khỏi thống kê.

Hai nhóm lỗi cuối được tái hiện riêng hai vòng tại evidence/bug-replay.json (22response gồm cả controls). Các replay chỉ xác nhận bug, không thêm22 test case. HTTP 200 /health và401 /books,/me làm đối chứng để phân biệt với DB/app ngừng hoạt động.

## Bằng chứng

Mỗi API test có JSON request/response/header đã che credential, UTC timestamp, duration, expected/status/actual. Mỗi UI test có JSON text/network và PNG; screenshots đã che trường password. Không tạo video; video không cần thiết vì ảnh+trace tái hiện đủ các tình huống ở vòng này. Không có code coverage vì ngoài phương pháp hộp đen. Source integrity không có thay đổi tracked file.
