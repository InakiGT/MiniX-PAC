import { Router, Request, Response } from 'express';

import CommentManager from '../model/CommentManager';

class CommentController {
    private router: Router;
    private manager: CommentManager;

    constructor() {
        this.router = Router();
        this.manager = new CommentManager();
        this.initializeRouter();
    }

    private initializeRouter(): void {
        this.router.get('/:id', this.getComments.bind(this));
        this.router.post('/', this.createComment.bind(this));
    }

    private async createComment(req: Request, res: Response) {
        try {
            const data = req.body;
            const posts = await this.manager.createComment(data);

            res.status(200).json({
                msg: 'CREATED',
                data: posts,
            });
        } catch(err) {
            res.status(500).json({
                msg: 'Internal Server Error',
            });
        }
    }

    private async getComments(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const comments = await this.manager.getComments({ postId: id });

            res.status(200).json({
                msg: 'OK',
                data: comments,
            });
        } catch(err) {
            res.status(500).json({
                msg: 'Internal Server Error',
            });
        }
    }

    getRouter(): Router {
        return this.router;
    }
}

export default CommentController;