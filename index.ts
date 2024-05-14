import cors from 'cors';

import createApp from "./app";
import MainController from "./main/controller/MainController";
import UserController from "./users/controller/UserController";
import ChatController from "./chats/controller/ChatController";
import PostsController from "./posts/controller/PostsController";
import NotificationController from "./notifications/controller/NotificationController";
import RegisterController from "./register/controller/RegisterController";
import PaymentController from "./payment/controller/PaymentController";
import connectMongo from "./database/connection";
import AuthController from "./auth/controller/AuthController";
import CommentController from './comments/controller/CommentController';
import ReactionController from './reactions/controller/ReactionController';
require('./passport');

connectMongo();
const app = createApp();

const mainController = new MainController();
const authController = new AuthController();
const userController = new UserController();
const chatController = new ChatController();
const postController = new PostsController();
const commentController = new CommentController();
const paymentController = new PaymentController();
const registerController = new RegisterController();
const reactionController = new ReactionController();
const notificationController = new NotificationController();

const mainRouter = mainController.getRouter();
const authRouter = authController.getRouter();
const userRouter = userController.getRouter();
const postRouter = postController.getRouter();
const chatRouter = chatController.getRouter();
const commentRouter = commentController.getRouter();
const paymentRouter = paymentController.getRouter();
const registerRouter = registerController.getRouter();
const reactionRouter = reactionController.getRouter();
const notificationRouter = notificationController.getRouter();

app.use(cors());
app.use('/', mainRouter);
app.use('/users', userRouter);
app.use('/login', authRouter);
app.use('/posts', postRouter)
app.use('/chats', chatRouter);
app.use('/comments', commentRouter);
app.use('/payment', paymentRouter);
app.use('/register', registerRouter);
app.use('/reactions', reactionRouter);
app.use('/notifications', notificationRouter);