import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';
import { useEffect } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { TextField } from '@mui/material';
import { Box } from '@mui/system';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

import './Character.css'

function Character() {
    const dispatch = useDispatch();

    const selectedCharacter = useSelector((store) => store.selectedCharacterReducer);
    const healthReducer = useSelector((store) => store.healthReducer);

    useEffect(() => {
        dispatch({
            type: 'GET_SELECTED_CHARACTER'
        });
        dispatch({
            type: 'GET_HEALTH'
        });
    }, [])

    return (
        <>  
            {selectedCharacter.map((character) => {
                return (
                    <div key={character.id} className='container'>
                        {/* Basic character info */}
                        <Card sx={{ maxWidth: 345, backgroundColor: '#e7e7e7' }}>
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
                                    <span className='bold-text'>Proficiency Bonus:</span> {character.prof_bonus}
                                </Typography>
                                <Typography variant="p" component="div">
                                    <span className='bold-text'>Initiative:</span> {character.initiative}
                                </Typography>
                                <Typography variant="p" component="div">
                                    <span className='bold-text'>Movement:</span> {character.movement}
                                </Typography>
                            </CardContent>
                        </Card>
                        {/* Health management */}
                        <Card sx={{ maxWidth: 345, backgroundColor: '#e7e7e7', marginTop: 2 }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: 30 }}>
                                    <FavoriteIcon id='heart-icon' /> {healthReducer}     
                                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                        <LocalHospitalIcon sx={{ color: '#b0bec5', mr: 1, my: 0.5 }} />
                                        <TextField 
                                            label="Deal Damage" 
                                            variant="outlined"
                                            type="number"
                                        />
                                    </Box>  
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>
                );
            })}
        </>
    );
}

export default Character;
