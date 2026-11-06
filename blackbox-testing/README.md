# Kiểm thử hộp đen — Hệ thống quản lý thư viện

Repository: https://github.com/thanhcodeai/quanlythuvien_byAI

Commit được kiểm thử: `6bba7d7693c4deb0edeab8c5c44b2bdda1c82ea2` (main tại thời điểm lấy mẫu). Ngày thực hiện: 06/11/2026, giờ Việt Nam (UTC+7); timestamp bằng chứng dùng UTC.

Đã thực thi trực tiếp: **137 ca =129 Pass+8 Fail**,2 bugOpen; Execution100%, Pass94.16%. Các kết quả phản ánh commit và phạm vi đã kiểm, chưa kết luận production-ready.

## Đọc tài liệu

1. [Test Strategy](01_Test_Strategy.md) — oracle và kỹ thuật hộp đen.
2. [Test Plan](02_Test_Plan.md) — phạm vi, môi trường, trình tự và giới hạn.
3. [Requirement Analysis](03_Requirement_Analysis.md) —12FR, bảng chức năng, decision/state.
4. [Test Cases](04_Test_Cases.md) —137 ca có đủ dữ liệu/bước/expected/actual/status/evidence.
5. [Execution Report](05_Test_Execution_Report.md) — thống kê và kết quả từng module.
6. [Bug Report](06_Bug_Report.md) —2 bug có tái hiện và bằng chứng.
7. [Summary Report](07_Test_Summary_Report.md) — kết luận và rủi ro còn lại.

[test-data/](test-data/) có manifest fixture và thiết kế; [automated-tests/README.md](automated-tests/README.md) hướng dẫn chạy lại; [evidence/README.md](evidence/README.md) giải thích trace/ảnh/lượt chẩn đoán. Không có .env, database dump hoặc mật khẩu thật trong gói.

## Lưu ý diễn giải

Tài liệu gốc SRS không có trong repo; dùng README/catalog và UI/API được khảo sát, tách chính sách tạm. Chức năng trả sách, gia hạn, hủy, sửa hồ sơ cá nhân nằm ngoài phạm vi. Lượt thử bị lỗi harness/rate limit được giữ ở thư mục chẩn đoán và không tính thống kê chính thức. Kết quảPass không chỉ dựa HTTP 200.
