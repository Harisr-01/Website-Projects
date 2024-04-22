import React, { useState, useEffect } from 'react';
import { Form, Card, Container, Row, Col, Button } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';

const ContentUpdate = () => {
    const navigate = useNavigate();
    const [content, setCourse] = useState({});
    const { id } = useParams();

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCourse({ ...content, [name]: value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
         fetch(`http://3.92.221.6:8080/api/data/${id}`, {
             method: 'PUT',
             headers: {
                 'Content-Type': 'application/json',
             },
             body: JSON.stringify(content),
         })
             .then(response => response.json())
             .then(data => {
                 console.log(data);
                 navigate(-1);
             }
            );
    }

     useEffect(() => {
         fetch(`http://3.92.221.6:8080/api/data/${id}`)
             .then(response => response.json())
             .then(data => {
                 console.log(data);
                 setCourse(data)
             });
     }
         , [id]);

    return (
        <Card>
            <Container>
                <h1>Edit Data</h1>
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
                        <Button onClick={handleSubmit} variant="primary">Save</Button>
                        &nbsp;
                        <Button onClick={() => navigate(-1)} variant="primary">Cancel</Button>
                    </Col>
                </Row>
            </Container>
        </Card>
    )
}

export default ContentUpdate;