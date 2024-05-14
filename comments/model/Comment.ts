import mongoose, { Schema } from 'mongoose';

interface IComment extends Document {
    authorId: String;
    postId: String;
    content: String;
    img?: String;
}

export const commentSchema = new Schema({
    authorId: { type: Schema.Types.ObjectId, required: true },
    postId: { type: Schema.Types.ObjectId, required: true },
    content: { type: String, required: true },
    img: { type: String, required: false },
});

const Comment = mongoose.model<IComment>('Comment', commentSchema);

export default Comment;