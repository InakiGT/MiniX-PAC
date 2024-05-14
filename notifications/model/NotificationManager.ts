import Notification from "./Notification";

class NotificationManager {
    notification: Notification;

    constructor(notification: Notification) {
        this.notification = notification;
    }

    getNotifications() {
        this.notification.send();
    }
}

export default NotificationManager;