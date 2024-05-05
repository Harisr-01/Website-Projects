import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import LoginLogout from './loginlogout';
import { useUser } from '../auth/useUser';
const Header = () => {
    const user = useUser();
    const [, setLoggedIn] = useState(user !== null);


    useEffect(() => {
        setLoggedIn(user !== null);
    }, [user]);
    return (
        <Navbar id="navbar" expand="lg">
            <Container>
                <Navbar.Brand id="navlink">Online Media Library</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to="/">
                            <Nav.Link id="navlink">Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/data">
                            <Nav.Link id="navlink">Content</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    <LoginLogout />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;