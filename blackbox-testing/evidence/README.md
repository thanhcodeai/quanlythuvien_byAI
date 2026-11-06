# Bản đồ bằng chứng

Kết quả chính thức: results.json(121 API), ui-results.json(16 UI), summary.json; TC-BB-001..137.json tương ứng từng ca. TC 122..137 cóPNG. Các status/actual trong JSON là nguồn của thống kê.

fixture-setup.json: request/response tạo fixture trước vòngAPI; run-fixtures ởtest-data. bug-replay.json:22response gồm2vòng tái hiện độc lập và controls; không cộng vào137 ca. environment.json/source-integrity.txt/cleanup.log: môi trường, commit/tracked files và dọn DB.

reference/: README, DESIGN, package.json, compose.yaml, .env.example tại commit đã chốt; chỉ tài liệu và cấu hình mẫu, không chứa .env thật. api-discovery.log, ui-*-discovery.log/DOM/ảnh: khảo sát hợp đồng/UI, không tínhca chính thức. ui-user.png là ảnh discovery viewport1280, chưa phải kiểm responsive chính thức.

initial-run/: lượt thử harness giả định DTO đầy đủ. rate-limited-run/: lượt retry bị429 từ app process cũ. Cả hai **không phải lượt nghiệm thu, không dùng kết luận sốFail/bug**, giữ để minh bạch lý do hiệu chỉnh công cụ và reset. Final tại gốc evidence có113 Pass/8 Fail API và16 Pass UI.

Log runtime ghi lỗi tải/dependency ban đầu và cách khắc phục; app server/database logs chỉ từ môi trường test. Không chứa production credential. Request password/CSRF/cookie được che trong trace; ảnhUI che trườngpassword. TimestampISO làUTC; ngày báo cáo dùngUTC+7.

Không có video hoặc code coverage: không cần video cho bằng chứng của vòng này, coverage nằm ngoài hộp đen. Không có bằng chứng production/hiệu năng/backup, vì chưa được kiểm.
