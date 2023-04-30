import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    prompt: { type: String, required: true },
    photo: { type: String, required: true },
})

const Post = mongoose.model('Post', PostSchema)

export default Post