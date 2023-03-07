import express from 'express';
import bodyParser from "body-parser";
import cors from 'cors';
import dotenv from "dotenv";
import helmet from 'helmet';
import morgan from 'morgan';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import ConverstationRoutes from './routes/converstationRoutes.js';
import MessageRoutes from './routes/messagesRoutes.js';


/* CONFIGURATION */
dotenv.config()
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
connectDB();

app.use('/api', userRoutes);
app.use('/api/converstation', ConverstationRoutes);
app.use('/api/message', MessageRoutes);


const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`server runnig ${PORT}`);
});