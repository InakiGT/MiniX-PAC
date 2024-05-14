import { Router, Request, Response } from 'express';
import UserManager from '../model/UserManager';
import passport from 'passport';

class UserController {
    private router: Router;
    private manager: UserManager;

    constructor() {
        this.router = Router();
        this.manager = new UserManager();
        this.initializeRouter();
    }

    private initializeRouter() {
        this.router.get('/', this.getUsers.bind(this));
        this.router.get('/:id', this.getUser.bind(this));
        this.router.delete('/:id', passport.authenticate('jwt', { session: false }), this.deleteUser.bind(this));
        this.router.put('/:id', passport.authenticate('jwt', { session: false }), this.updateUser.bind(this));
    }

    private async getUsers(req: Request, res: Response) {
        let { query } = req;

        const users = await this.manager.getUsers(query);
        
        res.json({
            msg: 'OK',
            data: users,
        });
    }

    private async getUser(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const user = await this.manager.getUser(id);

            res.status(200).json({
                msg: 'OK',
                data: user,
            });
        } catch(err) {
            res.status(500).json({
                msg: 'Internal Server Error',
            });
        }
    }

    private async deleteUser(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { sub } = req.user as any;
            console.log(sub)
            await this.manager.deleteUser(id, sub);

            res.status(200).json({
                msg: 'User deleted',
                data: `User with id: ${ id } was deleted`
            })
        } catch(err) {
            res.status(500).json({
                msg: 'Unhauthorizated',
            });
        }
    }

    private async updateUser(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const data = req.body;

            await this.manager.updateUser(id, data);

            res.status(200).json({
                msg: 'User updated',
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

export default UserController;