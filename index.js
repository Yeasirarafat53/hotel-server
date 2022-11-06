import express from 'express';
import dotenv from "dotenv";
import mongoose from 'mongoose';
import authRoutes from './routes/auth.js';
import hotelsRoutes from './routes/hotels.js';
import roomsRoutes from './routes/rooms.js';
import usersRoutes from './routes/users.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();
dotenv.config();

// mongodb connect
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB);
        console.log("connected to MongoDB");
    } catch (error) {
        throw error;
    }
};
mongoose.connection.on("disconnect", () => {
    console.log("mongodb disconnect")
})


//middlewares
app.use(cors())
app.use(express.json());
app.use(cookieParser())

app.use('/api/auth', authRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/hotels', hotelsRoutes);
app.use('/api/rooms', roomsRoutes);

// app.use((err, req, res, next) => {
//   const errorStatus = err.status || 500;
//   const errorMessage = err.message || 'Something went wrong!';
//   return res.status(errorStatus).json({
//     success: false,
//     status: errorStatus,
//     message: errorMessage,
//     stack: err.stack,
//   });
// });






app.get("/", (req, res) => {
    res.send("hello ariyan")
})


// port 

app.listen(8000, () => {
    connect()
    console.log("connected to backend");
})


















