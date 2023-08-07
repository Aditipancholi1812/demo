import React from "react";
import { Navigate } from "react-router-dom";

const Protected= ( children ) => {

    const isAuthenticated = localStorage.getItem('password');
    console.log(children,"children")
    if (isAuthenticated) 
    {
        return (children);
    }
    else 
    {
        return <Navigate to="/login" />
    }
};
export default Protected;