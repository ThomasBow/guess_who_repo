


import { AppBar, Toolbar, Typography, Grid2 as Grid, Container } from '@mui/material';
import { GameCard } from '../../components/GameCard';
import DeleteDataButton from '../../components/DeleteDataButton';

export const GamesPage = () => {


    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Guess Who
                    </Typography>
                    <DeleteDataButton />
                </Toolbar>
            </AppBar>

            <Container sx={{ py: 4 }}>
                <Grid container spacing={3}>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((gameNumber) => (
                        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={gameNumber}>
                            <GameCard gameNumber={gameNumber} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    );
};