import Notification from "./Notification";

class CompositeNotification implements Notification {
    private notifications: Notification[] = [];

    add(notification: Notification): void {
        this.notifications.push(notification);
    }

    remove(notification: Notification): void {
        const index = this.notifications.indexOf(notification);
        if (index !== -1) {
            this.notifications.splice(index, 1);
        }
    }

    send(): void {
        this.notifications.forEach(notification => notification.send());
    }
}

export default CompositeNotification;