import { Router, Request, Response } from 'express';
import NotificationManager from '../model/NotificationManager';
import CommentNotification from '../model/CommentNotification';

class NotificationController {
    private router: Router;
    private manager: NotificationManager;

    constructor() {
        this.router = Router();
        this.manager = new NotificationManager(new CommentNotification());
        this.initializeRouter();
    }

    private initializeRouter(): void {
        this.router.get('/', this.getNotification.bind(this));
    }

    private getNotification(_: Request, res: Response) {
        try {
            const data = this.manager.getNotifications();

            res.json({
                msg: 'OK',
                data,
            });
        } catch(err) {
            res.status(400).json({
                msg: 'Internal Server Error',
            })
        }
    }

    public getRouter(): Router {
        return this.router;
    }
}

export default NotificationController;