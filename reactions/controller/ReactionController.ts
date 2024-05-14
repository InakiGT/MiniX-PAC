import { Router, Request, Response } from 'express';

import ReactionManager from '../model/ReactionManager';
import passport from 'passport';

class ReactionController {
    private router: Router;
    private manager: ReactionManager;

    constructor() {
        this.router = Router();
        this.manager = new ReactionManager();
        this.initializeRouter();
    }

    private initializeRouter(): void {
        this.router.get('/:id', this.getReactions.bind(this));
        this.router.post('/', passport.authenticate('jwt', { session: false }), this.createReactions.bind(this));
    }

    private async createReactions(req: Request, res: Response) {
        try {
            const data = req.body;
            const { sub } = req.user as any;
            data.authorId = sub;

            const reaction = await this.manager.createReaction(data, sub);

            res.status(200).json({
                msg: 'CREATED',
                data: reaction,
            });
        } catch(err) {
            res.status(500).json({
                msg: 'Internal Server Error',
            });
        }
    }

    private async getReactions(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const comments = await this.manager.getReactions({ postId: id });

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

export default ReactionController;