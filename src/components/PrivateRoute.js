import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function PrivateRoute({ componenet: Componenet, ...rest }) {

    const { currentUser } = useAuth();

    return (
        <Route
            {...rest}
            render={props => {
                return currentUser ? <Componenet {...props} /> : <Redirect to='/login' />
            }}
        >
        </Route>
    )
}
