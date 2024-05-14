import Notification from "./Notification";

class CommentNotification implements Notification {
    send() {
        console.log('Sending Comment Notification');
    }
}

export default CommentNotification;