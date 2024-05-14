import mongoose, { Schema } from 'mongoose';

export interface IMessage extends Document {
    senderId: String;
    receiverId: String;
}

const messageSchema = new Schema({
    senderId: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
    receiverId: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
});

const Message = mongoose.model<IMessage>('Message', messageSchema);

export default Message;