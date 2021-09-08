import React, { useRef, useState } from 'react'
import { Card, Form, Alert, Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Login() {
    const email = useRef();
    const password = useRef();

    const { login } = useAuth();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();

        if (!(email.current.value && password.current.value)) {
            return setError("Email or password can't be empty.");
        }

        try {
            setLoading(true);
            setError('');
            await login(email.current.value, password.current.value);
            history.push('/');
        } catch {
            return setError("Unable to log in please try again.");
        }

        setLoading(false);
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Log In</h2>
                    {error && <Alert variant='danger'>{error}</Alert>}
                    <Form onSubmit={handleSubmit} >
                        <Form.Group className="mb-3" >
                            <Form.Label>
                                Email
                            </Form.Label>
                            <Form.Control type='email' ref={email} />
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>
                                Password
                            </Form.Label>
                            <Form.Control type='password' ref={password} />
                        </Form.Group>

                        <Button className="w-100 " disabled={loading} type='submit' >
                            Log In
                        </Button>
                    </Form>
                    <div className="w-100 text-center mt-3">
                        <Link to="/forgot-password">Forgot Password?</Link>
                    </div>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Need an account? <Link to="/signup">Sign Up</Link>
            </div>
        </>
    );
}
