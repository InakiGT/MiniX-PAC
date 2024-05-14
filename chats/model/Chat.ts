import Message from "./Message";
import TextMessage from "./TextMessage";
import ImageMessage from "./ImageMessage";

class Chat {
    async getMessages(query: any) {
        try {
            const { ObjectId } = require('mongodb');

            const receiverObjectId = new ObjectId(query.receiver);
            const senderObjectId = new ObjectId(query.sender);
            
            const messages = await Message.aggregate([
                {
                    $match: {
                        $or: [
                            { 
                                $and: [
                                    { receiverId: receiverObjectId },
                                    { senderId: senderObjectId }
                                ]
                            },
                            { 
                                $and: [
                                    { receiverId: senderObjectId },
                                    { senderId: receiverObjectId }
                                ]
                            }
                        ]
                    }
                },
                {
                    $lookup: {
                        from: 'users',
                        localField: 'senderId',
                        foreignField: '_id',
                        as: 'sender'
                    }
                },
                {
                    $lookup: {
                        from: 'users',
                        localField: 'receiverId',
                        foreignField: '_id',
                        as: 'receiver'
                    }
                },
                {
                    $project: {
                        senderId: 0,
                        receiverId: 0,
                    }
                }
            ]);
            
            

            return messages;
        } catch(err) {
            throw new Error(`Error attemping to get messages: ${err}`);
        }
    }

    async sendTextMessage(data: any) {
        try {
            const message = new TextMessage(data);
            await message.save();
            
            return true;
        } catch(err) {
            throw new Error(`Error attemping to create a TextMessage: ${err}`);
        }
    }

    async sendImageMessage(data: any) {
        try {
            const message = new ImageMessage(data);
            await message.save()
            
            return true;
        } catch(err) {
            throw new Error(`Error attemping to create a TextMessage: ${err}`);
        }
    }

}

export default Chat;