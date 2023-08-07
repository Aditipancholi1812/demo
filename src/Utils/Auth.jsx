import React from "react";
import { Navigate } from "react-router-dom";

const Auth = ({ children }) => {
    const isAuthenticated = localStorage.getItem('password');

    if (isAuthenticated) {
        return (
            children
        );
    }
    else {
        return <Navigate to="/login" />
    }
}

export default Auth;