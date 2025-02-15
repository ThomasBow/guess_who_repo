


import { Button, Container, Typography } from "@mui/material";
import { redirectToSpotifyOAuth } from "../../helpers/routing";
import { useAuth } from "../../components/AuthProvider";
import { useNavigate } from "react-router-dom";

const UnAuthorizedMainPage: React.FC = () => {

    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();

    if (isAuthenticated) navigate('/games');

    return (
        <Container
            maxWidth="sm"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
            }}
        >
            <Typography variant="h3" gutterBottom>
                Guess Who
            </Typography>
            <Button variant="contained" color="primary"
                onClick={redirectToSpotifyOAuth}
            >
                Link Spotify To Start
            </Button>
        </Container>
    );
}

export default UnAuthorizedMainPage;