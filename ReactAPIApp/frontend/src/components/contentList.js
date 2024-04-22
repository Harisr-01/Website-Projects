import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const ContentList = () => {
    const [content, setContent] = useState([]);

    useEffect(() => {
         fetch(`http://3.92.221.6:8080/api/data`, { method: 'GET' })
             .then(response => response.json())
             .then(data => {
                 console.log(data);
                 setContent(data)
             });
     }, []);

    return (
        <Card>
            <Container>
                <h1>Content List:</h1>
                <LinkContainer to={`/data/add`}>
                    <Button variant="primary">Add new data</Button>
                </LinkContainer>
                <Row>
                    {content.map(contentdata => (
                        <Col key={contentdata.id} sm={12} md={6} lg={4} xl={3}>
                            <Card className="my-3 p-3 rounded">
                                <LinkContainer to={`/data/${contentdata.id}`}>
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
                                <LinkContainer to={`/data/${contentdata.id}`}>
                                    <Button variant="primary">View Details</Button>
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