import Notification from "./Notification";

class ReactionNotification implements Notification {
    send(): void {
        console.log('Sending Reaction Notification');
    }
}

export default ReactionNotification;