import { Router, Request, Response } from 'express';

class PaymentController {
    private router: Router;

    constructor() {
        this.router = Router();
    }

    private initializeRouter(): void {
        // this.router.get('/');
    }

    public getRouter(): Router {
        return this.router;
    }
}

export default PaymentController;