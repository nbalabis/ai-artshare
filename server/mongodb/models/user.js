import mongoose from "mongoose";
import passportLocalMongoose from 'passport-local-mongoose';

const UserSchema = new mongoose.Schema({
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }]
})

UserSchema.plugin(passportLocalMongoose)

const User = mongoose.model('User', UserSchema)

export default User