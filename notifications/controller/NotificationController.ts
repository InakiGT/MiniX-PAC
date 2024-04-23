import { Router, Request, Response } from 'express';

class NotificationController {
    private router: Router;

    constructor() {
        this.router = Router();
        this.initializeRouter();
    }

    private initializeRouter(): void {
        // this.router.get('/');
    }

    public getRouter(): Router {
        return this.router;
    }
}

export default NotificationController;