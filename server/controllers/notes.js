import mongoose from 'mongoose';
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

    const newPost = new PostNotes(post);
    try{
        await newPost.save();

        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}


export const updatePost = async (req, res) => {
    const { id: _id } = req.params;
    const post = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No Notes with that id');
    
     const updatePost = await PostNotes.findByIdAndUpdate(_id, { ...post, _id}, {new:true} );

     res.json(updatePost);
}

export const deletePost = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No Notes with such id');

    await PostNotes.findByIdAndRemove(id);
    console.log('DELETE');


    res.json({ message: 'note deleted '});
}