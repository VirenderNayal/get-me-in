import React, { useRef, useState } from 'react';
import { Card, Form, Alert, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function ForgotPassword() {
    const email = useRef();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const { resetPassword } = useAuth()

    async function handleSubmit(e) {
        e.preventDefault();

        if(!email.current.value){
            return setError("Email can not be empty.");
        }

        try {
            setError('');
            setMessage('');
            setLoading(true);
            await resetPassword(email.current.value);
            setMessage("Check your email for further instructions.");
        } catch {
            return setError("Failed to reset password.");
        }

        setLoading(false);
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Forgot Password</h2>
                    {error && <Alert variant='danger'>{error}</Alert>}
                    {message && <Alert>{message}</Alert>}
                    <Form onSubmit={handleSubmit} >
                        <Form.Group className="mb-3" >
                            <Form.Control placeholder='Email' type='email' ref={email} />
                        </Form.Group>
                        <Button className="w-100 " disabled={loading} type='submit' >
                            Reset Password
                        </Button>
                    </Form>
                </Card.Body>
                <div className="w-100 text-center m-2">
                    <Link to="/login">Log In</Link>
                </div>
            </Card>
        </>
    );
}