import mongoose, { Model, Schema } from 'mongoose';
import { IMessage } from "./Message";

export interface IImageMessage extends IMessage {
    img: string;
}

const ImageMessageSchemaFields = {
    img: { type: String, requeried: true },
}

const imageMessageSchema = new Schema(ImageMessageSchemaFields);

const ImageMessage = (mongoose.models.Message as Model<IMessage>).discriminator<IImageMessage>('ImageMessage', imageMessageSchema);


export default ImageMessage;