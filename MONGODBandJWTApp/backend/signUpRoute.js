import { getDbConnection } from './db.js';
import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';
import jwt from 'jsonwebtoken';


export const signUpRoute = {
	path: '/api/signup',
	method: 'post',
	handler: async (req, res) => {
	const { email, password, name } = req.body;
        const db = getDbConnection('admindbusers');
        const user = await db.collection('adminusers').findOne({ email })

        if (user) {
		res.sendStatus(409);
        } else {
		const passwordHash = await bcrypt.hash(password, 10);
		const verificationString = uuid();
		const userInfo = {
        name: name,
	}

	const result = await db.collection('adminusers').insertOne(
	{
		email,
		passwordHash,
		info: userInfo,
		isVerified: false,
		verificationString
	})

	const { insertedId } = result;
	if (!process.env.JWT_SECRET) {
		// JWT_SECRET environment variable is not defined
		return res.status(500).json({ error: 'JWT_SECRET environment variable is not defined' });
	}
           	 jwt.sign({
			id: insertedId,
			email,
			info: userInfo,
			isVerified: false
		},
                process.env.JWT_SECRET,
                {
					expiresIn: "2d"
                },
                (err, token) => {
		if (err) {
			console.log(err);
			return res.status(500).send(err);
		}
		res.status(200).json({ token });
		})
        }
    },
};