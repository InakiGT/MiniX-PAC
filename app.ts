import express, { Express } from 'express';

const port = process.env.PORT || 3000;

const createApp = () => {
    const app: Express = express();

    app.use(express.json());

    app.listen(port, () => {
        console.log(`App listening on port: ${port}`);
    });

    return app;
}

export default createApp;