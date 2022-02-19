import React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import { Box } from '@mui/system';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import ShieldIcon from '@mui/icons-material/Shield';

import './HealthManagement.css';

function HealthManagement({ healthReducer }) {
    const dispatch = useDispatch();

    const [damage, setDamage] = useState('');
    const [heal, setHeal] = useState('');
    const [tempHealth, setTempHealth] = useState('');

    return (
        <Card sx={{ backgroundColor: '#f3c6c6', marginTop: 2, borderRadius: 4 }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: 30 }}>
                    <FavoriteIcon id='heart-icon' /> {healthReducer.max_health} / {healthReducer.health} 
                    <br />
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
    );
}

export default HealthManagement;