


import { useEffect } from "react";
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Box, Typography, CircularProgress } from "@mui/material";
import * as api from "../../helpers/api";
import React from "react";
import { useAuth } from "../../components/AuthProvider";
import { useGlobalContext } from "../../components/GlobalContextProvider";



function UserAuthenticationPage() {

    const { setUser } = useGlobalContext();
    const { grantAuth } = useAuth();
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
        api.GetUserOrCreateNew(authCode).then((user) => {
            grantAuth();
            setUser(user);

            setTimeout(() => {
                navigate('/games');
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