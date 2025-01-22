


import { useContext, useEffect } from "react";
import { Navigate, useSearchParams } from 'react-router-dom';
import { Box, Typography, CircularProgress } from "@mui/material";
import * as api from "../helpers/api";
import { UserContext } from "../App";



function UserAuthenticationPage() {

    const { setUser } = useContext(UserContext);

    const [searchParams] = useSearchParams();
    const authCode = searchParams.get('code');

    if (authCode === null) {
        return (<Navigate to='/' />);
    }

    useEffect(() => {
        api.GetUserOrCreateNew(authCode).then((user) => {
            setUser(user);
            window.location.href = '/';
        });
    });


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