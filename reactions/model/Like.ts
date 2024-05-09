import mongoose, { Schema } from "mongoose";

interface ILike extends Document {
    authorId: String;
    content: String;
    img?: String;
}

export const likeSchema = new Schema({
    authorId: { type: Schema.Types.ObjectId, required: true },
    content: { type: String, required: true },
    img: { type: String, required: false },
});

const Like = mongoose.model<ILike>('Like', likeSchema);

export default Like;