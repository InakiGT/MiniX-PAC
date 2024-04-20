import { Router, Request, Response } from 'express';

class PostsController {
    private router: Router;

    constructor() {
        this.router = Router();
    }

    private initializeRouter(): void {
        this.router.get('/', this.getOne);
    }

    private getOne(_: Request, res: Response) {
        res.json({

        });
    }
}

export default PostsController;