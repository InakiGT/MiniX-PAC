import { Router, Request, Response } from 'express';
import UserManager from '../model/UserManager';

class UserController {
    private router: Router;
    private manager: UserManager;

    constructor() {
        this.router = Router();
        this.manager = new UserManager();
        this.initializeRouter();
    }

    private initializeRouter(): void {
        this.router.get('/', this.getUsers.bind(this));
        this.router.post('/', this.createUser.bind(this));
    }

    private async getUsers(_: Request, res: Response) {
        const users = await this.manager.getUsers();
        
        res.json({
            msg: 'OK',
            data: users,
        });
    }

    private async createUser(req: Request, res: Response) {
        try {
            const data = req.body;
            const response = await this.manager.createUser(data);

            res.status(201).json({
                msg: 'User created',
                data: response,
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

export default UserController;