import { getDbConnection } from "./db.js";
import jwt from 'jsonwebtoken';

export const postContentRoute = {
    path: '/api/data',
    method: 'post',
    handler: async (req, res) => {
        const { authorization } = req.headers;

        if (!authorization || authorization === "Bearer null") {
       		console.log("header missing");
       		return res.status(401).json({ message: "No authorization header was sent" });
        }

        //header token format is Bearer YOURSECRETCODE
        const token = authorization.split(' ')[1];
        jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
       		if (err) {
       			console.log(err);
       			return res.status(401).json({ message: "Failed to verify this token" })
       		} else {
			    const db = getDbConnection('contentdb');
                const result = await db.collection('contentdata').insertOne(req.body);
                const insertedData = await db.collection('contentdata').findOne({ _id: result.insertedId });
                console.log(result)
                res.status(201).json({
                    message: 'Content has been made successfully',
                    content: insertedData,
                });
		    }
	    })
    },
};