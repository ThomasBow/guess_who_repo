


import { Navigate, Route } from "react-router-dom";
import * as routing from "../helpers/routing";

const PrivateRoute = ({ component: Component, ...rest }: any) => {

    return (
        <Route
            {...rest}
            render={(props: any) =>
                routing.isAuthenticated() ? (<Component {...props} />) : (<Navigate to="/login" />)
            }
        />
    );
}

export default PrivateRoute;