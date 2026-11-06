# Kiểm thử hộp đen — Hệ thống quản lý thư viện

Repository: https://github.com/thanhcodeai/quanlythuvien_byAI

Commit được kiểm thử: `6bba7d7693c4deb0edeab8c5c44b2bdda1c82ea2` (main tại thời điểm lấy mẫu). Ngày thực hiện: 06/11/2026, giờ Việt Nam (UTC+7); timestamp bằng chứng dùng UTC.

Tổng 137 ca:121 API +16 UI. Chỉ các kết quả ở evidence/results.json và ui-results.json là lượt chính thức. Các ca chạy tuần tự trên fixture chung; dependency ghi trong từng ca. Password thật được giữ riêng; `[REDACTED]` cần thay bằng secret của phiên chạy mới.

## TC-BB-001 — Đăng ký hợp lệ

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-001 |
| Module | Auth |
| Test Objective | Đăng ký hợp lệ |
| Technique | EP |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "guest", "method": "POST", "path": "/auth/register", "body": {"username": "bb1793931538530reg", "fullName": "QA Thành", "password": "[REDACTED]", "email": "bb1793931538530reg@example.test"}}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. guest: POST /api/v1/auth/register với body ở Test Data.<br>3. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 201; public user có username và role USER; không lộ password/hash. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 201. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-001.json](evidence/TC-BB-001.json) |

## TC-BB-002 — Đăng ký: Thiếu username

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-002 |
| Module | Auth |
| Test Objective | Đăng ký: Thiếu username |
| Technique | EP |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "guest", "method": "POST", "path": "/auth/register", "body": {"fullName": "QA Thành", "password": "[REDACTED]", "email": "bb1793931538530invalid@example.test"}}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. guest: POST /api/v1/auth/register với body ở Test Data.<br>3. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 400 có mã lỗi; không tạo tài khoản thành công. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 400. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-002.json](evidence/TC-BB-002.json) |

## TC-BB-003 — Đăng ký: Username rỗng

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-003 |
| Module | Auth |
| Test Objective | Đăng ký: Username rỗng |
| Technique | EP |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "guest", "method": "POST", "path": "/auth/register", "body": {"username": "", "fullName": "QA Thành", "password": "[REDACTED]", "email": "bb1793931538530invalid@example.test"}}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. guest: POST /api/v1/auth/register với body ở Test Data.<br>3. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 400 có mã lỗi; không tạo tài khoản thành công. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 400. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-003.json](evidence/TC-BB-003.json) |

## TC-BB-004 — Đăng ký: Thiếu fullName

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-004 |
| Module | Auth |
| Test Objective | Đăng ký: Thiếu fullName |
| Technique | EP |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "guest", "method": "POST", "path": "/auth/register", "body": {"username": "bb1793931538530invalid", "password": "[REDACTED]", "email": "bb1793931538530invalid@example.test"}}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. guest: POST /api/v1/auth/register với body ở Test Data.<br>3. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 400 có mã lỗi; không tạo tài khoản thành công. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 400. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-004.json](evidence/TC-BB-004.json) |

## TC-BB-005 — Đăng ký: Thiếu password

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-005 |
| Module | Auth |
| Test Objective | Đăng ký: Thiếu password |
| Technique | EP |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "guest", "method": "POST", "path": "/auth/register", "body": {"username": "bb1793931538530invalid", "fullName": "QA Thành", "password": "[REDACTED]", "email": "bb1793931538530invalid@example.test"}}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. guest: POST /api/v1/auth/register với body ở Test Data.<br>3. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 400 có mã lỗi; không tạo tài khoản thành công. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 400. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-005.json](evidence/TC-BB-005.json) |

## TC-BB-006 — Đăng ký: Password null

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-006 |
| Module | Auth |
| Test Objective | Đăng ký: Password null |
| Technique | EP |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "guest", "method": "POST", "path": "/auth/register", "body": {"username": "bb1793931538530invalid", "fullName": "QA Thành", "password": "[REDACTED]", "email": "bb1793931538530invalid@example.test"}}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. guest: POST /api/v1/auth/register với body ở Test Data.<br>3. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 400 có mã lỗi; không tạo tài khoản thành công. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 400. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-006.json](evidence/TC-BB-006.json) |

## TC-BB-007 — Đăng ký: Password sai kiểu

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-007 |
| Module | Auth |
| Test Objective | Đăng ký: Password sai kiểu |
| Technique | EP |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "guest", "method": "POST", "path": "/auth/register", "body": {"username": "bb1793931538530invalid", "fullName": "QA Thành", "password": "[REDACTED]", "email": "bb1793931538530invalid@example.test"}}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. guest: POST /api/v1/auth/register với body ở Test Data.<br>3. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 400 có mã lỗi; không tạo tài khoản thành công. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 400. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-007.json](evidence/TC-BB-007.json) |

## TC-BB-008 — Đăng ký: Email sai định dạng

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-008 |
| Module | Auth |
| Test Objective | Đăng ký: Email sai định dạng |
| Technique | EP |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "guest", "method": "POST", "path": "/auth/register", "body": {"username": "bb1793931538530invalid", "fullName": "QA Thành", "password": "[REDACTED]", "email": "not-an-email"}}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. guest: POST /api/v1/auth/register với body ở Test Data.<br>3. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 400 có mã lỗi; không tạo tài khoản thành công. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 400. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-008.json](evidence/TC-BB-008.json) |

## TC-BB-009 — Độ dài mật khẩu ASCII 7

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-009 |
| Module | Auth |
| Test Objective | Độ dài mật khẩu ASCII 7 |
| Technique | BVA |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "guest", "method": "POST", "path": "/auth/register", "body": {"username": "bb1793931538530len7", "fullName": "QA Thành", "password": "[REDACTED]", "email": "bb1793931538530len7@example.test"}}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. guest: POST /api/v1/auth/register với body ở Test Data.<br>3. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 400; từ chối ngoài giới hạn 8 ký tự/72 byte. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 400. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-009.json](evidence/TC-BB-009.json) |

## TC-BB-010 — Độ dài mật khẩu ASCII 8

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-010 |
| Module | Auth |
| Test Objective | Độ dài mật khẩu ASCII 8 |
| Technique | BVA |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "guest", "method": "POST", "path": "/auth/register", "body": {"username": "bb1793931538530len8", "fullName": "QA Thành", "password": "[REDACTED]", "email": "bb1793931538530len8@example.test"}}, {"actor": "guest", "method": "POST", "path": "/auth/login", "body": {"username": "bb1793931538530len8", "password": "[REDACTED]"}}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. guest: POST /api/v1/auth/register với body ở Test Data.<br>3. guest: POST /api/v1/auth/login với body ở Test Data.<br>4. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 201; đăng nhập lại bằng đúng mật khẩu thành công. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 201, 200. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-010.json](evidence/TC-BB-010.json) |

## TC-BB-011 — Độ dài mật khẩu ASCII 9

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-011 |
| Module | Auth |
| Test Objective | Độ dài mật khẩu ASCII 9 |
| Technique | BVA |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "guest", "method": "POST", "path": "/auth/register", "body": {"username": "bb1793931538530len9", "fullName": "QA Thành", "password": "[REDACTED]", "email": "bb1793931538530len9@example.test"}}, {"actor": "guest", "method": "POST", "path": "/auth/login", "body": {"username": "bb1793931538530len9", "password": "[REDACTED]"}}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. guest: POST /api/v1/auth/register với body ở Test Data.<br>3. guest: POST /api/v1/auth/login với body ở Test Data.<br>4. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 201; đăng nhập lại bằng đúng mật khẩu thành công. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 201, 200. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-011.json](evidence/TC-BB-011.json) |

## TC-BB-012 — Độ dài mật khẩu ASCII 71

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-012 |
| Module | Auth |
| Test Objective | Độ dài mật khẩu ASCII 71 |
| Technique | BVA |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "guest", "method": "POST", "path": "/auth/register", "body": {"username": "bb1793931538530len71", "fullName": "QA Thành", "password": "[REDACTED]", "email": "bb1793931538530len71@example.test"}}, {"actor": "guest", "method": "POST", "path": "/auth/login", "body": {"username": "bb1793931538530len71", "password": "[REDACTED]"}}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. guest: POST /api/v1/auth/register với body ở Test Data.<br>3. guest: POST /api/v1/auth/login với body ở Test Data.<br>4. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 201; đăng nhập lại bằng đúng mật khẩu thành công. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 201, 200. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-012.json](evidence/TC-BB-012.json) |

## TC-BB-013 — Độ dài mật khẩu ASCII 72

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-013 |
| Module | Auth |
| Test Objective | Độ dài mật khẩu ASCII 72 |
| Technique | BVA |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "guest", "method": "POST", "path": "/auth/register", "body": {"username": "bb1793931538530len72", "fullName": "QA Thành", "password": "[REDACTED]", "email": "bb1793931538530len72@example.test"}}, {"actor": "guest", "method": "POST", "path": "/auth/login", "body": {"username": "bb1793931538530len72", "password": "[REDACTED]"}}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. guest: POST /api/v1/auth/register với body ở Test Data.<br>3. guest: POST /api/v1/auth/login với body ở Test Data.<br>4. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 201; đăng nhập lại bằng đúng mật khẩu thành công. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 201, 200. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-013.json](evidence/TC-BB-013.json) |

## TC-BB-014 — Độ dài mật khẩu ASCII 73

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-014 |
| Module | Auth |
| Test Objective | Độ dài mật khẩu ASCII 73 |
| Technique | BVA |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "guest", "method": "POST", "path": "/auth/register", "body": {"username": "bb1793931538530len73", "fullName": "QA Thành", "password": "[REDACTED]", "email": "bb1793931538530len73@example.test"}}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. guest: POST /api/v1/auth/register với body ở Test Data.<br>3. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 400; từ chối ngoài giới hạn 8 ký tự/72 byte. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 400. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-014.json](evidence/TC-BB-014.json) |

## TC-BB-015 — Mật khẩu Unicode vượt 72 byte

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-015 |
| Module | Auth |
| Test Objective | Mật khẩu Unicode vượt 72 byte |
| Technique | BVA |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "guest", "method": "POST", "path": "/auth/register", "body": {"username": "bb1793931538530unicode", "fullName": "QA Thành", "password": "[REDACTED]", "email": "bb1793931538530unicode@example.test"}}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. guest: POST /api/v1/auth/register với body ở Test Data.<br>3. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 400 vì 25 ký tự € =75 byte. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 400. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-015.json](evidence/TC-BB-015.json) |

## TC-BB-016 — Username trùng

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-016 |
| Module | Auth |
| Test Objective | Username trùng |
| Technique | EP |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "guest", "method": "POST", "path": "/auth/register", "body": {"username": "bb1793931538530u", "fullName": "QA Thành", "password": "[REDACTED]", "email": "bb1793931538530u@example.test"}}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. guest: POST /api/v1/auth/register với body ở Test Data.<br>3. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 409; không có tài khoản trùng. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 409. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-016.json](evidence/TC-BB-016.json) |

## TC-BB-017 — Đăng ký tự cấp ADMIN

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-017 |
| Module | Auth |
| Test Objective | Đăng ký tự cấp ADMIN |
| Technique | Decision table |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "guest", "method": "POST", "path": "/auth/register", "body": {"username": "bb1793931538530inject", "fullName": "QA Thành", "password": "[REDACTED]", "email": "bb1793931538530inject@example.test", "role": "ADMIN"}}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. guest: POST /api/v1/auth/register với body ở Test Data.<br>3. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 400; không tạo tài khoản quyền ADMIN. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 400. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-017.json](evidence/TC-BB-017.json) |

## TC-BB-018 — User đăng nhập đúng

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-018 |
| Module | Auth |
| Test Objective | User đăng nhập đúng |
| Technique | EP |
| Priority | High |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "guest", "method": "POST", "path": "/auth/login", "body": {"username": "bb1793931538530u", "password": "[REDACTED]"}}, {"actor": "valid", "method": "GET", "path": "/me", "body": null}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. guest: POST /api/v1/auth/login với body ở Test Data.<br>3. valid: GET /api/v1/me.<br>4. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 200; đúng username/USER; /me trả cùng id. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 200, 200. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-018.json](evidence/TC-BB-018.json) |

## TC-BB-019 — Admin đăng nhập đúng

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-019 |
| Module | Auth |
| Test Objective | Admin đăng nhập đúng |
| Technique | EP |
| Priority | High |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "a", "method": "GET", "path": "/admin/stats", "body": null}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. a: GET /api/v1/admin/stats.<br>3. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 200 role ADMIN; đọc thống kê được. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 200. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-019.json](evidence/TC-BB-019.json) |

## TC-BB-020 — Sai mật khẩu

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-020 |
| Module | Auth |
| Test Objective | Sai mật khẩu |
| Technique | EP |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "guest", "method": "POST", "path": "/auth/login", "body": {"username": "bb1793931538530u", "password": "[REDACTED]"}}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. guest: POST /api/v1/auth/login với body ở Test Data.<br>3. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 401 thông báo lỗi; không cấp phiên. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 401. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-020.json](evidence/TC-BB-020.json) |

## TC-BB-021 — Tài khoản không tồn tại

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-021 |
| Module | Auth |
| Test Objective | Tài khoản không tồn tại |
| Technique | EP |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "guest", "method": "POST", "path": "/auth/login", "body": {"username": "bb1793931538530missing", "password": "[REDACTED]"}}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. guest: POST /api/v1/auth/login với body ở Test Data.<br>3. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 401 thông báo chung; không cấp phiên. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 401. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-021.json](evidence/TC-BB-021.json) |

## TC-BB-022 — Thiếu dữ liệu đăng nhập

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-022 |
| Module | Auth |
| Test Objective | Thiếu dữ liệu đăng nhập |
| Technique | EP |
| Priority | High |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "guest", "method": "POST", "path": "/auth/login", "body": {}}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. guest: POST /api/v1/auth/login với body ở Test Data.<br>3. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 400 có mã lỗi. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 400. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-022.json](evidence/TC-BB-022.json) |

## TC-BB-023 — Chuỗi SQL ở username đăng nhập

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-023 |
| Module | Auth |
| Test Objective | Chuỗi SQL ở username đăng nhập |
| Technique | Error guessing |
| Priority | High |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "guest", "method": "POST", "path": "/auth/login", "body": {"username": "' OR 1=1 --", "password": "[REDACTED]"}}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. guest: POST /api/v1/auth/login với body ở Test Data.<br>3. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 401; không đăng nhập thành công. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 401. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-023.json](evidence/TC-BB-023.json) |

## TC-BB-024 — Cookie phiên có HttpOnly/SameSite

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-024 |
| Module | Auth |
| Test Objective | Cookie phiên có HttpOnly/SameSite |
| Technique | Error guessing |
| Priority | High |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "guest", "method": "POST", "path": "/auth/login", "body": {"username": "bb1793931538530u", "password": "[REDACTED]"}}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. guest: POST /api/v1/auth/login với body ở Test Data.<br>3. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | Set-Cookie có HttpOnly và SameSite=Strict ở môi trường development. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 200. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-024.json](evidence/TC-BB-024.json) |

## TC-BB-025 — Logout thu hồi phiên

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-025 |
| Module | Auth |
| Test Objective | Logout thu hồi phiên |
| Technique | State transition |
| Priority | High |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "guest", "method": "POST", "path": "/auth/login", "body": {"username": "bb1793931538530u", "password": "[REDACTED]"}}, {"actor": "logout", "method": "POST", "path": "/auth/logout", "body": {}}, {"actor": "logout", "method": "GET", "path": "/me", "body": null}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. guest: POST /api/v1/auth/login với body ở Test Data.<br>3. logout: POST /api/v1/auth/logout với body ở Test Data.<br>4. logout: GET /api/v1/me.<br>5. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | Logout 204, body rỗng; phát lại cookie cũ /me nhận 401. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 200, 204, 401. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-025.json](evidence/TC-BB-025.json) |

## TC-BB-026 — Guest không đọc sách

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-026 |
| Module | Books |
| Test Objective | Guest không đọc sách |
| Technique | Decision table |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "guest", "method": "GET", "path": "/books", "body": null}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. guest: GET /api/v1/books.<br>3. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 401 và error envelope. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 401. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-026.json](evidence/TC-BB-026.json) |

## TC-BB-027 — Danh sách sách mặc định

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-027 |
| Module | Books |
| Test Objective | Danh sách sách mặc định |
| Technique | EP |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "u", "method": "GET", "path": "/books", "body": null}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. u: GET /api/v1/books.<br>3. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 200 items chứa sách fixture; page=1/pageSize=12; totalItems >=3. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 200. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-027.json](evidence/TC-BB-027.json) |

## TC-BB-028 — Tìm theo tiêu đề duy nhất

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-028 |
| Module | Books |
| Test Objective | Tìm theo tiêu đề duy nhất |
| Technique | EP |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "u", "method": "GET", "path": "/books?q=QA%20bb1793931538530stock", "body": null}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. u: GET /api/v1/books?q=QA%20bb1793931538530stock.<br>3. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 200; đúng sách stock. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 200. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-028.json](evidence/TC-BB-028.json) |

## TC-BB-029 — Tìm không có kết quả

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-029 |
| Module | Books |
| Test Objective | Tìm không có kết quả |
| Technique | EP |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "u", "method": "GET", "path": "/books?q=bb1793931538530absent", "body": null}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. u: GET /api/v1/books?q=bb1793931538530absent.<br>3. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 200; items=[] và totalItems=0. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 200. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-029.json](evidence/TC-BB-029.json) |

## TC-BB-030 — Tìm chuỗi SQL

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-030 |
| Module | Books |
| Test Objective | Tìm chuỗi SQL |
| Technique | Error guessing |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "u", "method": "GET", "path": "/books?q='%20OR%201%3D1%20--", "body": null}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. u: GET /api/v1/books?q='%20OR%201%3D1%20--.<br>3. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 200; items rỗng; không lộ lỗi SQL hoặc trả mọi sách. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 200. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-030.json](evidence/TC-BB-030.json) |

## TC-BB-031 — Tìm Unicode tiếng Việt

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-031 |
| Module | Books |
| Test Objective | Tìm Unicode tiếng Việt |
| Technique | EP |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "u", "method": "GET", "path": "/books?q=D%E1%BA%BF%20M%C3%A8n", "body": null}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. u: GET /api/v1/books?q=D%E1%BA%BF%20M%C3%A8n.<br>3. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 200; sách seed Dế Mèn xuất hiện. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 200. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-031.json](evidence/TC-BB-031.json) |

## TC-BB-032 — Lọc thể loại

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-032 |
| Module | Books |
| Test Objective | Lọc thể loại |
| Technique | EP |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "u", "method": "GET", "path": "/books?category=QA", "body": null}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. u: GET /api/v1/books?category=QA.<br>3. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 200; tất cả items.category=QA. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 200. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-032.json](evidence/TC-BB-032.json) |

## TC-BB-033 — Chi tiết hợp lệ

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-033 |
| Module | Books |
| Test Objective | Chi tiết hợp lệ |
| Technique | EP |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "u", "method": "GET", "path": "/books/7", "body": null}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. u: GET /api/v1/books/7.<br>3. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 200; đúng id, title và tổng/tồn của fixture. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 200. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-033.json](evidence/TC-BB-033.json) |

## TC-BB-034 — Chi tiết id không tồn tại

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-034 |
| Module | Books |
| Test Objective | Chi tiết id không tồn tại |
| Technique | EP |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "u", "method": "GET", "path": "/books/999999999", "body": null}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. u: GET /api/v1/books/999999999.<br>3. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 404 có mã lỗi. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 404. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-034.json](evidence/TC-BB-034.json) |

## TC-BB-035 — Chi tiết id sai định dạng

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-035 |
| Module | Books |
| Test Objective | Chi tiết id sai định dạng |
| Technique | EP |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "u", "method": "GET", "path": "/books/abc", "body": null}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. u: GET /api/v1/books/abc.<br>3. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 400 có mã lỗi. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 400. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-035.json](evidence/TC-BB-035.json) |

## TC-BB-036 — Phân trang/sắp xếp page=0

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-036 |
| Module | Books |
| Test Objective | Phân trang/sắp xếp page=0 |
| Technique | BVA |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "u", "method": "GET", "path": "/books?page=0", "body": null}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. u: GET /api/v1/books?page=0.<br>3. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 400; từ chối query sai. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 400. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-036.json](evidence/TC-BB-036.json) |

## TC-BB-037 — Phân trang/sắp xếp page=1&pageSize=1

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-037 |
| Module | Books |
| Test Objective | Phân trang/sắp xếp page=1&pageSize=1 |
| Technique | BVA |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "u", "method": "GET", "path": "/books?page=1&pageSize=1", "body": null}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. u: GET /api/v1/books?page=1&pageSize=1.<br>3. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 200; kích thước trả không vượt pageSize và metadata khớp. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 200. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-037.json](evidence/TC-BB-037.json) |

## TC-BB-038 — Phân trang/sắp xếp pageSize=100

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-038 |
| Module | Books |
| Test Objective | Phân trang/sắp xếp pageSize=100 |
| Technique | BVA |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "u", "method": "GET", "path": "/books?pageSize=100", "body": null}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. u: GET /api/v1/books?pageSize=100.<br>3. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 200; kích thước trả không vượt pageSize và metadata khớp. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 200. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-038.json](evidence/TC-BB-038.json) |

## TC-BB-039 — Phân trang/sắp xếp pageSize=101

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-039 |
| Module | Books |
| Test Objective | Phân trang/sắp xếp pageSize=101 |
| Technique | BVA |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "u", "method": "GET", "path": "/books?pageSize=101", "body": null}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. u: GET /api/v1/books?pageSize=101.<br>3. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 400; từ chối query sai. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 400. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-039.json](evidence/TC-BB-039.json) |

## TC-BB-040 — Phân trang/sắp xếp pageSize=-1

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-040 |
| Module | Books |
| Test Objective | Phân trang/sắp xếp pageSize=-1 |
| Technique | BVA |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "u", "method": "GET", "path": "/books?pageSize=-1", "body": null}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. u: GET /api/v1/books?pageSize=-1.<br>3. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 400; từ chối query sai. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 400. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-040.json](evidence/TC-BB-040.json) |

## TC-BB-041 — Phân trang/sắp xếp page=abc

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-041 |
| Module | Books |
| Test Objective | Phân trang/sắp xếp page=abc |
| Technique | BVA |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "u", "method": "GET", "path": "/books?page=abc", "body": null}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. u: GET /api/v1/books?page=abc.<br>3. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 400; từ chối query sai. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 400. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-041.json](evidence/TC-BB-041.json) |

## TC-BB-042 — Phân trang/sắp xếp sort=unknown

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-042 |
| Module | Books |
| Test Objective | Phân trang/sắp xếp sort=unknown |
| Technique | BVA |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "u", "method": "GET", "path": "/books?sort=unknown", "body": null}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. u: GET /api/v1/books?sort=unknown.<br>3. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 400; từ chối query sai. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 400. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-042.json](evidence/TC-BB-042.json) |

## TC-BB-043 — Trang vượt số trang

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-043 |
| Module | Books |
| Test Objective | Trang vượt số trang |
| Technique | EP |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "u", "method": "GET", "path": "/books?page=9999", "body": null}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. u: GET /api/v1/books?page=9999.<br>3. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 200 items=[]; totalItems vẫn phản ánh tổng dữ liệu. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 200. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-043.json](evidence/TC-BB-043.json) |

## TC-BB-044 — Tạo yêu cầu hợp lệ

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-044 |
| Module | Borrow |
| Test Objective | Tạo yêu cầu hợp lệ |
| Technique | Decision table |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "u", "method": "GET", "path": "/books/7", "body": null}, {"actor": "u", "method": "POST", "path": "/borrow-requests", "body": {"bookId": "7", "borrowDate": "2026-11-06", "dueDate": "2026-11-20"}}, {"actor": "u", "method": "GET", "path": "/books/7", "body": null}, {"actor": "u", "method": "GET", "path": "/me/borrow-requests", "body": null}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. u: GET /api/v1/books/7.<br>3. u: POST /api/v1/borrow-requests với body ở Test Data.<br>4. u: GET /api/v1/books/7.<br>5. u: GET /api/v1/me/borrow-requests.<br>6. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 201 PENDING, đúng bookId; tồn kho không đổi; lịch sử có request. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 200, 201, 200, 200. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-044.json](evidence/TC-BB-044.json) |

## TC-BB-045 — Tạo yêu cầu khi sách hết

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-045 |
| Module | Borrow |
| Test Objective | Tạo yêu cầu khi sách hết |
| Technique | Decision table |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "u", "method": "POST", "path": "/borrow-requests", "body": {"bookId": "8", "borrowDate": "2026-11-06", "dueDate": "2026-11-20"}}, {"actor": "u", "method": "GET", "path": "/books/8", "body": null}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. u: POST /api/v1/borrow-requests với body ở Test Data.<br>3. u: GET /api/v1/books/8.<br>4. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 201 PENDING; tồn vẫn 0 theo README. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 201, 200. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-045.json](evidence/TC-BB-045.json) |

## TC-BB-046 — Guest tạo yêu cầu

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-046 |
| Module | Borrow |
| Test Objective | Guest tạo yêu cầu |
| Technique | Decision table |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "guest", "method": "POST", "path": "/borrow-requests", "body": {"bookId": "7", "borrowDate": "2026-11-06", "dueDate": "2026-11-20"}}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. guest: POST /api/v1/borrow-requests với body ở Test Data.<br>3. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 401. |
| Actual Result | Expected values to be strictly equal:<br><br>500 !== 401<br><br>HTTP quan sát: 500. |
| Status | Fail |
| Bug ID | BUG-BB-001 |
| Evidence | [evidence/TC-BB-046.json](evidence/TC-BB-046.json) |

## TC-BB-047 — Admin tạo yêu cầu

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-047 |
| Module | Borrow |
| Test Objective | Admin tạo yêu cầu |
| Technique | Decision table |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "a", "method": "POST", "path": "/borrow-requests", "body": {"bookId": "7", "borrowDate": "2026-11-06", "dueDate": "2026-11-20"}}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. a: POST /api/v1/borrow-requests với body ở Test Data.<br>3. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 403 theo README chỉ USER tạo. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 403. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-047.json](evidence/TC-BB-047.json) |

## TC-BB-048 — Sách không tồn tại

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-048 |
| Module | Borrow |
| Test Objective | Sách không tồn tại |
| Technique | EP |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "u", "method": "POST", "path": "/borrow-requests", "body": {"bookId": "999999999", "borrowDate": "2026-11-06", "dueDate": "2026-11-20"}}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. u: POST /api/v1/borrow-requests với body ở Test Data.<br>3. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 404. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 404. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-048.json](evidence/TC-BB-048.json) |

## TC-BB-049 — Ngày trả bằng ngày mượn

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-049 |
| Module | Borrow |
| Test Objective | Ngày trả bằng ngày mượn |
| Technique | EP/BVA |
| Priority | High |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "u", "method": "POST", "path": "/borrow-requests", "body": {"bookId": "7", "borrowDate": "2026-11-06", "dueDate": "2026-11-06"}}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. u: POST /api/v1/borrow-requests với body ở Test Data.<br>3. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 400; không tạo request thành công. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 400. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-049.json](evidence/TC-BB-049.json) |

## TC-BB-050 — Ngày trả trước ngày mượn

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-050 |
| Module | Borrow |
| Test Objective | Ngày trả trước ngày mượn |
| Technique | EP/BVA |
| Priority | High |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "u", "method": "POST", "path": "/borrow-requests", "body": {"bookId": "7", "borrowDate": "2026-11-06", "dueDate": "2026-11-05"}}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. u: POST /api/v1/borrow-requests với body ở Test Data.<br>3. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 400; không tạo request thành công. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 400. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-050.json](evidence/TC-BB-050.json) |

## TC-BB-051 — Ngày lịch không tồn tại

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-051 |
| Module | Borrow |
| Test Objective | Ngày lịch không tồn tại |
| Technique | EP/BVA |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "u", "method": "POST", "path": "/borrow-requests", "body": {"bookId": "7", "borrowDate": "2026-02-30", "dueDate": "2026-11-20"}}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. u: POST /api/v1/borrow-requests với body ở Test Data.<br>3. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 400; không tạo request thành công. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 400. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-051.json](evidence/TC-BB-051.json) |

## TC-BB-052 — Ngày sai định dạng

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-052 |
| Module | Borrow |
| Test Objective | Ngày sai định dạng |
| Technique | EP/BVA |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "u", "method": "POST", "path": "/borrow-requests", "body": {"bookId": "7", "borrowDate": "06/11/2026", "dueDate": "2026-11-20"}}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. u: POST /api/v1/borrow-requests với body ở Test Data.<br>3. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 400; không tạo request thành công. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 400. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-052.json](evidence/TC-BB-052.json) |

## TC-BB-053 — Ngày null

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-053 |
| Module | Borrow |
| Test Objective | Ngày null |
| Technique | EP/BVA |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "u", "method": "POST", "path": "/borrow-requests", "body": {"bookId": "7", "borrowDate": null, "dueDate": "2026-11-20"}}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. u: POST /api/v1/borrow-requests với body ở Test Data.<br>3. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 400; không tạo request thành công. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 400. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-053.json](evidence/TC-BB-053.json) |

## TC-BB-054 — Thiếu bookId

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-054 |
| Module | Borrow |
| Test Objective | Thiếu bookId |
| Technique | EP/BVA |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "u", "method": "POST", "path": "/borrow-requests", "body": {"borrowDate": "2026-11-06", "dueDate": "2026-11-20"}}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. u: POST /api/v1/borrow-requests với body ở Test Data.<br>3. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 400; không tạo request thành công. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 400. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-054.json](evidence/TC-BB-054.json) |

## TC-BB-055 — BookId số âm

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-055 |
| Module | Borrow |
| Test Objective | BookId số âm |
| Technique | EP/BVA |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "u", "method": "POST", "path": "/borrow-requests", "body": {"bookId": -1, "borrowDate": "2026-11-06", "dueDate": "2026-11-20"}}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. u: POST /api/v1/borrow-requests với body ở Test Data.<br>3. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 400; không tạo request thành công. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 400. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-055.json](evidence/TC-BB-055.json) |

## TC-BB-056 — Ngày trả ngay sau ngày mượn

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-056 |
| Module | Borrow |
| Test Objective | Ngày trả ngay sau ngày mượn |
| Technique | BVA |
| Priority | High |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "u", "method": "POST", "path": "/borrow-requests", "body": {"bookId": "7", "borrowDate": "2026-11-06", "dueDate": "2026-11-07"}}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. u: POST /api/v1/borrow-requests với body ở Test Data.<br>3. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 201 PENDING với dueDate ngày kế tiếp. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 201. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-056.json](evidence/TC-BB-056.json) |

## TC-BB-057 — Injection userId/status

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-057 |
| Module | Borrow |
| Test Objective | Injection userId/status |
| Technique | Decision table |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "u", "method": "POST", "path": "/borrow-requests", "body": {"bookId": "7", "borrowDate": "2026-11-06", "dueDate": "2026-11-20", "userId": "3", "status": "APPROVED"}}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. u: POST /api/v1/borrow-requests với body ở Test Data.<br>3. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 400; không tạo request cho User khác/APPROVED. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 400. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-057.json](evidence/TC-BB-057.json) |

## TC-BB-058 — Thiếu CSRF

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-058 |
| Module | Borrow |
| Test Objective | Thiếu CSRF |
| Technique | Decision table |
| Priority | High |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "u", "method": "POST", "path": "/borrow-requests", "body": {"bookId": "7", "borrowDate": "2026-11-06", "dueDate": "2026-11-20"}}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. u: POST /api/v1/borrow-requests với body ở Test Data.<br>3. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 403; không tạo request. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 403. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-058.json](evidence/TC-BB-058.json) |

## TC-BB-059 — CSRF sai

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-059 |
| Module | Borrow |
| Test Objective | CSRF sai |
| Technique | Decision table |
| Priority | High |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "u", "method": "POST", "path": "/borrow-requests", "body": {"bookId": "7", "borrowDate": "2026-11-06", "dueDate": "2026-11-20"}}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. u: POST /api/v1/borrow-requests với body ở Test Data.<br>3. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 403; không tạo request. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 403. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-059.json](evidence/TC-BB-059.json) |

## TC-BB-060 — Gửi lại tạo pending trùng

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-060 |
| Module | Borrow |
| Test Objective | Gửi lại tạo pending trùng |
| Technique | Error guessing |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "u", "method": "GET", "path": "/books/7", "body": null}, {"actor": "u", "method": "POST", "path": "/borrow-requests", "body": {"bookId": "7", "borrowDate": "2026-11-06", "dueDate": "2026-11-20"}}, {"actor": "u", "method": "POST", "path": "/borrow-requests", "body": {"bookId": "7", "borrowDate": "2026-11-06", "dueDate": "2026-11-20"}}, {"actor": "u", "method": "GET", "path": "/books/7", "body": null}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. u: GET /api/v1/books/7.<br>3. u: POST /api/v1/borrow-requests với body ở Test Data.<br>4. u: POST /api/v1/borrow-requests với body ở Test Data.<br>5. u: GET /api/v1/books/7.<br>6. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | Hai lần tạo 201 với id khác nhau, cùng PENDING; tồn không đổi theo DENY_DUPLICATE_PENDING=false. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 200, 201, 201, 200. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-060.json](evidence/TC-BB-060.json) |

## TC-BB-061 — Hồ sơ cá nhân public DTO

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-061 |
| Module | Profile |
| Test Objective | Hồ sơ cá nhân public DTO |
| Technique | EP |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "u", "method": "GET", "path": "/me", "body": null}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. u: GET /api/v1/me.<br>3. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 200; đúng id/username; không có password/hash/session credential. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 200. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-061.json](evidence/TC-BB-061.json) |

## TC-BB-062 — Guest đọc hồ sơ

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-062 |
| Module | Profile |
| Test Objective | Guest đọc hồ sơ |
| Technique | Decision table |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "guest", "method": "GET", "path": "/me", "body": null}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. guest: GET /api/v1/me.<br>3. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 401. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 401. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-062.json](evidence/TC-BB-062.json) |

## TC-BB-063 — Lịch sử User khác độc lập

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-063 |
| Module | Profile |
| Test Objective | Lịch sử User khác độc lập |
| Technique | Decision table |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. Phụ thuộc dữ liệu/state từ TC-BB-044. |
| Test Data | {"requests": [{"actor": "v", "method": "GET", "path": "/me/borrow-requests", "body": null}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. Phụ thuộc dữ liệu/state từ TC-BB-044.<br>2. v: GET /api/v1/me/borrow-requests.<br>3. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | User v không nhìn thấy request của u. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 200. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-063.json](evidence/TC-BB-063.json) |

## TC-BB-064 — userId query không đổi chủ lịch sử

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-064 |
| Module | Profile |
| Test Objective | userId query không đổi chủ lịch sử |
| Technique | Decision table |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. Phụ thuộc dữ liệu/state từ TC-BB-044. |
| Test Data | {"requests": [{"actor": "v", "method": "GET", "path": "/me/borrow-requests?userId=2", "body": null}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. Phụ thuộc dữ liệu/state từ TC-BB-044.<br>2. v: GET /api/v1/me/borrow-requests?userId=2.<br>3. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | Không có request của u trong response của v (400 cũng chấp nhận nếu từ chối query). |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 200. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-064.json](evidence/TC-BB-064.json) |

## TC-BB-065 — Lọc lịch sử PENDING

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-065 |
| Module | Profile |
| Test Objective | Lọc lịch sử PENDING |
| Technique | EP |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. Phụ thuộc dữ liệu/state từ TC-BB-044. |
| Test Data | {"requests": [{"actor": "u", "method": "GET", "path": "/me/borrow-requests?status=PENDING", "body": null}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. Phụ thuộc dữ liệu/state từ TC-BB-044.<br>2. u: GET /api/v1/me/borrow-requests?status=PENDING.<br>3. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 200; tất cả items PENDING. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 200. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-065.json](evidence/TC-BB-065.json) |

## TC-BB-066 — Status không hỗ trợ

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-066 |
| Module | Profile |
| Test Objective | Status không hỗ trợ |
| Technique | EP |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "u", "method": "GET", "path": "/me/borrow-requests?status=RETURNED", "body": null}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. u: GET /api/v1/me/borrow-requests?status=RETURNED.<br>3. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 400. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 400. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-066.json](evidence/TC-BB-066.json) |

## TC-BB-067 — guest GET /admin/stats

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-067 |
| Module | Authorization |
| Test Objective | guest GET /admin/stats |
| Technique | Decision table |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "guest", "method": "GET", "path": "/admin/stats", "body": null}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. guest: GET /api/v1/admin/stats.<br>3. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 401; không trả dữ liệu Admin. |
| Actual Result | Expected values to be strictly equal:<br><br>500 !== 401<br><br>HTTP quan sát: 500. |
| Status | Fail |
| Bug ID | BUG-BB-001 |
| Evidence | [evidence/TC-BB-067.json](evidence/TC-BB-067.json) |

## TC-BB-068 — u GET /admin/stats

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-068 |
| Module | Authorization |
| Test Objective | u GET /admin/stats |
| Technique | Decision table |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "u", "method": "GET", "path": "/admin/stats", "body": null}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. u: GET /api/v1/admin/stats.<br>3. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 403; không trả dữ liệu Admin. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 403. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-068.json](evidence/TC-BB-068.json) |

## TC-BB-069 — guest GET /admin/books

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-069 |
| Module | Authorization |
| Test Objective | guest GET /admin/books |
| Technique | Decision table |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "guest", "method": "GET", "path": "/admin/books", "body": null}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. guest: GET /api/v1/admin/books.<br>3. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 401; không trả dữ liệu Admin. |
| Actual Result | Expected values to be strictly equal:<br><br>500 !== 401<br><br>HTTP quan sát: 500. |
| Status | Fail |
| Bug ID | BUG-BB-001 |
| Evidence | [evidence/TC-BB-069.json](evidence/TC-BB-069.json) |

## TC-BB-070 — u GET /admin/books

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-070 |
| Module | Authorization |
| Test Objective | u GET /admin/books |
| Technique | Decision table |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "u", "method": "GET", "path": "/admin/books", "body": null}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. u: GET /api/v1/admin/books.<br>3. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 403; không trả dữ liệu Admin. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 403. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-070.json](evidence/TC-BB-070.json) |

## TC-BB-071 — guest GET /admin/users

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-071 |
| Module | Authorization |
| Test Objective | guest GET /admin/users |
| Technique | Decision table |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "guest", "method": "GET", "path": "/admin/users", "body": null}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. guest: GET /api/v1/admin/users.<br>3. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 401; không trả dữ liệu Admin. |
| Actual Result | Expected values to be strictly equal:<br><br>500 !== 401<br><br>HTTP quan sát: 500. |
| Status | Fail |
| Bug ID | BUG-BB-001 |
| Evidence | [evidence/TC-BB-071.json](evidence/TC-BB-071.json) |

## TC-BB-072 — u GET /admin/users

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-072 |
| Module | Authorization |
| Test Objective | u GET /admin/users |
| Technique | Decision table |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "u", "method": "GET", "path": "/admin/users", "body": null}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. u: GET /api/v1/admin/users.<br>3. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 403; không trả dữ liệu Admin. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 403. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-072.json](evidence/TC-BB-072.json) |

## TC-BB-073 — guest GET /admin/borrow-requests

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-073 |
| Module | Authorization |
| Test Objective | guest GET /admin/borrow-requests |
| Technique | Decision table |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "guest", "method": "GET", "path": "/admin/borrow-requests", "body": null}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. guest: GET /api/v1/admin/borrow-requests.<br>3. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 401; không trả dữ liệu Admin. |
| Actual Result | Expected values to be strictly equal:<br><br>500 !== 401<br><br>HTTP quan sát: 500. |
| Status | Fail |
| Bug ID | BUG-BB-001 |
| Evidence | [evidence/TC-BB-073.json](evidence/TC-BB-073.json) |

## TC-BB-074 — u GET /admin/borrow-requests

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-074 |
| Module | Authorization |
| Test Objective | u GET /admin/borrow-requests |
| Technique | Decision table |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "u", "method": "GET", "path": "/admin/borrow-requests", "body": null}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. u: GET /api/v1/admin/borrow-requests.<br>3. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 403; không trả dữ liệu Admin. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 403. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-074.json](evidence/TC-BB-074.json) |

## TC-BB-075 — Thêm sách hợp lệ

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-075 |
| Module | Admin books |
| Test Objective | Thêm sách hợp lệ |
| Technique | EP |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "a", "method": "POST", "path": "/admin/books", "body": {"bookCode": "bb1793931538530create", "title": "QA bb1793931538530create", "author": "Tác giả QA", "category": "QA", "description": "Dữ liệu thử nghiệm", "totalQuantity": 3}}, {"actor": "u", "method": "GET", "path": "/books/10", "body": null}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. a: POST /api/v1/admin/books với body ở Test Data.<br>3. u: GET /api/v1/books/10.<br>4. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 201; total=available=3; đọc lại đúng bookCode. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 201, 200. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-075.json](evidence/TC-BB-075.json) |

## TC-BB-076 — Thêm mã sách trùng

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-076 |
| Module | Admin books |
| Test Objective | Thêm mã sách trùng |
| Technique | EP |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "a", "method": "POST", "path": "/admin/books", "body": {"bookCode": "bb1793931538530stock", "title": "QA bb1793931538530stock", "author": "Tác giả QA", "category": "QA", "description": "Dữ liệu thử nghiệm", "totalQuantity": 2}}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. a: POST /api/v1/admin/books với body ở Test Data.<br>3. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 409. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 409. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-076.json](evidence/TC-BB-076.json) |

## TC-BB-077 — Thiếu title

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-077 |
| Module | Admin books |
| Test Objective | Thiếu title |
| Technique | EP/BVA |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "a", "method": "POST", "path": "/admin/books", "body": {"bookCode": "bb1793931538530invalidbook", "author": "Tác giả QA", "category": "QA", "description": "Dữ liệu thử nghiệm", "totalQuantity": 2}}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. a: POST /api/v1/admin/books với body ở Test Data.<br>3. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 400; không tạo sách thành công. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 400. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-077.json](evidence/TC-BB-077.json) |

## TC-BB-078 — Title rỗng

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-078 |
| Module | Admin books |
| Test Objective | Title rỗng |
| Technique | EP/BVA |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "a", "method": "POST", "path": "/admin/books", "body": {"bookCode": "bb1793931538530invalidbook", "title": "", "author": "Tác giả QA", "category": "QA", "description": "Dữ liệu thử nghiệm", "totalQuantity": 2}}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. a: POST /api/v1/admin/books với body ở Test Data.<br>3. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 400; không tạo sách thành công. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 400. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-078.json](evidence/TC-BB-078.json) |

## TC-BB-079 — Tồn tổng âm

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-079 |
| Module | Admin books |
| Test Objective | Tồn tổng âm |
| Technique | EP/BVA |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "a", "method": "POST", "path": "/admin/books", "body": {"bookCode": "bb1793931538530invalidbook", "title": "QA bb1793931538530invalidbook", "author": "Tác giả QA", "category": "QA", "description": "Dữ liệu thử nghiệm", "totalQuantity": -1}}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. a: POST /api/v1/admin/books với body ở Test Data.<br>3. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 400; không tạo sách thành công. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 400. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-079.json](evidence/TC-BB-079.json) |

## TC-BB-080 — Tồn tổng số lẻ

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-080 |
| Module | Admin books |
| Test Objective | Tồn tổng số lẻ |
| Technique | EP/BVA |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "a", "method": "POST", "path": "/admin/books", "body": {"bookCode": "bb1793931538530invalidbook", "title": "QA bb1793931538530invalidbook", "author": "Tác giả QA", "category": "QA", "description": "Dữ liệu thử nghiệm", "totalQuantity": 1.5}}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. a: POST /api/v1/admin/books với body ở Test Data.<br>3. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 400; không tạo sách thành công. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 400. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-080.json](evidence/TC-BB-080.json) |

## TC-BB-081 — Tồn tổng null

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-081 |
| Module | Admin books |
| Test Objective | Tồn tổng null |
| Technique | EP/BVA |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "a", "method": "POST", "path": "/admin/books", "body": {"bookCode": "bb1793931538530invalidbook", "title": "QA bb1793931538530invalidbook", "author": "Tác giả QA", "category": "QA", "description": "Dữ liệu thử nghiệm", "totalQuantity": null}}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. a: POST /api/v1/admin/books với body ở Test Data.<br>3. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 400; không tạo sách thành công. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 400. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-081.json](evidence/TC-BB-081.json) |

## TC-BB-082 — Tồn tổng sai kiểu

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-082 |
| Module | Admin books |
| Test Objective | Tồn tổng sai kiểu |
| Technique | EP/BVA |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "a", "method": "POST", "path": "/admin/books", "body": {"bookCode": "bb1793931538530invalidbook", "title": "QA bb1793931538530invalidbook", "author": "Tác giả QA", "category": "QA", "description": "Dữ liệu thử nghiệm", "totalQuantity": "abc"}}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. a: POST /api/v1/admin/books với body ở Test Data.<br>3. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 400; không tạo sách thành công. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 400. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-082.json](evidence/TC-BB-082.json) |

## TC-BB-083 — Tổng số lượng 0

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-083 |
| Module | Admin books |
| Test Objective | Tổng số lượng 0 |
| Technique | BVA |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "a", "method": "POST", "path": "/admin/books", "body": {"bookCode": "bb1793931538530zeroadd", "title": "QA bb1793931538530zeroadd", "author": "Tác giả QA", "category": "QA", "description": "Dữ liệu thử nghiệm", "totalQuantity": 0}}, {"actor": "u", "method": "GET", "path": "/books/12", "body": null}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. a: POST /api/v1/admin/books với body ở Test Data.<br>3. u: GET /api/v1/books/12.<br>4. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 201; total=available=0. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 201, 200. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-083.json](evidence/TC-BB-083.json) |

## TC-BB-084 — Không nhận availableQuantity từ client

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-084 |
| Module | Admin books |
| Test Objective | Không nhận availableQuantity từ client |
| Technique | Decision table |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "a", "method": "POST", "path": "/admin/books", "body": {"bookCode": "bb1793931538530available", "title": "QA bb1793931538530available", "author": "Tác giả QA", "category": "QA", "description": "Dữ liệu thử nghiệm", "totalQuantity": 2, "availableQuantity": 999}}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. a: POST /api/v1/admin/books với body ở Test Data.<br>3. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 400; client không tự đặt tồn. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 400. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-084.json](evidence/TC-BB-084.json) |

## TC-BB-085 — User không thêm sách

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-085 |
| Module | Admin books |
| Test Objective | User không thêm sách |
| Technique | Decision table |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "u", "method": "POST", "path": "/admin/books", "body": {"bookCode": "bb1793931538530forbidden", "title": "QA bb1793931538530forbidden", "author": "Tác giả QA", "category": "QA", "description": "Dữ liệu thử nghiệm", "totalQuantity": 2}}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. u: POST /api/v1/admin/books với body ở Test Data.<br>3. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 403; không ghi sách. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 403. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-085.json](evidence/TC-BB-085.json) |

## TC-BB-086 — Sửa sách và đọc lại

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-086 |
| Module | Admin books |
| Test Objective | Sửa sách và đọc lại |
| Technique | EP |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "a", "method": "PUT", "path": "/admin/books/9", "body": {"bookCode": "bb1793931538530disposable", "title": "QA updated bb1793931538530", "author": "Tác giả QA", "category": "QA", "description": "Dữ liệu thử nghiệm", "totalQuantity": 4}}, {"actor": "u", "method": "GET", "path": "/books/9", "body": null}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. a: PUT /api/v1/admin/books/9 với body ở Test Data.<br>3. u: GET /api/v1/books/9.<br>4. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 200; title/total mới bền qua GET; available=total nếu chưa cấp phát. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 200, 200. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-086.json](evidence/TC-BB-086.json) |

## TC-BB-087 — Sửa id không tồn tại

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-087 |
| Module | Admin books |
| Test Objective | Sửa id không tồn tại |
| Technique | EP |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "a", "method": "PUT", "path": "/admin/books/999999999", "body": {"bookCode": "bb1793931538530missingbook", "title": "QA bb1793931538530missingbook", "author": "Tác giả QA", "category": "QA", "description": "Dữ liệu thử nghiệm", "totalQuantity": 2}}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. a: PUT /api/v1/admin/books/999999999 với body ở Test Data.<br>3. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 404. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 404. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-087.json](evidence/TC-BB-087.json) |

## TC-BB-088 — Xóa sách không có lịch sử

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-088 |
| Module | Admin books |
| Test Objective | Xóa sách không có lịch sử |
| Technique | EP |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. Phụ thuộc dữ liệu/state từ TC-BB-086. |
| Test Data | {"requests": [{"actor": "a", "method": "DELETE", "path": "/admin/books/9", "body": null}, {"actor": "u", "method": "GET", "path": "/books/9", "body": null}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. Phụ thuộc dữ liệu/state từ TC-BB-086.<br>2. a: DELETE /api/v1/admin/books/9.<br>3. u: GET /api/v1/books/9.<br>4. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 204 body rỗng; GET sau xóa 404. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 204, 404. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-088.json](evidence/TC-BB-088.json) |

## TC-BB-089 — Xóa id không tồn tại

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-089 |
| Module | Admin books |
| Test Objective | Xóa id không tồn tại |
| Technique | EP |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "a", "method": "DELETE", "path": "/admin/books/999999999", "body": null}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. a: DELETE /api/v1/admin/books/999999999.<br>3. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 404. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 404. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-089.json](evidence/TC-BB-089.json) |

## TC-BB-090 — Danh sách yêu cầu Admin

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-090 |
| Module | Review |
| Test Objective | Danh sách yêu cầu Admin |
| Technique | EP |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. Phụ thuộc dữ liệu/state từ TC-BB-044. |
| Test Data | {"requests": [{"actor": "a", "method": "GET", "path": "/admin/borrow-requests?pageSize=100", "body": null}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. Phụ thuộc dữ liệu/state từ TC-BB-044.<br>2. a: GET /api/v1/admin/borrow-requests?pageSize=100.<br>3. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 200; có request fixture và đúng trạng thái. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 200. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-090.json](evidence/TC-BB-090.json) |

## TC-BB-091 — Approve PENDING còn sách

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-091 |
| Module | Review |
| Test Objective | Approve PENDING còn sách |
| Technique | State transition |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "u", "method": "POST", "path": "/borrow-requests", "body": {"bookId": "7", "borrowDate": "2026-11-06", "dueDate": "2026-11-20"}}, {"actor": "u", "method": "GET", "path": "/books/7", "body": null}, {"actor": "a", "method": "PATCH", "path": "/admin/borrow-requests/6", "body": {"decision": "APPROVE", "note": "QA approve"}}, {"actor": "u", "method": "GET", "path": "/books/7", "body": null}, {"actor": "u", "method": "GET", "path": "/me/borrow-requests?status=APPROVED", "body": null}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. u: POST /api/v1/borrow-requests với body ở Test Data.<br>3. u: GET /api/v1/books/7.<br>4. a: PATCH /api/v1/admin/borrow-requests/6 với body ở Test Data.<br>5. u: GET /api/v1/books/7.<br>6. u: GET /api/v1/me/borrow-requests?status=APPROVED.<br>7. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 200 APPROVED; stock giảm đúng 1; lịch sử User phản ánh APPROVED. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 201, 200, 200, 200, 200. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-091.json](evidence/TC-BB-091.json) |

## TC-BB-092 — Approve lặp trên APPROVED

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-092 |
| Module | Review |
| Test Objective | Approve lặp trên APPROVED |
| Technique | State transition |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. Phụ thuộc dữ liệu/state từ TC-BB-091. |
| Test Data | {"requests": [{"actor": "u", "method": "GET", "path": "/books/7", "body": null}, {"actor": "a", "method": "PATCH", "path": "/admin/borrow-requests/6", "body": {"decision": "APPROVE"}}, {"actor": "u", "method": "GET", "path": "/books/7", "body": null}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. Phụ thuộc dữ liệu/state từ TC-BB-091.<br>2. u: GET /api/v1/books/7.<br>3. a: PATCH /api/v1/admin/borrow-requests/6 với body ở Test Data.<br>4. u: GET /api/v1/books/7.<br>5. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 409; stock không giảm lần hai. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 200, 409, 200. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-092.json](evidence/TC-BB-092.json) |

## TC-BB-093 — Deny sau APPROVED

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-093 |
| Module | Review |
| Test Objective | Deny sau APPROVED |
| Technique | State transition |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. Phụ thuộc dữ liệu/state từ TC-BB-091. |
| Test Data | {"requests": [{"actor": "u", "method": "GET", "path": "/books/7", "body": null}, {"actor": "a", "method": "PATCH", "path": "/admin/borrow-requests/6", "body": {"decision": "DENY"}}, {"actor": "u", "method": "GET", "path": "/books/7", "body": null}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. Phụ thuộc dữ liệu/state từ TC-BB-091.<br>2. u: GET /api/v1/books/7.<br>3. a: PATCH /api/v1/admin/borrow-requests/6 với body ở Test Data.<br>4. u: GET /api/v1/books/7.<br>5. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 409; stock không đổi. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 200, 409, 200. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-093.json](evidence/TC-BB-093.json) |

## TC-BB-094 — Deny PENDING

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-094 |
| Module | Review |
| Test Objective | Deny PENDING |
| Technique | State transition |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "u", "method": "POST", "path": "/borrow-requests", "body": {"bookId": "7", "borrowDate": "2026-11-06", "dueDate": "2026-11-20"}}, {"actor": "u", "method": "GET", "path": "/books/7", "body": null}, {"actor": "a", "method": "PATCH", "path": "/admin/borrow-requests/7", "body": {"decision": "DENY"}}, {"actor": "u", "method": "GET", "path": "/books/7", "body": null}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. u: POST /api/v1/borrow-requests với body ở Test Data.<br>3. u: GET /api/v1/books/7.<br>4. a: PATCH /api/v1/admin/borrow-requests/7 với body ở Test Data.<br>5. u: GET /api/v1/books/7.<br>6. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 200 DENIED; stock không đổi. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 201, 200, 200, 200. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-094.json](evidence/TC-BB-094.json) |

## TC-BB-095 — Approve sau DENIED

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-095 |
| Module | Review |
| Test Objective | Approve sau DENIED |
| Technique | State transition |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. Phụ thuộc dữ liệu/state từ TC-BB-094. |
| Test Data | {"requests": [{"actor": "u", "method": "GET", "path": "/books/7", "body": null}, {"actor": "a", "method": "PATCH", "path": "/admin/borrow-requests/7", "body": {"decision": "APPROVE"}}, {"actor": "u", "method": "GET", "path": "/books/7", "body": null}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. Phụ thuộc dữ liệu/state từ TC-BB-094.<br>2. u: GET /api/v1/books/7.<br>3. a: PATCH /api/v1/admin/borrow-requests/7 với body ở Test Data.<br>4. u: GET /api/v1/books/7.<br>5. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 409; stock không đổi. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 200, 409, 200. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-095.json](evidence/TC-BB-095.json) |

## TC-BB-096 — Duyệt khi tồn 0

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-096 |
| Module | Review |
| Test Objective | Duyệt khi tồn 0 |
| Technique | Decision table |
| Priority | High |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. Phụ thuộc dữ liệu/state từ TC-BB-045. |
| Test Data | {"requests": [{"actor": "a", "method": "PATCH", "path": "/admin/borrow-requests/2", "body": {"decision": "APPROVE"}}, {"actor": "u", "method": "GET", "path": "/books/8", "body": null}, {"actor": "u", "method": "GET", "path": "/me/borrow-requests?pageSize=100", "body": null}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. Phụ thuộc dữ liệu/state từ TC-BB-045.<br>2. a: PATCH /api/v1/admin/borrow-requests/2 với body ở Test Data.<br>3. u: GET /api/v1/books/8.<br>4. u: GET /api/v1/me/borrow-requests?pageSize=100.<br>5. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 409; request vẫn PENDING; tồn vẫn 0. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 409, 200, 200. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-096.json](evidence/TC-BB-096.json) |

## TC-BB-097 — Decision không hỗ trợ

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-097 |
| Module | Review |
| Test Objective | Decision không hỗ trợ |
| Technique | EP |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. Phụ thuộc dữ liệu/state từ TC-BB-044. |
| Test Data | {"requests": [{"actor": "a", "method": "PATCH", "path": "/admin/borrow-requests/1", "body": {"decision": "RETURN"}}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. Phụ thuộc dữ liệu/state từ TC-BB-044.<br>2. a: PATCH /api/v1/admin/borrow-requests/1 với body ở Test Data.<br>3. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 400. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 400. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-097.json](evidence/TC-BB-097.json) |

## TC-BB-098 — Request không tồn tại

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-098 |
| Module | Review |
| Test Objective | Request không tồn tại |
| Technique | EP |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "a", "method": "PATCH", "path": "/admin/borrow-requests/999999999", "body": {"decision": "DENY"}}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. a: PATCH /api/v1/admin/borrow-requests/999999999 với body ở Test Data.<br>3. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 404. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 404. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-098.json](evidence/TC-BB-098.json) |

## TC-BB-099 — User không được duyệt

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-099 |
| Module | Review |
| Test Objective | User không được duyệt |
| Technique | Decision table |
| Priority | High |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. Phụ thuộc dữ liệu/state từ TC-BB-044. |
| Test Data | {"requests": [{"actor": "u", "method": "PATCH", "path": "/admin/borrow-requests/1", "body": {"decision": "APPROVE"}}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. Phụ thuộc dữ liệu/state từ TC-BB-044.<br>2. u: PATCH /api/v1/admin/borrow-requests/1 với body ở Test Data.<br>3. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 403; request không bị duyệt. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 403. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-099.json](evidence/TC-BB-099.json) |

## TC-BB-100 — Sửa total sau cấp phát

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-100 |
| Module | Admin books |
| Test Objective | Sửa total sau cấp phát |
| Technique | State transition |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. Phụ thuộc dữ liệu/state từ TC-BB-091. |
| Test Data | {"requests": [{"actor": "a", "method": "PUT", "path": "/admin/books/7", "body": {"bookCode": "bb1793931538530stock", "title": "QA bb1793931538530stock", "author": "Tác giả QA", "category": "QA", "description": "Dữ liệu thử nghiệm", "totalQuantity": 3}}, {"actor": "u", "method": "GET", "path": "/books/7", "body": null}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. Phụ thuộc dữ liệu/state từ TC-BB-091.<br>2. a: PUT /api/v1/admin/books/7 với body ở Test Data.<br>3. u: GET /api/v1/books/7.<br>4. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 200; total mới=3, available=2, bảo toàn 1 bản đã cấp. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 200, 200. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-100.json](evidence/TC-BB-100.json) |

## TC-BB-101 — Giảm total dưới số đã cấp

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-101 |
| Module | Admin books |
| Test Objective | Giảm total dưới số đã cấp |
| Technique | BVA |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. Phụ thuộc dữ liệu/state từ TC-BB-100. |
| Test Data | {"requests": [{"actor": "u", "method": "GET", "path": "/books/7", "body": null}, {"actor": "a", "method": "PUT", "path": "/admin/books/7", "body": {"bookCode": "bb1793931538530stock", "title": "QA bb1793931538530stock", "author": "Tác giả QA", "category": "QA", "description": "Dữ liệu thử nghiệm", "totalQuantity": 0}}, {"actor": "u", "method": "GET", "path": "/books/7", "body": null}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. Phụ thuộc dữ liệu/state từ TC-BB-100.<br>2. u: GET /api/v1/books/7.<br>3. a: PUT /api/v1/admin/books/7 với body ở Test Data.<br>4. u: GET /api/v1/books/7.<br>5. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 409; total/available không đổi. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 200, 409, 200. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-101.json](evidence/TC-BB-101.json) |

## TC-BB-102 — Xóa sách có lịch sử

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-102 |
| Module | Admin books |
| Test Objective | Xóa sách có lịch sử |
| Technique | Decision table |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. Phụ thuộc dữ liệu/state từ TC-BB-044. |
| Test Data | {"requests": [{"actor": "a", "method": "DELETE", "path": "/admin/books/7", "body": null}, {"actor": "u", "method": "GET", "path": "/books/7", "body": null}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. Phụ thuộc dữ liệu/state từ TC-BB-044.<br>2. a: DELETE /api/v1/admin/books/7.<br>3. u: GET /api/v1/books/7.<br>4. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 409; sách và lịch sử còn tồn tại. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 409, 200. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-102.json](evidence/TC-BB-102.json) |

## TC-BB-103 — Hai yêu cầu tranh bản cuối

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-103 |
| Module | Review |
| Test Objective | Hai yêu cầu tranh bản cuối |
| Technique | Error guessing/State transition |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "a", "method": "POST", "path": "/admin/books", "body": {"bookCode": "bb1793931538530race", "title": "QA bb1793931538530race", "author": "Tác giả QA", "category": "QA", "description": "Dữ liệu thử nghiệm", "totalQuantity": 1}}, {"actor": "u", "method": "POST", "path": "/borrow-requests", "body": {"bookId": "13", "borrowDate": "2026-11-06", "dueDate": "2026-11-20"}}, {"actor": "v", "method": "POST", "path": "/borrow-requests", "body": {"bookId": "13", "borrowDate": "2026-11-06", "dueDate": "2026-11-20"}}, {"actor": "a", "method": "PATCH", "path": "/admin/borrow-requests/8", "body": {"decision": "APPROVE"}}, {"actor": "a", "method": "PATCH", "path": "/admin/borrow-requests/9", "body": {"decision": "APPROVE"}}, {"actor": "u", "method": "GET", "path": "/books/13", "body": null}, {"actor": "a", "method": "GET", "path": "/admin/borrow-requests?pageSize=100", "body": null}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. a: POST /api/v1/admin/books với body ở Test Data.<br>3. u: POST /api/v1/borrow-requests với body ở Test Data.<br>4. v: POST /api/v1/borrow-requests với body ở Test Data.<br>5. a: PATCH /api/v1/admin/borrow-requests/8 với body ở Test Data.<br>6. a: PATCH /api/v1/admin/borrow-requests/9 với body ở Test Data.<br>7. u: GET /api/v1/books/13.<br>8. a: GET /api/v1/admin/borrow-requests?pageSize=100.<br>9. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | Đúng một 200 APPROVED và một 409; stock=0; một request APPROVED, một PENDING. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 201, 201, 201, 200, 409, 200, 200. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-103.json](evidence/TC-BB-103.json) |

## TC-BB-104 — Admin tạo User

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-104 |
| Module | Admin users |
| Test Objective | Admin tạo User |
| Technique | EP |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "a", "method": "POST", "path": "/admin/users", "body": {"username": "bb1793931538530managed", "fullName": "QA Thành", "password": "[REDACTED]", "email": "bb1793931538530managed@example.test", "role": "USER"}}, {"actor": "guest", "method": "POST", "path": "/auth/login", "body": {"username": "bb1793931538530managed", "password": "[REDACTED]"}}, {"actor": "managedSession", "method": "GET", "path": "/me", "body": null}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. a: POST /api/v1/admin/users với body ở Test Data.<br>3. guest: POST /api/v1/auth/login với body ở Test Data.<br>4. managedSession: GET /api/v1/me.<br>5. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 201 USER; đăng nhập tài khoản mới và /me đúng dữ liệu. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 201, 200, 200. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-104.json](evidence/TC-BB-104.json) |

## TC-BB-105 — Danh sách tài khoản không lộ mật khẩu

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-105 |
| Module | Admin users |
| Test Objective | Danh sách tài khoản không lộ mật khẩu |
| Technique | EP |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. Phụ thuộc dữ liệu/state từ TC-BB-104. |
| Test Data | {"requests": [{"actor": "a", "method": "GET", "path": "/admin/users?pageSize=100", "body": null}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. Phụ thuộc dữ liệu/state từ TC-BB-104.<br>2. a: GET /api/v1/admin/users?pageSize=100.<br>3. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 200; có managed; không chứa password/hash. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 200. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-105.json](evidence/TC-BB-105.json) |

## TC-BB-106 — Role không hợp lệ

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-106 |
| Module | Admin users |
| Test Objective | Role không hợp lệ |
| Technique | EP |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "a", "method": "POST", "path": "/admin/users", "body": {"username": "bb1793931538530badrole", "fullName": "QA Thành", "password": "[REDACTED]", "email": "bb1793931538530badrole@example.test", "role": "SUPERADMIN"}}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. a: POST /api/v1/admin/users với body ở Test Data.<br>3. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 400. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 400. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-106.json](evidence/TC-BB-106.json) |

## TC-BB-107 — Username trùng khi Admin tạo

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-107 |
| Module | Admin users |
| Test Objective | Username trùng khi Admin tạo |
| Technique | EP |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "a", "method": "POST", "path": "/admin/users", "body": {"username": "bb1793931538530u", "fullName": "QA Thành", "password": "[REDACTED]", "email": "bb1793931538530u@example.test", "role": "USER"}}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. a: POST /api/v1/admin/users với body ở Test Data.<br>3. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 409. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 409. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-107.json](evidence/TC-BB-107.json) |

## TC-BB-108 — User không tạo tài khoản quản trị

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-108 |
| Module | Admin users |
| Test Objective | User không tạo tài khoản quản trị |
| Technique | Decision table |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "u", "method": "POST", "path": "/admin/users", "body": {"username": "bb1793931538530escalate", "fullName": "QA Thành", "password": "[REDACTED]", "email": "bb1793931538530escalate@example.test", "role": "ADMIN"}}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. u: POST /api/v1/admin/users với body ở Test Data.<br>3. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 403. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 403. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-108.json](evidence/TC-BB-108.json) |

## TC-BB-109 — Sửa fullName tài khoản

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-109 |
| Module | Admin users |
| Test Objective | Sửa fullName tài khoản |
| Technique | EP |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. Phụ thuộc dữ liệu/state từ TC-BB-104. |
| Test Data | {"requests": [{"actor": "a", "method": "PUT", "path": "/admin/users/10", "body": {"username": "bb1793931538530managed", "fullName": "QA Updated", "email": "bb1793931538530managed@example.test", "role": "USER"}}, {"actor": "managedSession", "method": "GET", "path": "/me", "body": null}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. Phụ thuộc dữ liệu/state từ TC-BB-104.<br>2. a: PUT /api/v1/admin/users/10 với body ở Test Data.<br>3. managedSession: GET /api/v1/me.<br>4. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 200; /me của tài khoản đích có tên mới. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 200, 200. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-109.json](evidence/TC-BB-109.json) |

## TC-BB-110 — Tự xóa Admin

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-110 |
| Module | Admin users |
| Test Objective | Tự xóa Admin |
| Technique | Decision table |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "a", "method": "DELETE", "path": "/admin/users/1", "body": null}, {"actor": "a", "method": "GET", "path": "/admin/stats", "body": null}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. a: DELETE /api/v1/admin/users/1.<br>3. a: GET /api/v1/admin/stats.<br>4. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 409; Admin vẫn truy cập được thống kê. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 409, 200. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-110.json](evidence/TC-BB-110.json) |

## TC-BB-111 — Tự hạ quyền Admin

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-111 |
| Module | Admin users |
| Test Objective | Tự hạ quyền Admin |
| Technique | Decision table |
| Priority | High |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "a", "method": "PUT", "path": "/admin/users/1", "body": {"username": "admin", "fullName": "Quản trị viên", "role": "USER"}}, {"actor": "a", "method": "GET", "path": "/me", "body": null}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. a: PUT /api/v1/admin/users/1 với body ở Test Data.<br>3. a: GET /api/v1/me.<br>4. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 409; role vẫn ADMIN. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 409, 200. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-111.json](evidence/TC-BB-111.json) |

## TC-BB-112 — Đổi role thu hồi phiên

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-112 |
| Module | Admin users |
| Test Objective | Đổi role thu hồi phiên |
| Technique | State transition |
| Priority | High |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. Phụ thuộc dữ liệu/state từ TC-BB-104, TC-BB-109. |
| Test Data | {"requests": [{"actor": "a", "method": "PUT", "path": "/admin/users/10", "body": {"username": "bb1793931538530managed", "fullName": "QA Updated", "email": "bb1793931538530managed@example.test", "role": "ADMIN"}}, {"actor": "managedSession", "method": "GET", "path": "/me", "body": null}, {"actor": "guest", "method": "POST", "path": "/auth/login", "body": {"username": "bb1793931538530managed", "password": "[REDACTED]"}}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. Phụ thuộc dữ liệu/state từ TC-BB-104, TC-BB-109.<br>2. a: PUT /api/v1/admin/users/10 với body ở Test Data.<br>3. managedSession: GET /api/v1/me.<br>4. guest: POST /api/v1/auth/login với body ở Test Data.<br>5. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 200 role ADMIN; cookie USER cũ /me nhận 401; đăng nhập mới role ADMIN. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 200, 401, 200. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-112.json](evidence/TC-BB-112.json) |

## TC-BB-113 — Xóa tài khoản không có lịch sử

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-113 |
| Module | Admin users |
| Test Objective | Xóa tài khoản không có lịch sử |
| Technique | EP |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. Phụ thuộc dữ liệu/state từ TC-BB-104, TC-BB-112. |
| Test Data | {"requests": [{"actor": "a", "method": "DELETE", "path": "/admin/users/10", "body": null}, {"actor": "managedNew", "method": "GET", "path": "/me", "body": null}, {"actor": "guest", "method": "POST", "path": "/auth/login", "body": {"username": "bb1793931538530managed", "password": "[REDACTED]"}}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. Phụ thuộc dữ liệu/state từ TC-BB-104, TC-BB-112.<br>2. a: DELETE /api/v1/admin/users/10.<br>3. managedNew: GET /api/v1/me.<br>4. guest: POST /api/v1/auth/login với body ở Test Data.<br>5. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 204; login lại thất bại; phiên cũ không còn hiệu lực. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 204, 401, 401. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-113.json](evidence/TC-BB-113.json) |

## TC-BB-114 — Xóa User có lịch sử

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-114 |
| Module | Admin users |
| Test Objective | Xóa User có lịch sử |
| Technique | Decision table |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. Phụ thuộc dữ liệu/state từ TC-BB-044. |
| Test Data | {"requests": [{"actor": "a", "method": "DELETE", "path": "/admin/users/2", "body": null}, {"actor": "u", "method": "GET", "path": "/me/borrow-requests", "body": null}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. Phụ thuộc dữ liệu/state từ TC-BB-044.<br>2. a: DELETE /api/v1/admin/users/2.<br>3. u: GET /api/v1/me/borrow-requests.<br>4. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 409; User vẫn đăng nhập và đọc lịch sử được. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 409, 200. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-114.json](evidence/TC-BB-114.json) |

## TC-BB-115 — Xóa id không tồn tại

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-115 |
| Module | Admin users |
| Test Objective | Xóa id không tồn tại |
| Technique | EP |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "a", "method": "DELETE", "path": "/admin/users/999999999", "body": null}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. a: DELETE /api/v1/admin/users/999999999.<br>3. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 404. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 404. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-115.json](evidence/TC-BB-115.json) |

## TC-BB-116 — Đối chiếu tổng qua API danh sách

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-116 |
| Module | Statistics |
| Test Objective | Đối chiếu tổng qua API danh sách |
| Technique | EP |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "a", "method": "GET", "path": "/admin/stats", "body": null}, {"actor": "a", "method": "GET", "path": "/admin/books?pageSize=100", "body": null}, {"actor": "a", "method": "GET", "path": "/admin/users?pageSize=100", "body": null}, {"actor": "a", "method": "GET", "path": "/admin/borrow-requests?pageSize=100", "body": null}, {"actor": "a", "method": "GET", "path": "/admin/borrow-requests?status=PENDING", "body": null}, {"actor": "a", "method": "GET", "path": "/admin/borrow-requests?status=APPROVED", "body": null}, {"actor": "a", "method": "GET", "path": "/admin/borrow-requests?status=DENIED", "body": null}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. a: GET /api/v1/admin/stats.<br>3. a: GET /api/v1/admin/books?pageSize=100.<br>4. a: GET /api/v1/admin/users?pageSize=100.<br>5. a: GET /api/v1/admin/borrow-requests?pageSize=100.<br>6. a: GET /api/v1/admin/borrow-requests?status=PENDING.<br>7. a: GET /api/v1/admin/borrow-requests?status=APPROVED.<br>8. a: GET /api/v1/admin/borrow-requests?status=DENIED.<br>9. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | books=totalItems sách; users=đếm role USER; requests=sum(PENDING,APPROVED,DENIED); từng status khớp tổng lọc. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 200, 200, 200, 200, 200, 200, 200. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-116.json](evidence/TC-BB-116.json) |

## TC-BB-117 — JSON sai cú pháp

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-117 |
| Module | Errors |
| Test Objective | JSON sai cú pháp |
| Technique | Error guessing |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "guest", "method": "POST", "path": "/auth/register", "body": "{\"username\":"}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. guest: POST /api/v1/auth/register với body ở Test Data.<br>3. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 400; error envelope có code/message/requestId; không lộ stack. |
| Actual Result | The expression evaluated to a falsy value:<br><br>  assert.ok(r.json.requestId)<br><br>HTTP quan sát: 400. |
| Status | Fail |
| Bug ID | BUG-BB-002 |
| Evidence | [evidence/TC-BB-117.json](evidence/TC-BB-117.json) |

## TC-BB-118 — Body JSON null

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-118 |
| Module | Errors |
| Test Objective | Body JSON null |
| Technique | EP |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "guest", "method": "POST", "path": "/auth/register", "body": null}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. guest: POST /api/v1/auth/register.<br>3. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 400; error envelope; server tiếp tục đáp ứng /health. |
| Actual Result | The expression evaluated to a falsy value:<br><br>  assert.ok(r.json.requestId)<br><br>HTTP quan sát: 400. |
| Status | Fail |
| Bug ID | BUG-BB-002 |
| Evidence | [evidence/TC-BB-118.json](evidence/TC-BB-118.json) |

## TC-BB-119 — Payload quá dài

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-119 |
| Module | Errors |
| Test Objective | Payload quá dài |
| Technique | Error guessing |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "guest", "method": "POST", "path": "/auth/register", "body": {"username": "bb1793931538530huge", "fullName": "chuỗi 150000 ký tự (xem JSON evidence)", "password": "[REDACTED]", "email": "bb1793931538530huge@example.test"}}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. guest: POST /api/v1/auth/register với body ở Test Data.<br>3. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 413 hoặc 400 có lỗi được kiểm soát; server vẫn khỏe. |
| Actual Result | The expression evaluated to a falsy value:<br><br>  assert.ok(r.json.requestId)<br><br>HTTP quan sát: 413. |
| Status | Fail |
| Bug ID | BUG-BB-002 |
| Evidence | [evidence/TC-BB-119.json](evidence/TC-BB-119.json) |

## TC-BB-120 — Cookie phiên giả

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-120 |
| Module | Errors |
| Test Objective | Cookie phiên giả |
| Technique | Error guessing |
| Priority | High |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "fake", "method": "GET", "path": "/me", "body": null}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. fake: GET /api/v1/me.<br>3. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 401; không truy cập hồ sơ. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 401. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-120.json](evidence/TC-BB-120.json) |

## TC-BB-121 — Health thực tế

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-121 |
| Module | Health |
| Test Objective | Health thực tế |
| Technique | EP |
| Priority | Medium |
| Preconditions | Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca. |
| Test Data | {"requests": [{"actor": "guest", "method": "GET", "path": "/health", "body": null}, {"actor": "u", "method": "GET", "path": "/books", "body": null}]} |
| Test Steps | 1. Fixture trong evidence/fixture-setup.json; chạy theo thứ tự ID trên DB mới. User u/v và Admin a đã login; stock ban đầu total=available=2, zero=0, disposable=3. Không reset giữa các ca.<br>2. guest: GET /api/v1/health.<br>3. u: GET /api/v1/books.<br>4. Đối chiếu Expected Result và assertion trong automated-tests/api-suite.mjs. |
| Expected Result | 200 success=true; xác nhận DB đáp ứng qua health và sách. |
| Actual Result | Đã thực thi: mọi assertion trong ca đều đạt; xem request/response và thao tác kiểm chứng trong evidence.<br>HTTP quan sát: 200, 200. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-121.json](evidence/TC-BB-121.json) |

## TC-BB-122 — UI: hiển thị đăng nhập

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-122 |
| Module | UI |
| Test Objective | UI: hiển thị đăng nhập |
| Technique | Use case / State transition / EP |
| Priority | High |
| Preconditions | Chuỗi UI tuần tự; phụ thuộc ca trước. Database test đã migrate/seed; tài khoản UI mới được tạo ở TC-BB-124. Admin cấp qua biến môi trường. |
| Test Data | {"username": "bbui1793931700980", "fullName": "QA Giao diện", "password": "Generated; redacted", "bookCode": "BK-001"} |
| Test Steps | Mở trang gốc, kiểm tra form. |
| Expected Result | Có heading Đăng nhập và trường username/password. |
| Actual Result | Các assertion UI đạt; xem ảnh và DOM/text/network. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-122.json](evidence/TC-BB-122.json); [ảnh](evidence/TC-BB-122.png) |

## TC-BB-123 — UI: chặn submit form trống

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-123 |
| Module | UI |
| Test Objective | UI: chặn submit form trống |
| Technique | Use case / State transition / EP |
| Priority | High |
| Preconditions | Chuỗi UI tuần tự; phụ thuộc ca trước. Database test đã migrate/seed; tài khoản UI mới được tạo ở TC-BB-124. Admin cấp qua biến môi trường. Phụ thuộc chuỗi TC-BB-122 đến ca ngay trước; không chạy lẻ. |
| Test Data | {"username": "bbui1793931700980", "fullName": "QA Giao diện", "password": "Generated; redacted", "bookCode": "BK-001"} |
| Test Steps | Bấm Đăng nhập khi chưa điền; đọc validity và network. |
| Expected Result | Form ở trang đăng nhập; input bắt buộc không hợp lệ; không gửi API login. |
| Actual Result | Các assertion UI đạt; xem ảnh và DOM/text/network. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-123.json](evidence/TC-BB-123.json); [ảnh](evidence/TC-BB-123.png) |

## TC-BB-124 — UI: đăng ký tài khoản mới

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-124 |
| Module | UI |
| Test Objective | UI: đăng ký tài khoản mới |
| Technique | Use case / State transition / EP |
| Priority | High |
| Preconditions | Chuỗi UI tuần tự; phụ thuộc ca trước. Database test đã migrate/seed; tài khoản UI mới được tạo ở TC-BB-124. Admin cấp qua biến môi trường. Phụ thuộc chuỗi TC-BB-122 đến ca ngay trước; không chạy lẻ. |
| Test Data | {"username": "bbui1793931700980", "fullName": "QA Giao diện", "password": "Generated; redacted", "bookCode": "BK-001"} |
| Test Steps | Bấm Đăng ký; điền username/fullName/email/password; gửi. |
| Expected Result | Hiện thông báo đăng ký thành công và trở về đăng nhập. |
| Actual Result | Các assertion UI đạt; xem ảnh và DOM/text/network. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-124.json](evidence/TC-BB-124.json); [ảnh](evidence/TC-BB-124.png) |

## TC-BB-125 — UI: đăng nhập sai

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-125 |
| Module | UI |
| Test Objective | UI: đăng nhập sai |
| Technique | Use case / State transition / EP |
| Priority | High |
| Preconditions | Chuỗi UI tuần tự; phụ thuộc ca trước. Database test đã migrate/seed; tài khoản UI mới được tạo ở TC-BB-124. Admin cấp qua biến môi trường. Phụ thuộc chuỗi TC-BB-122 đến ca ngay trước; không chạy lẻ. |
| Test Data | {"username": "bbui1793931700980", "fullName": "QA Giao diện", "password": "Generated; redacted", "bookCode": "BK-001"} |
| Test Steps | Điền đúng username, sai password; gửi. |
| Expected Result | Thông báo lỗi trong form; không vào giao diện độc giả. |
| Actual Result | Các assertion UI đạt; xem ảnh và DOM/text/network. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-125.json](evidence/TC-BB-125.json); [ảnh](evidence/TC-BB-125.png) |

## TC-BB-126 — UI: đăng nhập đúng

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-126 |
| Module | UI |
| Test Objective | UI: đăng nhập đúng |
| Technique | Use case / State transition / EP |
| Priority | High |
| Preconditions | Chuỗi UI tuần tự; phụ thuộc ca trước. Database test đã migrate/seed; tài khoản UI mới được tạo ở TC-BB-124. Admin cấp qua biến môi trường. Phụ thuộc chuỗi TC-BB-122 đến ca ngay trước; không chạy lẻ. |
| Test Data | {"username": "bbui1793931700980", "fullName": "QA Giao diện", "password": "Generated; redacted", "bookCode": "BK-001"} |
| Test Steps | Điền password đúng; gửi; chờ danh sách sách. |
| Expected Result | Hiện Khám phá sách, tên QA Giao diện; không có nút quản lý người dùng. |
| Actual Result | Các assertion UI đạt; xem ảnh và DOM/text/network. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-126.json](evidence/TC-BB-126.json); [ảnh](evidence/TC-BB-126.png) |

## TC-BB-127 — UI: tìm không có kết quả

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-127 |
| Module | UI |
| Test Objective | UI: tìm không có kết quả |
| Technique | Use case / State transition / EP |
| Priority | High |
| Preconditions | Chuỗi UI tuần tự; phụ thuộc ca trước. Database test đã migrate/seed; tài khoản UI mới được tạo ở TC-BB-124. Admin cấp qua biến môi trường. Phụ thuộc chuỗi TC-BB-122 đến ca ngay trước; không chạy lẻ. |
| Test Data | {"username": "bbui1793931700980", "fullName": "QA Giao diện", "password": "Generated; redacted", "bookCode": "BK-001"} |
| Test Steps | Tìm chuỗi ngẫu nhiên không tồn tại. |
| Expected Result | Hiện thông báo không tìm thấy; không có card sách. |
| Actual Result | Các assertion UI đạt; xem ảnh và DOM/text/network. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-127.json](evidence/TC-BB-127.json); [ảnh](evidence/TC-BB-127.png) |

## TC-BB-128 — UI: tìm sách theo tiêu đề

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-128 |
| Module | UI |
| Test Objective | UI: tìm sách theo tiêu đề |
| Technique | Use case / State transition / EP |
| Priority | High |
| Preconditions | Chuỗi UI tuần tự; phụ thuộc ca trước. Database test đã migrate/seed; tài khoản UI mới được tạo ở TC-BB-124. Admin cấp qua biến môi trường. Phụ thuộc chuỗi TC-BB-122 đến ca ngay trước; không chạy lẻ. |
| Test Data | {"username": "bbui1793931700980", "fullName": "QA Giao diện", "password": "Generated; redacted", "bookCode": "BK-001"} |
| Test Steps | Tìm Dế Mèn; chờ kết quả. |
| Expected Result | Hiện Dế Mèn phiêu lưu ký và đúng một nút Xem chi tiết. |
| Actual Result | Các assertion UI đạt; xem ảnh và DOM/text/network. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-128.json](evidence/TC-BB-128.json); [ảnh](evidence/TC-BB-128.png) |

## TC-BB-129 — UI: chi tiết sách

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-129 |
| Module | UI |
| Test Objective | UI: chi tiết sách |
| Technique | Use case / State transition / EP |
| Priority | High |
| Preconditions | Chuỗi UI tuần tự; phụ thuộc ca trước. Database test đã migrate/seed; tài khoản UI mới được tạo ở TC-BB-124. Admin cấp qua biến môi trường. Phụ thuộc chuỗi TC-BB-122 đến ca ngay trước; không chạy lẻ. |
| Test Data | {"username": "bbui1793931700980", "fullName": "QA Giao diện", "password": "Generated; redacted", "bookCode": "BK-001"} |
| Test Steps | Bấm Xem chi tiết. |
| Expected Result | Dialog có tên sách, Tô Hoài, BK-001, số sẵn có và nút mượn. |
| Actual Result | Các assertion UI đạt; xem ảnh và DOM/text/network. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-129.json](evidence/TC-BB-129.json); [ảnh](evidence/TC-BB-129.png) |

## TC-BB-130 — UI: gửi yêu cầu mượn

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-130 |
| Module | UI |
| Test Objective | UI: gửi yêu cầu mượn |
| Technique | Use case / State transition / EP |
| Priority | High |
| Preconditions | Chuỗi UI tuần tự; phụ thuộc ca trước. Database test đã migrate/seed; tài khoản UI mới được tạo ở TC-BB-124. Admin cấp qua biến môi trường. Phụ thuộc chuỗi TC-BB-122 đến ca ngay trước; không chạy lẻ. |
| Test Data | {"username": "bbui1793931700980", "fullName": "QA Giao diện", "password": "Generated; redacted", "bookCode": "BK-001"} |
| Test Steps | Bấm mượn; điền ngày 2026-11-06/2026-11-20; Lưu; mở lịch sử. |
| Expected Result | Gửi thành công; lịch sử cá nhân có Dế Mèn với trạng thái chờ duyệt. |
| Actual Result | Các assertion UI đạt; xem ảnh và DOM/text/network. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-130.json](evidence/TC-BB-130.json); [ảnh](evidence/TC-BB-130.png) |

## TC-BB-131 — UI: hồ sơ cá nhân

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-131 |
| Module | UI |
| Test Objective | UI: hồ sơ cá nhân |
| Technique | Use case / State transition / EP |
| Priority | High |
| Preconditions | Chuỗi UI tuần tự; phụ thuộc ca trước. Database test đã migrate/seed; tài khoản UI mới được tạo ở TC-BB-124. Admin cấp qua biến môi trường. Phụ thuộc chuỗi TC-BB-122 đến ca ngay trước; không chạy lẻ. |
| Test Data | {"username": "bbui1793931700980", "fullName": "QA Giao diện", "password": "Generated; redacted", "bookCode": "BK-001"} |
| Test Steps | Mở Hồ sơ cá nhân. |
| Expected Result | Hiện đúng username và fullName của tài khoản UI. |
| Actual Result | Các assertion UI đạt; xem ảnh và DOM/text/network. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-131.json](evidence/TC-BB-131.json); [ảnh](evidence/TC-BB-131.png) |

## TC-BB-132 — UI: reload giữ phiên

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-132 |
| Module | UI |
| Test Objective | UI: reload giữ phiên |
| Technique | Use case / State transition / EP |
| Priority | High |
| Preconditions | Chuỗi UI tuần tự; phụ thuộc ca trước. Database test đã migrate/seed; tài khoản UI mới được tạo ở TC-BB-124. Admin cấp qua biến môi trường. Phụ thuộc chuỗi TC-BB-122 đến ca ngay trước; không chạy lẻ. |
| Test Data | {"username": "bbui1793931700980", "fullName": "QA Giao diện", "password": "Generated; redacted", "bookCode": "BK-001"} |
| Test Steps | Reload trang; mở Hồ sơ cá nhân. |
| Expected Result | Sau reload còn nav độc giả và truy cập được hồ sơ. |
| Actual Result | Các assertion UI đạt; xem ảnh và DOM/text/network. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-132.json](evidence/TC-BB-132.json); [ảnh](evidence/TC-BB-132.png) |

## TC-BB-133 — UI: đăng xuất

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-133 |
| Module | UI |
| Test Objective | UI: đăng xuất |
| Technique | Use case / State transition / EP |
| Priority | High |
| Preconditions | Chuỗi UI tuần tự; phụ thuộc ca trước. Database test đã migrate/seed; tài khoản UI mới được tạo ở TC-BB-124. Admin cấp qua biến môi trường. Phụ thuộc chuỗi TC-BB-122 đến ca ngay trước; không chạy lẻ. |
| Test Data | {"username": "bbui1793931700980", "fullName": "QA Giao diện", "password": "Generated; redacted", "bookCode": "BK-001"} |
| Test Steps | Bấm Đăng xuất, reload. |
| Expected Result | Quay về login; reload không còn nav độc giả. |
| Actual Result | Các assertion UI đạt; xem ảnh và DOM/text/network. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-133.json](evidence/TC-BB-133.json); [ảnh](evidence/TC-BB-133.png) |

## TC-BB-134 — UI: Admin đăng nhập và thống kê

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-134 |
| Module | UI |
| Test Objective | UI: Admin đăng nhập và thống kê |
| Technique | Use case / State transition / EP |
| Priority | High |
| Preconditions | Chuỗi UI tuần tự; phụ thuộc ca trước. Database test đã migrate/seed; tài khoản UI mới được tạo ở TC-BB-124. Admin cấp qua biến môi trường. Phụ thuộc chuỗi TC-BB-122 đến ca ngay trước; không chạy lẻ. |
| Test Data | {"username": "bbui1793931700980", "fullName": "QA Giao diện", "password": "Generated; redacted", "bookCode": "BK-001"} |
| Test Steps | Đăng nhập Admin cấp qua môi trường. |
| Expected Result | Hiện Tổng quan thư viện, thẻ Đầu sách/Độc giả/Tổng yêu cầu. |
| Actual Result | Các assertion UI đạt; xem ảnh và DOM/text/network. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-134.json](evidence/TC-BB-134.json); [ảnh](evidence/TC-BB-134.png) |

## TC-BB-135 — UI: danh sách quản lý sách

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-135 |
| Module | UI |
| Test Objective | UI: danh sách quản lý sách |
| Technique | Use case / State transition / EP |
| Priority | High |
| Preconditions | Chuỗi UI tuần tự; phụ thuộc ca trước. Database test đã migrate/seed; tài khoản UI mới được tạo ở TC-BB-124. Admin cấp qua biến môi trường. Phụ thuộc chuỗi TC-BB-122 đến ca ngay trước; không chạy lẻ. |
| Test Data | {"username": "bbui1793931700980", "fullName": "QA Giao diện", "password": "Generated; redacted", "bookCode": "BK-001"} |
| Test Steps | Mở Quản lý sách. |
| Expected Result | Hiện BK-001 và Dế Mèn trong khu quản lý sách. |
| Actual Result | Các assertion UI đạt; xem ảnh và DOM/text/network. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-135.json](evidence/TC-BB-135.json); [ảnh](evidence/TC-BB-135.png) |

## TC-BB-136 — UI: danh sách xét duyệt

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-136 |
| Module | UI |
| Test Objective | UI: danh sách xét duyệt |
| Technique | Use case / State transition / EP |
| Priority | High |
| Preconditions | Chuỗi UI tuần tự; phụ thuộc ca trước. Database test đã migrate/seed; tài khoản UI mới được tạo ở TC-BB-124. Admin cấp qua biến môi trường. Phụ thuộc chuỗi TC-BB-122 đến ca ngay trước; không chạy lẻ. |
| Test Data | {"username": "bbui1793931700980", "fullName": "QA Giao diện", "password": "Generated; redacted", "bookCode": "BK-001"} |
| Test Steps | Mở Yêu cầu mượn. |
| Expected Result | Hiện username UI và sách đã yêu cầu. |
| Actual Result | Các assertion UI đạt; xem ảnh và DOM/text/network. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-136.json](evidence/TC-BB-136.json); [ảnh](evidence/TC-BB-136.png) |

## TC-BB-137 — UI: danh sách người dùng

| Trường | Nội dung |
| --- | --- |
| Test Case ID | TC-BB-137 |
| Module | UI |
| Test Objective | UI: danh sách người dùng |
| Technique | Use case / State transition / EP |
| Priority | High |
| Preconditions | Chuỗi UI tuần tự; phụ thuộc ca trước. Database test đã migrate/seed; tài khoản UI mới được tạo ở TC-BB-124. Admin cấp qua biến môi trường. Phụ thuộc chuỗi TC-BB-122 đến ca ngay trước; không chạy lẻ. |
| Test Data | {"username": "bbui1793931700980", "fullName": "QA Giao diện", "password": "Generated; redacted", "bookCode": "BK-001"} |
| Test Steps | Mở Người dùng; tìm username UI bằng ô tìm kiếm. |
| Expected Result | Tìm username UI trong danh sách Admin; có fullName QA Giao diện. |
| Actual Result | Các assertion UI đạt; xem ảnh và DOM/text/network. Không có assertion thất bại trong ca. |
| Status | Pass |
| Bug ID | — |
| Evidence | [evidence/TC-BB-137.json](evidence/TC-BB-137.json); [ảnh](evidence/TC-BB-137.png) |

