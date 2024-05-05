import React from 'react';
import { Card, Container, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
const Home = () => {
    return (
        <Card id="HomeCard">
            <Container id="HomeContain">
                <h1>Welcome to Online Media Library</h1>
                <p>
                    View, add, update, and delete your media and data here.
                </p>
                <LinkContainer to={`/data`}>
                    <Button variant="primary" id="button">View all Content</Button>
                </LinkContainer>
            </Container>
        </Card>
    )
}

export default Home;