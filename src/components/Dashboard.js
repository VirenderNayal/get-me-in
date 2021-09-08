import React, { useState } from 'react'
import { Card, Button, Alert } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Dashboard() {
    const [error, setError] = useState('');

    const { logout, currentUser } = useAuth();

    const history = useHistory();

    async function handleLogout() {
        setError('');

        try {
            await logout();
            history.push('/login')
        } catch {
            setError("Unable to logout now.")
        }
    }

    return (
        <>
            <Card>
                {error && <Alert variant='danger'>{error}</Alert>}
                <h2 className='m-2' >Dashboard</h2>
                <div className="m-3">
                    Hello, {currentUser.email} !
                </div>
                <Button className='m-3' onClick={handleLogout} variant='danger'>
                    Logout
                </Button>
            </Card>
        </>
    );
}
