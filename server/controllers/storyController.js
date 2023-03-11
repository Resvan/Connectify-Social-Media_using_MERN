import cloudinary from '../config/cloudinery.js';
import Story from '../models/Story.js';

export const addStory = async (req, res) => {
    try {
        console.log(req.file);
        const { id } = req.user;
        const result = await cloudinary.uploader.upload(req.file.path, {
            folder: "Stories"
        });
        console.log(result);
        const newStory = new Story({
            author: id,
            file: result.secure_url,
        });

        const saveStory = await newStory.save();
        const populatedStory = await Story.findById(saveStory._id)
            .populate('author', 'username profilePic')
            .exec();

        console.log(populatedStory);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}