import PostNotes from '../models/postNotes.js';

export const getnotes = async (req, res) => {
    try{
        const postNotes = await PostNotes.find();

        console.log(postNotes);

        res.status(200).json(postNotes);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const createPost = async (req, res) => {
    const post = req.body;

    const newPost = new PostNote(post);
    try{
        await newPost.save();

        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}