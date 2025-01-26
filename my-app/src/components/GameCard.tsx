


import { Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Game } from '../types/model';
import { useNavigate } from 'react-router-dom';

export interface GameCardProps {
    gameInfo: Game;
}

const GameCardContainer = styled(Card)(({ theme }) => ({
    minHeight: 120,
    display: 'flex',
    alignItems: 'center',
    minWidth: 200,
    justifyContent: 'center',
    transition: 'transform 0.2s',
    backgroundColor: "rgb(134, 205, 130)",
    color: "rgb(79, 93, 47)",
    '&:hover': {
        transform: 'scale(1.05)',
        cursor: 'pointer'
    },
}));

export const GameCard = ({ gameInfo }: GameCardProps) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(gameInfo.url);
    }

    return (
        <GameCardContainer variant="outlined" onClick={handleClick}>
            <CardContent>
                <Typography variant="h5" align="center">
                    {gameInfo.displayName}
                </Typography>
            </CardContent>
        </GameCardContainer>
    );
};