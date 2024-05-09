import mongoose, { Model, Schema } from 'mongoose';
import { IPost } from "./Post";

interface IImagePost extends IPost {
    img: string;
    content?: string;
}

const ImagePostSchemaFields = {
    img: { type: String, requeried: true },
    content: { type: String, requeried: false },
}

const imagePostSchema = new Schema(ImagePostSchemaFields);

const ImagePost = (mongoose.models.Post as Model<IPost>).discriminator<IImagePost>('ImagePost', imagePostSchema);


export default ImagePost;