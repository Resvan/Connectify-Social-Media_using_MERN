import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from "../models/User.js";
import cloudinary from '../config/cloudinery.js';


/* REGISTER USER */
export const register = async (req, res) => {
    try {
        const {
            username,
            email,
            phone,
            password

        } = req.body;
        const salt = await bcrypt.genSalt();
       
        const passwordHash = await bcrypt.hash(password, salt);

        const newUser = new User({
            username,
            email,
            password: passwordHash,
            phone
        });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);

        
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    }
};


/* LOGGING IN */
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });
        if (!user) return res.status(400).json({ msg: "User does not exist. " });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ msg: "Invalid credentials. " });

        const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY);
        delete user.password;
        res.status(200).json({ token, user });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const getUser =async (req, res) => {
    
    const userId = req.params.id
    try {
        const user = await User.findById(userId);
        
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error)
    }
}

export const addProfilePic = async (req, res) => {
   try {
       const { userId } = req.body;
       const result = await cloudinary.uploader.upload(req.file.path, {
           folder: "Users"
       });
       const updatedUser = await User.findByIdAndUpdate(
           userId, 
               { profilePic: result.secure_url },
               { new: true }
       )
       
       res.status(200).json(updatedUser);
   } catch (error) {
       res.status(500).json(error)
   }
}
