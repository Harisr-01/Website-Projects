import { getDbConnection } from "./db.js";

export const getContentsRoute = {
    path: '/api/data',
    method: 'get',
    handler: async (req, res) => {
        const db = getDbConnection('contentdb');
        const result = await db.collection('contentdata').find().toArray();
        res.status(200).send(result);
        
    },
};