


import { Container, Typography } from "@mui/material";

const AuthorizedMainPage: React.FC = () => {
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
                Guess Who Authorized Main Page
            </Typography>

        </Container>
    );
}

export default AuthorizedMainPage;