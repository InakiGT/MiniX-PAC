import createApp from "./app";
import MainController from "./main/controller/MainController";
import PostsController from "./posts/controller/PostsController";

const app = createApp();

const mainController = new MainController();
const postController = new PostsController();

const mainRouter = mainController.getRouter();
const postRouter = postController.getRouter();

app.use('/', mainRouter);
app.use('/posts', postRouter)