import { Navigate } from 'react-router-dom';
import { useUser } from './useUser.js';

export const PrivateRoute = ({ children }) => {
    const user = useUser();

    if (!user) {
        return <Navigate to="/login" replace />;
    }
    return children;
};
