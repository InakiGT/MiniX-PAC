import { Router, Request, Response } from 'express';

class MainController {
    private router: Router;

    constructor() {
        this.router = Router();
        this.initializeRoutes();
    }

    private initializeRoutes(): void {
        this.router.get('/', this.get);
    }

    private get(_: Request, res: Response): void {
        res.json({
            msg: 'Bienvenido a Mini-X',
        });
    }

    public getRouter(): Router {
        return this.router;
    }
}

export default MainController;