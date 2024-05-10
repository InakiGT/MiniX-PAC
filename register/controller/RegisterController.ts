import { Router, Request, Response } from 'express';
import RegisterManager from '../model/RegisterManager';

class RegisterController {
    private router: Router;
    private manager: RegisterManager;

    constructor() {
        this.router = Router();
        this.manager = new RegisterManager();
        this.initializeRouter();
    }

    private initializeRouter(): void {
        this.router.post('/', this.createUser.bind(this));
    }

    private async createUser(req: Request, res: Response) {
        try {
            const data = req.body;
            console.log(data);
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

export default RegisterController;