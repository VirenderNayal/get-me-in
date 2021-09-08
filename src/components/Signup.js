import React, { useRef, useState } from 'react'
import { Card, Form, Alert, Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'

export default function Signup() {

    const email = useRef();
    const password = useRef();
    const repassword = useRef();

    const { signup } = useAuth();

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();

        if (password.current.value !== repassword.current.value) {
            return setError('Passwords do not match.');
        }

        try {
            setError('');
            setLoading(true);
            await signup(email.current.value, password.current.value);
            history.push('/');
        } catch {
            setError("Some error occured please try again");
        }

        setLoading(false);
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Sign Up</h2>
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

                        <Form.Group className="mb-3" >
                            <Form.Label>
                                Re-Enter Password
                            </Form.Label>
                            <Form.Control type='password' ref={repassword} />
                        </Form.Group>

                        <Button className="w-100 " disabled={loading} type='submit' >
                            Sign Up
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Already an Account? <Link to="/login">Log In</Link>
            </div>
        </>
        // <div className='base'>
        //     {error && <p>{error}</p> }
        //     <form onSubmit={handleSubmit}>
        //         <h3>Getmein</h3>
        //         <input type='email' placeholder='Email' ref={email} />
        //         <input type='password' placeholder='Password' ref={password} />
        //         <input type='password' placeholder='Re-Enter Password' ref={repassword} />
        //         <p>
        //             Already have an Account? <Link className='cusLink' to='/login' > Log In </Link>
        //         </p>
        //         <button disabled={loading} type='submit' >Sign Up</button>
        //     </form>
        // </div>
    );
}
