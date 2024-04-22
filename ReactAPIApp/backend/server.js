import express from 'express';
import { routes } from './index.js';
import cors from 'cors';

const PORT = process.env.PORT || 8080;

const app = express();

app.use(cors());
app.use(express.json());

routes.forEach(route => {
    app[route.method](route.path, route.handler);
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
