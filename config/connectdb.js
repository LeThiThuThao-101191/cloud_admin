// config/connectdb.js
import mongoose from 'mongoose';
import dotenv from 'dotenv'; // Nạp biến môi trường
dotenv.config(); // Nạp biến môi trường

const connectdb = async () => {
    try {
        const mongoURI = process.env.MONGO_URI;

        if (!mongoURI) {
            console.error('MONGO_URI chưa được định nghĩa trong file .env');
            process.exit(1);
        }

        await mongoose.connect(mongoURI);

        console.log('Kết nối MongoDB thành công!');
    } catch (error) {
        console.error('Kết nối thất bại:', error);
        process.exit(1); // Thoát ứng dụng nếu không kết nối được
    }
};

export default connectdb;  // Export mặc định hàm connectdb
