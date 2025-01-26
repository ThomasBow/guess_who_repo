


import { AppBar, Toolbar, Typography, Grid2 as Grid, Container } from '@mui/material';
import { GameCard } from '../../components/GameCard';
import DeleteDataButton from '../../components/DeleteDataButton';
import { useEffect, useState } from 'react';
import { Game } from '../../types/model';
import * as api from '../../helpers/api';

export const GamesPage = () => {

    const [games, setGames] = useState<Game[]>([]);

    useEffect(() => {
        api.GetGames()
            .then((games) => {
                setGames(games);
                console.log('Games:', games);
            });
    }, []);

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
                    {games.map((gameInfo, i) => (
                        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={i}>
                            <GameCard gameInfo={gameInfo} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    );
};