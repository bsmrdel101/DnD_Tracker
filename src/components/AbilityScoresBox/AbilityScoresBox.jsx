import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import './AbilityScoresBox.css';

function AbilityScoresBox({ character }) {

    return (
        <Card sx={{ backgroundColor: '#f3c6c6', borderRadius: 4 }}>
            <CardContent>
                <Typography gutterBottom variant="h4" component="div" textAlign="center">
                    Ability Scores
                </Typography>
                <section className='ability-score-container'>
                    <div className='ability-scores-col-1'>
                        {/* Str */}
                        <div className='ability-score-box'>
                            <Typography gutterBottom variant="p" component="div">
                                Str
                            </Typography>
                            <Typography gutterBottom variant="h6" component="div">
                                {character.str}
                            </Typography>
                        </div>
                        {/* Dex */}
                        <div className='ability-score-box'>
                            <Typography gutterBottom variant="p" component="div">
                                Dex
                            </Typography>
                            <Typography gutterBottom variant="h6" component="div">
                                {character.dex}
                            </Typography>
                        </div>
                        {/* Con */}
                        <div className='ability-score-box'>
                            <Typography gutterBottom variant="p" component="div">
                                Con
                            </Typography>
                            <Typography gutterBottom variant="h6" component="div">
                                {character.con}
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
                                {character.int}
                            </Typography>
                        </div>
                        {/* Wis */}
                        <div className='ability-score-box'>
                            <Typography gutterBottom variant="p" component="div">
                                Wis
                            </Typography>
                            <Typography gutterBottom variant="h6" component="div">
                                {character.wis}
                            </Typography>
                        </div>      
                        {/* Char */}
                        <div className='ability-score-box'>
                            <Typography gutterBottom variant="p" component="div">
                                Char
                            </Typography>
                            <Typography gutterBottom variant="h6" component="div">
                                {character.char}
                            </Typography>
                        </div>                                    
                    </div>                                            
                </section>
            </CardContent>
        </Card>
    );
}

export default AbilityScoresBox;