import { ObjectId } from "mongodb";
import { getDbConnection } from "./db.js";


export const getContentRoute = {
    path: '/api/data/:id',
    method: 'get',
    handler: async (req, res) => {
        const id = req.params.id;

        const query = { "_id":  new ObjectId(id) };
        const db = getDbConnection('contentdb');
        const result = await db.collection('contentdata').findOne(query);

        if (result) {
            res.status(200).send(result);
        } else {
            res.status(404).send("Could not find that media");
        }
    },
};