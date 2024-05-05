import React, { useState } from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import { useUser } from '../auth/useUser';
import { useNavigate } from 'react-router-dom';
const LoginLogout = () => {
    const user = useUser();

    const [, setLoggedIn] = useState(user !== null);
    const navigate = useNavigate();
    const handleLogoff = () => {
        localStorage.removeItem('token');
        setLoggedIn(false);
        navigate('/login');
    };
    const handleLogon = () => {
        navigate('/login');
    };
    return (
        <Nav>
            <NavDropdown title="User Settings" id="basic-nav-dropdown" id="navlink">
                <NavDropdown.Item onClick={handleLogoff}>Log Out</NavDropdown.Item>
                <NavDropdown.Item onClick={handleLogon}>Log In</NavDropdown.Item>
            </NavDropdown>
        </Nav>
    );
};
export default LoginLogout;