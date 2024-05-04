import mongoose, { Schema } from 'mongoose';
import { commentSchema } from './Comment';
import { likeSchema } from './Like';

interface IPost extends Document {
    authorId: String;
    content: String;
    img?: String;
    video?: String;
    comments?: [];
    hashtags?: [];
    likes?: [];
}

const postSchema = new Schema({
    authorId: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
    content: { type: String, required: true },
    img: { type: String, required: false },
    video: { type: String, required: false },
    comments: { type: [ commentSchema ], required: false },
    hashtags: { type: [ String ], required: false },
    likes: { type: [ likeSchema ], required: false },
});

const Post = mongoose.model<IPost>('Post', postSchema);

export default Post;