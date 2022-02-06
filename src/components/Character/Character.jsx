import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';
import { useEffect, useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import { Box } from '@mui/system';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import ShieldIcon from '@mui/icons-material/Shield';
import { Grid } from '@mui/material';

import './Character.css'

function Character() {
    const dispatch = useDispatch();

    const selectedCharacter = useSelector((store) => store.selectedCharacterReducer);
    const healthReducer = useSelector((store) => store.healthReducer);

    const [damage, setDamage] = useState('');
    const [heal, setHeal] = useState('');
    const [tempHealth, setTempHealth] = useState('');

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
                        <Grid container spacing={4}>
                            <Grid item xs={12} sm={3}>
                                {/* Basic character info */}
                                <Card sx={{ backgroundColor: '#f3c6c6' }}>
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
                                    </CardContent>
                                </Card>
                                {/* Health management */}
                                <Card sx={{ backgroundColor: '#f3c6c6', marginTop: 2 }}>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: 30 }}>
                                            <FavoriteIcon id='heart-icon' /> {healthReducer.maxHealth} / {healthReducer.health} 
                                            <FavoriteIcon id='blue-heart-icon' /> {healthReducer.temp_health}    
                                            {/* Heal */}
                                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                                <button 
                                                    id='add-hp-btn'
                                                    onClick={() => {
                                                        dispatch({type:'HEAL', payload: heal});
                                                        setHeal('');
                                                    }}>
                                                        <LocalHospitalIcon 
                                                            id='add-hp-icon'
                                                            sx={{ color: '#119711', mr: 1, my: 0.5 }} 
                                                        />
                                                </button>
                                                <input 
                                                    id='add-hp'
                                                    placeholder="Heal"
                                                    type="number"
                                                    value={heal}
                                                    onChange={(event) => setHeal(event.target.value)}
                                                />
                                            </Box>  
                                            {/* Damage */}
                                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                                <button 
                                                    id='dmg-hp-btn' 
                                                    onClick={() => {
                                                        dispatch({type:'DAMAGE', payload: damage});
                                                        setDamage('');
                                                    }}>
                                                        <IndeterminateCheckBoxIcon 
                                                            id='dmg-hp-icon' 
                                                            sx={{ color: 'red', mr: 1, my: 0.5 }} 
                                                        />
                                                </button>
                                                <input 
                                                    id='dmg-hp'
                                                    placeholder="Damage" 
                                                    type="number"
                                                    value={damage}
                                                    onChange={(event) => setDamage(event.target.value)}
                                                />
                                            </Box>  
                                            {/* Add temp health */}
                                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                                <button 
                                                    id='temp-hp-btn' 
                                                    onClick={() => {
                                                        dispatch({type:'ADD_TEMP', payload: tempHealth});
                                                        setTempHealth('');
                                                    }}>
                                                        <ShieldIcon 
                                                            id='temp-hp-icon' 
                                                            sx={{ color: '#4343bf', mr: 1, my: 0.5 }} 
                                                        />
                                                </button>
                                                <input 
                                                    id='temp-hp'
                                                    placeholder="Temporary Health" 
                                                    type="number"
                                                    value={tempHealth}
                                                    onChange={(event) => setTempHealth(event.target.value)}
                                                />
                                            </Box>  
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item sm={4} xs={12}>
                                <Card sx={{ backgroundColor: '#f3c6c6' }}>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" textAlign="center">
                                            Ability Scores
                                        </Typography>
                                        <div className='ability-score-container'>
                                            <div className='ability-scores-col-1'>
                                                {/* Str */}
                                                <div className='ability-score-box'>
                                                    <Typography gutterBottom variant="p" component="div">
                                                        Str
                                                    </Typography>
                                                    <Typography gutterBottom variant="h6" component="div">
                                                        10
                                                    </Typography>
                                                </div>
                                                {/* Dex */}
                                                <div className='ability-score-box'>
                                                    <Typography gutterBottom variant="p" component="div">
                                                        Dex
                                                    </Typography>
                                                    <Typography gutterBottom variant="h6" component="div">
                                                        10
                                                    </Typography>
                                                </div>
                                                {/* Con */}
                                                <div className='ability-score-box'>
                                                    <Typography gutterBottom variant="p" component="div">
                                                        Con
                                                    </Typography>
                                                    <Typography gutterBottom variant="h6" component="div">
                                                        10
                                                    </Typography>
                                                </div>
                                            </div>
                                            <div className='ability-scores-col-2'>
                                                {/* Int */}
                                                <div className='ability-score-box'>
                                                    <Typography gutterBottom variant="p" component="div">
                                                        Int
                                                    </Typography>
                                                    <Typography gutterBottom variant="h6" component="div">
                                                        10
                                                    </Typography>
                                                </div>
                                                {/* Wis */}
                                                <div className='ability-score-box'>
                                                    <Typography gutterBottom variant="p" component="div">
                                                        Wis
                                                    </Typography>
                                                    <Typography gutterBottom variant="h6" component="div">
                                                        10
                                                    </Typography>
                                                </div>      
                                                {/* Char */}
                                                <div className='ability-score-box'>
                                                    <Typography gutterBottom variant="p" component="div">
                                                        Char
                                                    </Typography>
                                                    <Typography gutterBottom variant="h6" component="div">
                                                        10
                                                    </Typography>
                                                </div>                                    
                                            </div>                                            
                                        </div>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item sm={4} xs={12}>
                                <Card sx={{ backgroundColor: '#f3c6c6' }}>
                                    <CardContent>
                                        <Typography gutterBottom variant="h4" component="div" textAlign="center">
                                            Stuff
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </div>
                );
            })}
        </>
    );
}

export default Character;
