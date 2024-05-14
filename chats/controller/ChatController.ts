import { Router, Request, Response } from 'express';
import ChatManager from '../model/ChatManager';
import passport from 'passport';

class ChatController {
    private router: Router;
    private manager: ChatManager;

    constructor() {
        this.router = Router();
        this.manager = new ChatManager();
        this.initializeRouter();
    }

    private initializeRouter(): void {
        this.router.get('/:id', passport.authenticate('jwt', { session: false }), this.getMessages.bind(this));
        this.router.post('/', passport.authenticate('jwt', { session: false }), this.sendMessage.bind(this));
    }

    private async getMessages(req: Request, res: Response) {
        try {
            const { sub } = req.user as any;
            const query = {
                sender: sub,
                receiver: req.params.id,
            }

            const response = await this.manager.getMessates(query);
            res.status(200).json({
                msg: 'OK',
                data: response,
            });
            
        } catch(err) {
            res.status(500).json({
                msg: 'Internal Server Error',
            });
        }
    }

    private async sendMessage(req: Request, res: Response) {
        try {
            const { body } = req;
            const { sub } = req.user as any;
            
            const data: any = {
                senderId: sub,
                receiverId: body.receiver,
            };

            if ( body.content ) {
                data.content = body.content;
            } else {
                data.img = body.img;
            }

            const response = this.manager.sendMessage(data);
            res.status(201).json({
                msg: 'Message created',
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

export default ChatController;