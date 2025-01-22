


import { useContext, useEffect } from "react";
import { Navigate, useNavigate, useSearchParams } from 'react-router-dom';
import { Box, Typography, CircularProgress } from "@mui/material";
import * as api from "../../helpers/api";
import { UserContext } from "../../App";
import React from "react";



function UserAuthenticationPage() {

    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const [searchParams] = useSearchParams();
    const authCode = searchParams.get('code');

    const [callingApi, setCallingApi] = React.useState(false);

    if (authCode === null) {
        navigate('/');
        return;
    }

    useEffect(() => {
        if (callingApi === true) return;

        setCallingApi(true);
        console.log("Calling API");
        api.GetUserOrCreateNew(authCode).then((user) => {
            setUser(user);
            console.log("User set:\n", user);

            setTimeout(() => {
                navigate('/authorized/main-page');
            }, 1000);
        });
    }, []);



    return (
        <Box
            sx={{ flexGrow: 1 }}
        >
            <Typography
                variant="h1"
                component="h1"
                gutterBottom
            >
                GUESS WHO
            </Typography>
            <CircularProgress />
        </Box>
    );
}

export default UserAuthenticationPage;