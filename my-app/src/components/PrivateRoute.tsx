


import React from "react";
import { Navigate } from "react-router-dom";
import * as routing from "../helpers/routing";

interface PrivateRouteProps {
    element: React.ReactElement;
    unauthorizedPath?: string;
}

const PrivateRoute = ({ element, unauthorizedPath }: PrivateRouteProps) => {
    const isAuthenticated = routing.isAuthenticated();
    const unauthorizedPathFixed = unauthorizedPath || "/"; // Default to home page
    return isAuthenticated ? element : <Navigate to={unauthorizedPathFixed} />;
};

export default PrivateRoute;
