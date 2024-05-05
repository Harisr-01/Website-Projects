import { getDbConnection } from './db.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const loginRoute = {
    path: '/api/login',
    method: 'post',
    handler: async (req, res) => {
        const { email, password } = req.body;
        const db = getDbConnection('admindbusers');
        const user = await db.collection('adminusers').findOne({ email });

        if (!user) {
            return res.sendStatus(401);
        }

        const { _id: id, isVerified, passwordHash, info } = user;
        const isCorrect = passwordHash ? await bcrypt.compare(password, passwordHash) : false;

        if (isCorrect) {
            jwt.sign({ id, isVerified, email, info }, process.env.JWT_SECRET, { expiresIn: "2d" }, (err, token) => {
                if (err) {
                    return res.status(500).json({ error: 'Internal Server Error' });
                }
                // Send the token as a response
                res.status(200).json({ token });
            });
        } else {
            // Incorrect password
            res.sendStatus(401);
        }
    },
};