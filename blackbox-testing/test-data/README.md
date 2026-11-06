# Dữ liệu kiểm thử

case-design.json và ui-case-design.json: thiết kế trước khi chạy (Not Run tại thời điểm tạo). Kết quả sau chạy ở evidence/results.json và ui-results.json, không nhầm hai loại file.

run-fixtures.json: ID/tên fixture của lượt API chính thức; không có password. Fixture được tạo qua API; account password ngẫu nhiên giữ trong RAM. UI tạo account riêng tênbbui<timestamp>. Các tài khoản discovery cũng chỉ tồn tại trong DB riêng.

Suite dùng seedBK-001..006 và Admin. Ngày test cố định2026-11-06/2026-11-20; đây là dữ liệu hồi quy của bản policy chưa chặn ngày quá khứ, không ngầm áp dụng cho phiên bản sau thay policy.

Ca chạy theo ID trên cùng dataset. API results ghi dependencies đã dùng. Không chạy lẻ ca duyệt/xóa/session đổi role mà không tạo state trước đó. Reset database+seed và khởi động app process mới trước vòng đầy đủ.
