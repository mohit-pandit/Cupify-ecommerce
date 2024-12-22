import React from 'react'
import { Navigate } from 'react-router-dom'

export const PrivateRoute = ({ element: component, ...rest }) => {
    const isAuthenticated = !sessionStorage["Auth_token"]
    return (
        isAuthenticated ? <component {...rest} /> : <Navigate to="/login" />
    )
}
