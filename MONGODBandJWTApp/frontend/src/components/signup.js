import React from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const SignUpPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const onLoginClicked = async () => {
        navigate('/login');
    };

    const onSignUpClicked = async () => {
        try {
            const response = await axios.post(
                `${process.env.REACT_APP_API_URL}/api/signup`,
                {
                    name,
                    email,
                    password,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            console.log(response.data);
            navigate('/login');
        } catch (error) {
            setError(error.response.data.message);
            console.log(error);
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h1>Sign Up</h1>

                    {error && <Alert variant="danger">{error}</Alert>}

                    <Form.Group controlId="formBasicName">
                        <Form.Label>Enter Your Name:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Full name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Enter Your Email address:</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Enter A New Password:</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Confirm Your New Password:</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </Form.Group>

                    <hr />

                    <Button
                        variant="primary"
                        onClick={onSignUpClicked}
                        disabled={password !== confirmPassword || !email || !password} id="button"
                    >
                        Sign Up
                    </Button>
                    &nbsp;

                    <Button variant="primary" onClick={onLoginClicked} id="button">
                        Login
                    </Button>
                </div>
            </div>
        </div>
    );
};