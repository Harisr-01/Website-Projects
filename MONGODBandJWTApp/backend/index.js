import { testRoute } from './testRoute.js';
import { getContentsRoute } from './getData.js';
import { getContentRoute } from './getContentRoute.js';
import { postContentRoute } from './postContentRoute.js';
import { putContentRoute } from './putContentRoute.js';
import { deleteContentRoute } from './deleteContentRoute.js';
import { signUpRoute } from './signUpRoute.js';
import { loginRoute } from './loginRoute.js';
import { getUsersRoute } from './getUsersRoute.js';
import dotenv from 'dotenv'
dotenv.config()
export const routes = [
    testRoute,
    getContentsRoute,
    getContentRoute,
    postContentRoute,
    putContentRoute,
    deleteContentRoute,
    signUpRoute,
    loginRoute,
    getUsersRoute
]