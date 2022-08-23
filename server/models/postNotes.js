import mongoose from "mongoose";


const noteSchema = mongoose.Schema({
title: String,
content: String,
creator: String,
tags: [String],
selectedFile: String,
likeCount:{
    type: Number,
    default: 0
},

createdAt:{
    type: Date,
    default: new Date()
}
});

const PostNote = mongoose.model('PostNote', noteSchema);

export default PostNote;