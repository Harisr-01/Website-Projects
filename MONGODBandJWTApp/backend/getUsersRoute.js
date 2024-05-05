import { getDbConnection } from './db.js';
import jwt from 'jsonwebtoken';

export const getUsersRoute = {
    path: '/api/users',
    method: 'get',
    handler: async (req, res) => {

        const { authorization } = req.headers;
        if (!authorization) {
            console.log("A authorization header was not provided.");
            return res.status(401).json({ message: "No authorization header was sent." });

        }
        const token = authorization.split(' ')[1];
        jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
            if (err) {
                console.log(err);
                return res.status(401).json({ message: "Failed verifying this token" })
            }
        })


        const db = getDbConnection('admindbusers');
        const result = await db.collection('adminusers').find().toArray();
        console.log(result)

        res.status(200).send(result);
    },
};
