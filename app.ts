import express, { Express } from 'express';

const port = process.env.PORT || 3000;

const createApp = () => {
    const app = express();

    app.listen(port, () => {
        console.log(`App listening on port: ${port}`);
    });

    return app;
}

export default createApp;