import Box from "@mui/material/Box";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import OutlinedInput from '@mui/material/OutlinedInput';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import AttachFileRoundedIcon from '@mui/icons-material/AttachFileRounded';
import React, { useEffect, useRef, useState, useContext} from 'react';
import UploadImage from "../UploadImage/UploadImage";
import { useParams } from "react-router-dom";
import {  useSelector } from "react-redux";
import axios from '../../utils/axios';
import Message from "../Message/Message";
import SocketContext from "../../utils/socket";

const ChatBox = () => {

    const [openImageUpload, setImageUpload] = useState(false);
    const [messages, setMessages] = useState(null);
    const [newMessage, setNewMessage] = useState('');
    const [arrivalMessage, setArrivalMessage] = useState(null);
    const { id } = useParams();
    const { friendId } = useParams();
    const [friend, setFriend] = useState(null);
    const userId = useSelector((state) => state.user._id);
    const token = useSelector((state) => state.token);
    const scrollRef = useRef();
    const socket = useContext(SocketContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const message = {
            sender: userId,
            text: newMessage,
            converstationId: id
        }

        socket.current?.emit('send_message', {
            senderId: userId,
            receiverId: friendId,
            text: newMessage
        })

        try {
            const res = await axios.post('api/message', message, {
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${token}`,
                },
            })
            console.log(res);
            setMessages([...messages, res.data]);
            setNewMessage('');
        } catch (error) {
            console.log(error)
        }

    };

    useEffect(() => {
        socket.current?.on('get_message', data => {
            setArrivalMessage({
                sender: data.senderId,
                text: data.text,
                createdAt: Date.now(),
            });
        });
    }, []);

    useEffect(() => {
        arrivalMessage && friendId === arrivalMessage.sender &&
            setMessages((prev)=>[...prev,arrivalMessage])
    },[arrivalMessage])

    useEffect(() => {
        const getMessags = async () => {
            try {
                const res = await axios.get(`api/message/${id}`, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        Authorization: `Bearer ${token}`,
                    },
                });
                setMessages(res.data)
            } catch (error) {
                console.log(error);
            }
        };
        getMessags();
    }, []);
  

    useEffect(() => {

        const getUser = async () => {
            try {

                const res = await axios.get(`api/user/${friendId}`, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': `Bearer ${token}`,
                    },
                })

                setFriend(res.data);
            } catch (error) {
                console.log(error)
            }
        }

        getUser();
    }, [token])

    useEffect(() => {
        scrollRef.current?.scrollIntoView({behavior:"smooth"})
    },[messages])



    return (
        <Box flex={4} sx={{marginLeft:"1rem"}}>
            <Card sx={{
                boxShadow: `-1px 6px 5px 3px rgba(0,0,0,0.25)`,
                height: "90vh",
                width: "99%",
            }} >
                <CardHeader
                    
                    avatar={
                        <Avatar
                            alt={`Avatar `}
                            src={friend?.profilePic}
                        />
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={friend?.username}
                    subheader="online"
                />
                <Box sx={{
                    backgroundColor: "#f0f5f5",
                    height: "calc(100% - 8rem)",
                    paddingLeft: "1rem",
                    overflowX: "scroll",
                    "&::-webkit-scrollbar": {
                        display: "none"
                    }
                }}>
                
                    <Box>
                        {messages &&
                            messages.map((msg) => {
                                return (
                                    <Box ref={scrollRef} key={msg?._id}>
                                        <Message msg={msg} />
                                    </Box>
                                ) 
                            })}
                                 
                    </Box>
                </Box>
                <Box sx={{
                        
                    display: "flex",
                    backgroundColor: "#f0f5f5",
                }}>
                    <Box sx={{
                        height:"4rem",
                        width: "100%",
                        display: "flex",
                        paddingLeft:"1rem"
                       
                    }}>
                        <OutlinedInput
                            sx={{
                                padding: "1rem",
                                backgroundColor: "white",
                                borderRadius:"20px"
                            }}
                            placeholder="Type here"
                            multiline
                            fullWidth
                            onChange={e => setNewMessage(e.target.value)}
                            value={newMessage}
                            inputProps={{ 'aria-label': 'Type Message' }}
                        />
                        <Box sx={{
                            paddingTop: "1rem",
                            paddingLeft: "1rem",
                            paddingRight: "1rem",
                            cursor: "pointer",
                            "&:hover": {
                                backgroundColor: "white",
                                color: "black",
                            }
                        }}
                        onClick={e=>setImageUpload(true)}
                        >
                            <AttachFileRoundedIcon color="gray" />
                        </Box>
                    </Box>
                    <SendRoundedIcon
                        onClick={handleSubmit}
                        sx={{
                        backgroundColor: "#bc80d4",
                        padding: "1rem",
                        paddingLeft: "1rem",
                        borderRadius: "100%",
                        color: "white",
                        marginInline: "1rem",
                        cursor: "pointer",
                        "&:hover": {
                            backgroundColor: "green",
                            color: "black",
                        }
                            
                    }} />
                </Box>
                <UploadImage open={openImageUpload} setOpen={setImageUpload} />

            </Card>
        </Box>
    );
}

export default ChatBox
