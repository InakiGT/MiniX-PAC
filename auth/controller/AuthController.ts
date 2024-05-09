import { Router, Request, Response } from 'express';
import AuthManager from '../model/AuthManager';
import passport from 'passport';

class AuthController {
    private router: Router;
    private manager: AuthManager;

    constructor() {
        this.router = Router();
        this.manager = new AuthManager();
        this.initializeRouter();
    }

    private initializeRouter() {
        this.router.post('/', passport.authenticate('local', { session: false }), this.login.bind(this));
    }

    private login(req: Request, res: Response) {
        try {
            const { user, token } = this.manager.signToken(req.user);

            res.json({
                user,
                token,
            });
        } catch(err) {
            res.status(400).json({
                msg: 'Unhauthorized',
            })
        }
    }

    public getRouter(): Router {
        return this.router;
    }
}

export default AuthController;