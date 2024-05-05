import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Col, Button, Alert } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import axios from "axios";
import { useToken } from "../auth/useToken";
import { useUser } from "../auth/useUser";
const ContentDetails = () => {
    const navigate = useNavigate();
    const [content, setContent] = useState({});
    const { id } = useParams();
    const [token] = useToken();
    const [error, setError] = useState('');
    const user = useUser();
    const [loggedIn,] = useState(user !== null);

    const handleDelete = (event) => {
        event.preventDefault();
        axios.delete(`http://44.203.95.38:8080/api/data/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })
            .then(() => {
                navigate('/data');
            })
            .catch(error => {
                setError(error.message);
                console.log(error);
            });
    }

    useEffect(() => {
        axios.get(`http://44.203.95.38:8080/api/data/${id}`)
            .then(response => {
                console.log(response.data);
                setContent(response.data)
            })
            .catch(error => {
                setError(error.message);
                console.log(error);
            });
    }, [id]);

    return (
        <Card>

            <Container>
            <h1>{content.title}</h1>
                <Button onClick={() => navigate(-1)} variant="primary" id="button">Back</Button>
                &nbsp;
                {loggedIn &&
                    <LinkContainer to={`/data/update/${id}`}>
                        <Button disabled={!loggedIn} variant="primary" id="button">Edit Data</Button>
                    </LinkContainer>
                }
                &nbsp;
                {loggedIn &&
                    <Button onClick={handleDelete} variant="primary" id="button">Delete Data</Button>

                }
                {error &&
                    <Alert variant="danger" className="my-3">
                        {error}
                    </Alert>
                }
                <Row>
                    <Col>

                        <Card className="my-3 p-3 rounded">
                            <Card.Title as="div">
                                <strong>{content.title}</strong>
                            </Card.Title>
                            <Card.Text as="div">
                                <div className="my-3">
                                    <strong>Author: </strong>
                                    {content.author}
                                </div>
                            </Card.Text>
                            <Card.Text as="p">
                                <strong>Desc: </strong>
                                {content.desc}
                            </Card.Text>
                            <Card.Text as="p">
                                <strong>Year Made: </strong>
                                {content.yearmade}
                            </Card.Text>
                            <Card.Text as="p">
                                <strong>Type of Media: </strong>
                                {content.mediatype}
                            </Card.Text>
                            <Card.Text as="p">
                                <a href={content.mediaurl}>Visit</a>
                            </Card.Text>
                        </Card>
                    </Col>
                </Row>

            </Container>


        </Card>
    )
}

export default ContentDetails;