import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import { Box, createTheme, ThemeProvider } from "@mui/material";
import { useSelector } from 'react-redux';
import Navbar from '../../Components/Navbar/Navbar';
import Home from '../../Pages/Home/Home';
import Login from '../../Pages/Login/Login';
import Signup from '../../Pages/Signup/Signup';
import Profile from '../../Pages/Profile/Profile';
import Chats from '../../Pages/Chats/Chats';
import Chat from '../../Pages/Chat/Chat';
import React, { useRef, useEffect } from 'react';
import Notification from '../../Pages/Notification/Notification';
import SocketContext from '../../utils/socket';
import { io } from 'socket.io-client';

const User = () => {
    const currentUser = Boolean(useSelector((state) => state.token));
    const userId = useSelector((state) => state.user._id);
    const mode = useSelector((state) => state.mode);
    const darkTheme = createTheme({
        palette: {
            mode: mode
        }
    });

    const socket = useRef();

    useEffect(() => {
        // create a new socket connection if it doesn't exist
        if (!socket.current) {
            socket.current = io("ws://localhost:7001");
        }
        // send the user id to the server
        socket.current.emit('add_user', userId);

        // cleanup function to close the socket connection
        return () => {
            socket.current.disconnect();
        };
    }, [userId]);

    const Layout = () => {
        return (
            <>
                <ThemeProvider theme={darkTheme}>
                    <Box bgcolor={"background.default"} color={"text.primary"} >
                        <Navbar />
                        <Outlet />
                    </Box>
                </ThemeProvider>
            </>
        )
    }

    const ProtuctedRoute = ({ children }) => {
        if (!currentUser) {
            return <Navigate to="/login" />
        }

        return children
    }


    return (
        <Routes>
            <Route
                path='/'
                element={
                    <SocketContext.Provider value={socket} >
                        <ProtuctedRoute>
                            <Layout />
                        </ProtuctedRoute>
                    </SocketContext.Provider>
                } >
                <Route path='/' element={<Home />} />
                <Route path='/profile/:id' element={<Profile />} />
                <Route path='/chats' element={<Chats />} />
                <Route path='/chat/:id/:friendId' element={<Chat />} />
                <Route path='/notifications' element={<Notification />} />
            </Route>
            <Route path='/login' element={currentUser ? <Navigate to="/" /> : <Login />} />
            <Route path='/signup' element={currentUser ? <Navigate to="/" /> : <Signup />} />
        </Routes>
    )
}

export default User;
