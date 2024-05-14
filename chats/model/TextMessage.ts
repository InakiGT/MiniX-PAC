import mongoose, { Model, Schema } from 'mongoose';
import { IMessage } from "./Message";

export interface ITextMessage extends IMessage {
    content: string;
}

const TextMessageSchemaFields = {
    content: { type: String, requeried: true },
}

const textMessageSchema = new Schema(TextMessageSchemaFields);

const TextMessage = (mongoose.models.Message as Model<IMessage>).discriminator<ITextMessage>('TextMessage', textMessageSchema);


export default TextMessage;