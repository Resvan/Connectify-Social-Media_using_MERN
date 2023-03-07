import express from "express";
import { getUser, login, register, addProfilePic } from "../controllers/userController.js";
import { verifyToken } from '../middleware/auth.js';
import upload from "../config/multer.js";
import { createPost, getPosts, likePost, commentPost, getUserPost } from "../controllers/postController.js";


const router = express.Router();

router.post('/signup', register);
router.post('/login', login);
router.post('/add-post', verifyToken, upload.single('image'), createPost);
router.post('/profile-pic', verifyToken, upload.single('image'), addProfilePic)

router.get('/getPost', verifyToken, getPosts);
router.get('/user/:id', verifyToken, getUser);
router.get('/user-post/:id', verifyToken, getUserPost)

/* UPDATE */
router.patch("/posts/:id/like", verifyToken, likePost);
router.patch("/posts/:id/comment", verifyToken, commentPost);


export default router;