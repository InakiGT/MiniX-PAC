import mongoose, { Schema } from "mongoose";

interface ILike extends Document {
    authorId: String;
}

export const likeSchema = new Schema({
    authorId: { type: Schema.Types.ObjectId, required: true, unique: false },
    postId: { type: Schema.Types.ObjectId, required: true },
});

const Like = mongoose.model<ILike>('Like', likeSchema);

export default Like;