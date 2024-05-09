import mongoose, { Model, Schema } from 'mongoose';
import { IPost } from "./Post";

interface SimplePost extends IPost {
    content: string;
}

const SimplePostSchemaFields = {
    content: { type: String, requeried: true },
}

const SimplePostSchema = new Schema(SimplePostSchemaFields);

const SimplePost = (mongoose.models.Post as Model<IPost>).discriminator<SimplePost>('SimplePost', SimplePostSchema);


export default SimplePost;