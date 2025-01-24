


import { Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export interface GameCardProps {
    gameNumber: number;
}

const GameCardContainer = styled(Card)(({ theme }) => ({
    minHeight: 120,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'transform 0.2s',
    '&:hover': {
        transform: 'scale(1.05)',
        cursor: 'pointer'
    },
}));

export const GameCard = ({ gameNumber }: GameCardProps) => {
    return (
        <GameCardContainer variant="outlined">
            <CardContent>
                <Typography variant="h5" align="center">
                    Game {gameNumber}
                </Typography>
            </CardContent>
        </GameCardContainer>
    );
};