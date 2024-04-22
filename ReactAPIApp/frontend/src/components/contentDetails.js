import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

const ContentDetails = () => {
    const navigate = useNavigate();
    const [content, setContent] = useState({});
    const { id } = useParams();


    const handleDelete = (event) => {
        event.preventDefault();
         fetch(`http://3.92.221.6:8080/api/data/${id}`, {
             method: 'DELETE',
             headers: {
                 'Content-Type': 'application/json',
             },
         })
             .then(data => {
                 navigate('/data');
             }
             );
    }

     useEffect(() => {

         fetch(`http://3.92.221.6:8080/api/data/${id}`, { method: 'GET' })
             .then(response => response.json())
             .then(data => {
                 console.log(data);
                 setContent(data)
             }
             );
     }, [id]);

    return (
        <Card>

            <Container>
                <h1>{content.title}</h1>
                <Button onClick={() => navigate(-1)} variant="primary">Back</Button>
                &nbsp;
                <LinkContainer to={`/data/update/${id}`}>
                    <Button variant="primary">Edit Data</Button>
                </LinkContainer>
                &nbsp;
                <Button onClick={handleDelete} variant="primary">Delete Data</Button>
                <Row>
                    <Col>

                        <Card className="my-3 p-3 rounded">
                            <Card.Title as="div">
                                <strong>{content.title}</strong>
                            </Card.Title>
                            <Card.Text as="div">
                                <div className="my-3">
                                    {content.author}
                                </div>
                            </Card.Text>
                            <Card.Text as="p">
                                {content.desc}
                            </Card.Text>
                            <Card.Text as="p">
                                {content.yearmade}
                            </Card.Text>
                            <Card.Text as="p">
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