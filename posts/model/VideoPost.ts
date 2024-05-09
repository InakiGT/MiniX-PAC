import mongoose, { Model, Schema } from 'mongoose';
import { IPost } from "./Post";

interface IVideoPost extends IPost {
    video: string;
    content?: string;
}

const VideoPostSchemaFields = {
    video: { type: String, requeried: true },
    content: { type: String, requeried: false },
}

const VideoPostSchema = new Schema(VideoPostSchemaFields);

const VideoPost = (mongoose.models.Post as Model<IPost>).discriminator<IVideoPost>('VideoPost', VideoPostSchema);


export default VideoPost;