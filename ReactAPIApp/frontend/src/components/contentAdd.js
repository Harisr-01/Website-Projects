import React, { useState } from 'react';
import { Form, Card, Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ContentAdd = () => {
    const navigate = useNavigate();
    const [content, setContent] = useState({});

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setContent({ ...content, [name]: value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`http://3.92.221.6:8080/api/data`, {
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json',
             },
             body: JSON.stringify(content),
         })
             .then(response => response.json())
             .then(data => {
                 console.log(data);
                 navigate('/data');
             }
             );
    }

    return (
        <Card>
            <Container>
                <h1>Add New Content</h1>
                <Row>
                    <Col>
                        <Card className="my-3 p-3 rounded">
                            <Form>
                                <Form.Group controlId="formTitle">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Media Title:"
                                        name="title"
                                        onChange={handleInputChange}

                                    />
                                </Form.Group>
                                <Form.Group controlId="formAuthor">
                                    <Form.Label>Author</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Author of media:"
                                        name="author"
                                        onChange={handleInputChange}

                                    />
                                </Form.Group>
                                <Form.Group controlId="formDesc">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter what media is about:"
                                        name="desc"
                                        onChange={handleInputChange}

                                    />
                                </Form.Group>
                                <Form.Group controlId="formYear">
                                    <Form.Label>Year made</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="When was media made in year:"
                                        name="yearmade"
                                        onChange={handleInputChange}

                                    />
                                </Form.Group>
                                <Form.Group controlId="formtype">
                                    <Form.Label>Media type</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="What kind of media is this:"
                                        name="mediatype"
                                        onChange={handleInputChange}

                                    />
                                </Form.Group>
                                <Form.Group controlId="formimage">
                                    <Form.Label>Media Image</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter URL of media image if there:"
                                        name="mediaimage"
                                        onChange={handleInputChange}

                                    />
                                </Form.Group>
                                <Form.Group controlId="formURL">
                                    <Form.Label>Media URL</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter URL to media:"
                                        name="mediaurl"
                                        onChange={handleInputChange}

                                    />
                                </Form.Group>
                            </Form>



                        </Card>
                        <Button onClick={handleSubmit} variant="primary">Save</Button>
                        &nbsp;
                        <Button onClick={() => navigate(-1)} variant="primary">Cancel</Button>
                    </Col>
                </Row>
            </Container>
        </Card>
    )
}

export default ContentAdd;