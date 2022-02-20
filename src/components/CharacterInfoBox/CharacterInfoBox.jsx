import React from 'react';
import { useDispatch } from 'react-redux';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { IconButton } from '@mui/material';

function CharacterInfoBox({ character }) {
    const dispatch = useDispatch();

    const giveInspiration = () => {
        dispatch({
            type: 'GIVE_INSPIRATION'
        });
    }
    
    const revokeInspiration = () => {
        dispatch({
            type: 'REVOKE_INSPIRATION'
        });
    }

    return (
        <Card sx={{ backgroundColor: 'var(--card)', borderRadius: 4 }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    <Avatar sx={{ width: 56, height: 56 }} alt="Avatar" src="orc_pic.png" className="avatar" />
                    {character.name}
                    <Typography sx={{ fontSize: 18 }} variant="p" component="div">
                        Level {character.level}
                    </Typography>
                </Typography>
                <Typography variant="p" component="div">
                    <span className='bold-text'>Race:</span> {character.race}
                </Typography>
                <Typography variant="p" component="div">
                    <span className='bold-text'>Class:</span> {character.class}
                </Typography>
                <Typography variant="p" component="div">
                    <span className='bold-text'>Background:</span> {character.background}
                </Typography>
                <Typography sx={{ paddingTop: 1 }} variant="p" component="div">
                    <span className='bold-text'>AC:</span> {character.ac}
                </Typography>
                <Typography variant="p" component="div">
                    <span className='bold-text'>Proficiency Bonus:</span> +{character.prof_bonus}
                </Typography>
                <Typography variant="p" component="div">
                    <span className='bold-text'>Initiative:</span> {character.initiative >= 0 && '+'}{character.initiative}
                </Typography>
                <Typography variant="p" component="div">
                    <span className='bold-text'>Movement:</span> {character.movement}
                </Typography>
                <Typography variant="p" component="div">
                    <span className='bold-text'>Inspiration:</span> 
                    {character.inspiration ?
                        <IconButton onClick={revokeInspiration}>
                            <StarIcon />
                        </IconButton>
                    :
                        <IconButton onClick={giveInspiration}>
                            <StarBorderIcon />
                        </IconButton>
                    }
                </Typography>
            </CardContent>
        </Card>
    );
}

export default CharacterInfoBox;