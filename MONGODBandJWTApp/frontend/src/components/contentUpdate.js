import React, { useState, useEffect } from 'react';
import { Form, Card, Container, Row, Col, Button, Alert } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { useToken } from "../auth/useToken";

const ContentUpdate = () => {
    const navigate = useNavigate();
    const [content, setContent] = useState({});
    const { id } = useParams();
    const [token] = useToken();
    const [error, setError] = useState('');
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setContent({ ...content, [name]: value });
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`http://44.203.95.38:8080/api/data/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(content),
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error(`Error ${response.status}: ${response.statusText}`);
                }
            })
            .then(data => {
                console.log(data);
                navigate(-1);
            })
            .catch(error => {
                console.error(error);
                setError(`Failed to update data: ${error.message}`);
            });
    }

    useEffect(() => {
        fetch(`http://44.203.95.38:8080/api/data/${id}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setContent(data)
            });
    }
        , [id]);

    return (
        <Card>
            <Container>
                <h1>Edit Data</h1>
                {error &&
                    <Alert variant="danger" className="my-3">
                        {error}
                    </Alert>
                }
                <Row>
                    <Col>
                        <Card className="my-3 p-3 rounded">
                            <Form>
                                <Form.Group controlId="formTitle">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Media Title"
                                        name="title"
                                        value={content.title}
                                        onChange={handleInputChange}

                                    />
                                </Form.Group>
                                <Form.Group controlId="formformauthor">
                                    <Form.Label>Author</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Author"
                                        name="author"
                                        value={content.author}
                                        onChange={handleInputChange}

                                    />
                                </Form.Group>
                                <Form.Group controlId="formdesc">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Media desc"
                                        name="desc"
                                        value={content.desc}
                                        onChange={handleInputChange}

                                    />
                                </Form.Group>
                                <Form.Group controlId="formyear">
                                    <Form.Label>Year Made</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter when it was made"
                                        name="yearmade"
                                        value={content.yearmade}
                                        onChange={handleInputChange}

                                    />
                                </Form.Group>
                                <Form.Group controlId="formtype">
                                    <Form.Label>Media Type</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Media type"
                                        name="mediatype"
                                        value={content.mediatype}
                                        onChange={handleInputChange}

                                    />
                                </Form.Group>
                                <Form.Group controlId="formimage">
                                    <Form.Label>Media Image</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Media Image"
                                        name="mediaimage"
                                        value={content.mediaimage}
                                        onChange={handleInputChange}

                                    />
                                </Form.Group>
                                <Form.Group controlId="formURL">
                                    <Form.Label>Meida URL</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter URL to media"
                                        name="mediaurl"
                                        value={content.mediaurl}
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

export default ContentUpdate;