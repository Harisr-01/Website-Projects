import { contentData } from "./data.js";

export const getContentsRoute = {
    path: '/api/data',
    method: 'get',
    handler: (req, res) => {
        res.status(200).send(contentData);
    },
};