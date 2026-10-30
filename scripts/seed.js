import bcrypt from 'bcryptjs';
import {pool} from '../src/db.js';
try {
 if(!process.env.ADMIN_PASSWORD) throw Error('Set ADMIN_PASSWORD securely before seed');
 const hash=await bcrypt.hash(process.env.ADMIN_PASSWORD,12);
 await pool.execute('INSERT IGNORE INTO users(username,full_name,password_hash,role) VALUES(?,?,?,?)',[process.env.ADMIN_USERNAME||'admin','Quản trị viên',hash,'ADMIN']);
 const books=[['BK-001','Dế Mèn phiêu lưu ký','Tô Hoài','Văn học','Hành trình khám phá và những bài học về tình bạn.',12],['BK-002','Tôi thấy hoa vàng trên cỏ xanh','Nguyễn Nhật Ánh','Văn học','Câu chuyện tuổi thơ trong trẻo ở một làng quê Việt Nam.',8],['BK-003','Nhập môn cơ sở dữ liệu','Nguyễn Văn A','Công nghệ','Kiến thức nền tảng về dữ liệu quan hệ và SQL.',5],['BK-004','Lược sử thời gian','Stephen Hawking','Khoa học','Khám phá vũ trụ, không gian và thời gian.',6],['BK-005','Đắc nhân tâm','Dale Carnegie','Kỹ năng','Những nguyên tắc giao tiếp và ứng xử.',10],['BK-006','Nhà giả kim','Paulo Coelho','Văn học','Hành trình theo đuổi ước mơ của chàng chăn cừu.',7]];
 for(const b of books) await pool.execute('INSERT IGNORE INTO books(book_code,title,author,category,description,total_quantity,available_quantity) VALUES(?,?,?,?,?,?,?)',[...b,b[5]]);
 console.log('Seed complete; existing accounts unchanged');
}finally{await pool.end();}
