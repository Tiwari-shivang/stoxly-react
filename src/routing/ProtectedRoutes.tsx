import type React from "react";
import { Navigate } from "react-router";


export const ProtectedRoute: React.FC<{Component: React.FC}> = ({Component}) => {
    const isAuthenticated = localStorage.getItem('authToken') !== null;
    return(
        <>
            {isAuthenticated ? <Component/> : <Navigate to="/login"  />}
        </>
    )
}