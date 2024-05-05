import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import axios from "axios";

const ContentList = () => {
    const [content, setContent] = useState([]);

     useEffect(() => {
        axios.get(`http://44.203.95.38:8080/api/data`)
            .then(response => {
                console.log(response.data);
                setContent(response.data);
            })
            .catch(error => {
                console.error(error);
                alert('There was an error loading the content.');
            });
    }, []);

    return (
        <Card>
            <div id="ContentTitle">
                    <h1>My Content List</h1>
            </div>
            <Container>
                <br></br>
                <LinkContainer to={`/data/add`}>
                    <Button variant="primary" id="button">Add new data</Button>
                </LinkContainer>
                <Row>
                    {content.map(contentdata => (
                        <Col key={contentdata._id} sm={12} md={6} lg={4} xl={3}>
                            <Card className="my-3 p-3 rounded">
                                <LinkContainer to={`/data/${contentdata._id}`}>
                                    <Card.Title as="div">
                                        <strong>{contentdata.title}</strong>
                                    </Card.Title>
                                </LinkContainer>
                                <Card.Text as="div">
                                    <div className="my-3">
                                        {contentdata.author}
                                    </div>
                                </Card.Text>
                                <Card.Text as="h3">
                                    {content.desc}
                                </Card.Text>
                                <Card.Text as="h3">
                                    <img src={contentdata.mediaimage}></img>
                                </Card.Text>
                                <LinkContainer to={`/data/${contentdata._id}`}>
                                    <Button variant="primary" id="button">View Details</Button>
                                </LinkContainer>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </Card>
    )
}
export default ContentList;