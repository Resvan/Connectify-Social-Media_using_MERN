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
import { createServer } from 'http';
import { Server } from 'socket.io';

/* CONFIGURATION */
dotenv.config()
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: 'http://localhost:3000'
    }
});

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

let users = [];

const addUser = (userId, socketId) => {
    const existingUser = users.find(user => user.userId === userId);
    if (!existingUser) {
        const newUser = { userId, socketId };
        users.push(newUser);
        console.log('New user added:', newUser);
    } else {
        existingUser.socketId = socketId;
        console.log('Existing user updated:', existingUser);
    }
}

const removeUser = (socketId) => {
    users = users.filter(user => user.socketId !== socketId);
}

const getUser = (userId) => {
    const user = users.find(user => user.userId === userId);
    console.log('User found:', user);
    return user;
}

io.on('connection', (socket) => {

    // When connect
    console.log('a user conncted');

    // Take userID and socketId from user
    socket.on('add_user', userId => {
        addUser(userId, socket.id);
        io.emit('get_users', users);
    })

    // Send and Get Message
    socket.on("send_message", ({ senderId, receiverId, text }) => {

        console.log('Message received from', senderId, 'to', receiverId);
        const user = getUser(receiverId);
        console.log('User:', user);
        if (user) {
            io.to(user.socketId).emit('get_message', {
                senderId,
                text
            });
        }
    })

    // When disconnect
    socket.on('disconnect', () => {
        console.log('a user disconnected');
        removeUser(socket.id);
        io.emit('get_users', users);
    })
})

const PORT = process.env.PORT || 6001;
httpServer.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
