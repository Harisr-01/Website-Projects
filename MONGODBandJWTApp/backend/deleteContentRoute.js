import { ObjectId } from "mongodb";
import { getDbConnection } from "./db.js";
import jwt from 'jsonwebtoken';

export const deleteContentRoute = {
    path: '/api/data/:id',
    method: 'delete',
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
                const id = req.params.id;
                console.log(id);
                const query = { "_id": new ObjectId(id) };
                const db = getDbConnection('contentdb');
                const dataexists = await db.collection('contentdata').findOne(query);
        
                if (dataexists) {
                    const result = await db.collection('contentdata').deleteOne(query);
                    res.status(200).send('Media has been deleted successfully');
                } else {
                    res.status(404).send('Could not find that media');
                }
		    }
	    })
    }
};