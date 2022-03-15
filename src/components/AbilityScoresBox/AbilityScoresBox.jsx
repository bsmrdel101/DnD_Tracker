import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import './AbilityScoresBox.css';

function AbilityScoresBox({ character }) {
    const getModifier = (type) => {
        let baseAbility = getAbilityScore(type);
        let calculatedModifier = Math.floor((baseAbility - 10) / 2);
        return calculatedModifier;
    }

    const getAbilityScore = (type) => {
        switch (type) {
            case 'str':
                return character.str;
            case 'dex':
                return character.dex;
            case 'con':
                return character.con;
            case 'wis':
                return character.wis;
            case 'int':
                return character.int;
            case 'char':
                return character.char;
            default:
                break;
        }
    }

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
                            <Typography gutterBottom variant="p" component="div" className='stat-mod'>
                                {getModifier('str')} 
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
                            <Typography gutterBottom variant="p" component="div" className='stat-mod'>
                                {getModifier('dex')} 
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
                            <Typography gutterBottom variant="p" component="div" className='stat-mod'>
                                {getModifier('con')} 
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
                            <Typography gutterBottom variant="p" component="div" className='stat-mod'>
                                {getModifier('int')} 
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
                            <Typography gutterBottom variant="p" component="div" className='stat-mod'>
                                {getModifier('wis')} 
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
                            <Typography gutterBottom variant="p" component="div" className='stat-mod'>
                                {getModifier('char')} 
                            </Typography>
                        </div>                                    
                    </div>                                            
                </section>
            </CardContent>
        </Card>
    );
}

export default AbilityScoresBox;