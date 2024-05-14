import { Router, Request, Response } from 'express';
import passport from 'passport';
import PaymentManager from '../model/PaymentManager';
import CardPayment from '../model/CardPayment';
import PaypalAdapter from '../model/PaypalAdapter';

class PaymentController {
    private router: Router;

    constructor() {
        this.router = Router();
        this.initializeRouter();
    }

    private initializeRouter(): void {
        this.router.post('/card', passport.authenticate('jwt', { session: false }), this.cardPayment.bind(this));
        this.router.post('/paypal', passport.authenticate('jwt', { session: false }), this.paypalPayment.bind(this));
    }

    private cardPayment(req: Request, res: Response) {
        try {
            const data = req.body;

            const manager = new PaymentManager(new CardPayment());
            const response = manager.pay(data);

            res.json({
                msg: 'OK',
                data: response,
            });     
        } catch(err) {
            res.status(500).json({
                msg: 'ERROR',
                data: err,
            }); 
        }
    }
    
    private paypalPayment(req: Request, res: Response) {
        try {
            const data = req.body;

            const manager = new PaymentManager(new PaypalAdapter());
            const response = manager.pay(data);

            res.json({
                msg: 'OK',
                data: response,
            });
        } catch(err) {
            res.status(500).json({
                msg: 'ERROR',
                data: err,
            }); 
        }
    }

    public getRouter(): Router {
        return this.router;
    }
}

export default PaymentController;