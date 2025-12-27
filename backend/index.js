import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import ConnectDB  from './config/db.js';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/authRoute.js';
import userRoutes from './routes/userRoute.js';
import productRoutes from './routes/productRoute.js';
import cartRouter from './routes/Card.js';
dotenv.config();
const PORT = process.env.PORT || 5000;



const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:["http://localhost:5174","http://localhost:5173"],
    credentials:true,
}))


app.use("/api/v1/auth",authRoutes);
app.use("/api/v1/user",userRoutes);
app.use("/api/v1/product",productRoutes);
app.use("/api/v1/cart",cartRouter);




app.listen(PORT,()=>{
    console.log("server is running on port",PORT);
    ConnectDB();
})