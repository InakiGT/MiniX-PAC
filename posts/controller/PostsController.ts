import { Router, Request, Response } from 'express';
import passport from 'passport';

import PostsManager from '../model/PostsManager';

class PostsController {
    private router: Router;
    private manager: PostsManager;

    constructor() {
        this.router = Router();
        this.manager = new PostsManager();
        this.initializeRouter();
    }

    private initializeRouter(): void {
        this.router.get('/', this.getPosts.bind(this));
        this.router.get('/getOne/:id', this.getPost.bind(this));
        this.router.get('/trends', this.getTrends.bind(this));
        this.router.post('/', passport.authenticate('jwt', { session: false }), this.createPost.bind(this));
    }

    private async getPost(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const post = await this.manager.getPost(id);

            res.status(200).json({
                msg: 'OK',
                data: post,
            });
        } catch(err) {
            res.status(500).json({
                msg: 'Internal Server Error',
            });
        }
    }

    private async getPosts(req: Request, res: Response) {
        try {
            const { query } = req.body;
            const posts = await this.manager.getPosts(query);

            res.status(200).json({
                msg: 'OK',
                data: posts,
            });
        } catch(err) {
            res.status(500).json({
                msg: 'Internal Server Error',
            });
        }
    }

    private async getTrends(_: Request, res: Response) {
        try {
            const data = await this.manager.aggregate();
    
            res.status(200).json({
                msg: 'OK',
                data,
            });
        } catch(err) {
            res.status(500).json({
                msg: 'Internal Server Error',
            });
        }
    }

    private async createPost(req: Request, res: Response) {
        try {
            const data = req.body;  
            const { sub } = req.user as any;  
            data.authorId = sub;

            await this.manager.createPost(data);

            res.status(201).json({
                msg: 'Post created',
                data,
            });
        } catch(err) {
            res.status(500).json({
                msg: 'Internal Server Error',
            });
        }
    }

    public getRouter(): Router {
        return this.router;
    }
}

export default PostsController;