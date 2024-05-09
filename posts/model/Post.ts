import mongoose, { Schema } from 'mongoose';

export interface IPost extends Document {
    authorId: String;
    hashtags?: [];
}

const postSchema = new Schema({
    authorId: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
    hashtags: { type: [ String ], required: false },
});

const Post = mongoose.model<IPost>('Post', postSchema);

export default Post;