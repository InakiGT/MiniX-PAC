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

    private get(req: Request, res: Response) {
        res.json({
            msg: 'Hola mundo',
        });
    }

    public getRouter(): Router {
        return this.router;
    }
}

export default MainController;