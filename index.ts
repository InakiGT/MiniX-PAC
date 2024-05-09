import createApp from "./app";
import MainController from "./main/controller/MainController";
import UserController from "./users/controller/UserController";
import ChatController from "./chats/controller/ChatController";
import PostsController from "./posts/controller/PostsController";
import NotificationController from "./notifications/controller/NotificationController";
import RegisterController from "./register/controller/RegisterController";
import PaymentController from "./payment/controller/PaymentController";
import connectMongo from "./database/connection";
require('./passport');

connectMongo();
const app = createApp();

const mainController = new MainController();
const userController = new UserController();
const chatController = new ChatController();
const postController = new PostsController();
const paymentController = new PaymentController();
const registerController = new RegisterController();
const notificationController = new NotificationController();

const mainRouter = mainController.getRouter();
const userRouter = userController.getRouter();
const postRouter = postController.getRouter();
const chatRouter = chatController.getRouter();
const paymentRouter = paymentController.getRouter();
const registerRouter = registerController.getRouter();
const notificationRouter = notificationController.getRouter();

app.use('/', mainRouter);
app.use('/users', userRouter);
app.use('/posts', postRouter)
app.use('/chats', chatRouter);
app.use('/payment', paymentRouter);
app.use('/register', registerRouter);
app.use('/notifications', notificationRouter);