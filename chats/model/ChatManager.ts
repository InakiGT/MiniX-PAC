import Chat from "./Chat";

class ChatManager {
    private chat: Chat;

    constructor() {
        this.chat = new Chat();
    }

    async getMessates(query: any) {
        return await this.chat.getMessages(query);
    }

    async sendMessage(data: any) {
        if ( data.img ) {
            return await this.chat.sendImageMessage(data);
        }

        return await this.chat.sendTextMessage(data);
    }
}

export default ChatManager;