import Notification from "./Notification";

class FollowerNotification implements Notification {
    send(): void {
        console.log('Sending Follower Notification');
    }
}

export default FollowerNotification;