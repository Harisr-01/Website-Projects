import { contentData } from "./data.js";

export const getContentRoute = {
    path: '/api/data/:id',
    method: 'get',
    handler: (req, res) => {
        const id = req.params.id;
        const content = contentData.find((contentData) => contentData.id === parseInt(id));
        res.status(200).send(content);
    },
};