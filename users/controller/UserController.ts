import { Router, Request, Response } from 'express';

class UserController {
    private router: Router;

    constructor() {
        this.router = Router();
        this.initializeRouter();
    }

    private initializeRouter(): void {

    }

    public getRouter(): Router {
        return this.router;
    }
}

export default UserController;