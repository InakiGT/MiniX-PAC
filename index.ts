import createApp from "./app";
import MainController from "./main/controller/MainController";

const app = createApp();

const mainController = new MainController();

const mainRouter = mainController.getRouter();

app.use('/', mainRouter);