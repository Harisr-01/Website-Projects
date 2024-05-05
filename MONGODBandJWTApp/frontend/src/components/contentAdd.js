import React, { useState } from 'react';
import { Form, Card, Container, Row, Col, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { useToken } from "../auth/useToken";

const ContentAdd = () => {
    const navigate = useNavigate();
    const [content, setContent] = useState({});
    const [token] = useToken();
    const [error, setError] = useState(null);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setContent({ ...content, [name]: value });
    }
 const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(`http://44.203.95.38:8080/api/data`, content, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                console.log(response.data);
                navigate('/data');
            })
            .catch(error => {
                console.error(error);
                setError("There was an error loadinf media");
            });
    }

    return (
        <Card>
            <Container>
                <h1>Add New Content</h1>
                {error && <Alert variant="danger">{error}</Alert>}
                <Row>
                    <Col>
                        <Card className="my-3 p-3 rounded">
                            <Form>
                                <Form.Group controlId="formTitle">
                                    <Form.Label>Enter Media Title:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Title"
                                        name="title"
                                        onChange={handleInputChange}

                                    />
                                </Form.Group>
                                <Form.Group controlId="formAuthor">
                                    <Form.Label>Enter Author of media:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Author"
                                        name="author"
                                        onChange={handleInputChange}

                                    />
                                </Form.Group>
                                <Form.Group controlId="formDesc">
                                    <Form.Label>Enter what media is about:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Description"
                                        name="desc"
                                        onChange={handleInputChange}

                                    />
                                </Form.Group>
                                <Form.Group controlId="formYear">
                                    <Form.Label>When was media made in year:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Year Made"
                                        name="yearmade"
                                        onChange={handleInputChange}

                                    />
                                </Form.Group>
                                <Form.Group controlId="formtype">
                                    <Form.Label>What kind of media is this:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Media Type"
                                        name="mediatype"
                                        onChange={handleInputChange}

                                    />
                                </Form.Group>
                                <Form.Group controlId="formimage">
                                    <Form.Label>Enter URL of media image if there is one:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Media Image"
                                        name="mediaimage"
                                        onChange={handleInputChange}

                                    />
                                </Form.Group>
                                <Form.Group controlId="formURL">
                                    <Form.Label>Enter URL to media:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Media URL"
                                        name="mediaurl"
                                        onChange={handleInputChange}

                                    />
                                </Form.Group>
                            </Form>



                        </Card>
                        <Button onClick={handleSubmit} variant="primary" id="button">Save</Button>
                        &nbsp;
                        <Button onClick={() => navigate(-1)} variant="primary" id="button">Cancel</Button>
                    </Col>
                </Row>
            </Container>
        </Card>
    )
}

export default ContentAdd;