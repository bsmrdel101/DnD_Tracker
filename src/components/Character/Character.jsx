import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import AdjustIcon from '@mui/icons-material/Adjust';

import './Character.css'
import HealthManagement from '../HealthManagement/HealthManagement';
import CharacterInfoBox from '../CharacterInfoBox/CharacterInfoBox';

function Character() {
    const dispatch = useDispatch();

    const selectedCharacter = useSelector((store) => store.selectedCharacterReducer);
    const healthReducer = useSelector((store) => store.healthReducer);
    const skills = useSelector((store) => store.skillsReducer);

    useEffect(() => {
        dispatch({
            type: 'GET_SELECTED_CHARACTER'
        });
        dispatch({
            type: 'GET_HEALTH'
        });
        dispatch({
            type: 'FETCH_SKILLS'
        });
    }, [])

    const getModifier = (type, prof) => {
        let baseAbility = getAbilityScore(type);
        let calculatedModifier = Math.floor((baseAbility - 10) / 2);

        if (prof) {
            calculatedModifier += selectedCharacter[0].prof_bonus;
        }
        return calculatedModifier;
    }

    const getAbilityScore = (type) => {
        switch (type) {
            case 'str':
                return selectedCharacter[0].str;
            case 'dex':
                return selectedCharacter[0].dex;
            case 'con':
                return selectedCharacter[0].con;
            case 'wis':
                return selectedCharacter[0].wis;
            case 'int':
                return selectedCharacter[0].int;
            case 'char':
                return selectedCharacter[0].char;
            default:
                break;
        }
    }
    
    return (
        <>  
            {selectedCharacter.map((character) => {
                return (
                    <div key={character.id} className='container'>
                        <Grid container spacing={4}>
                            <Grid item xs={12} sm={3}>
                                {/* Basic character info */}
                                <CharacterInfoBox character={character} />
                                {/* Health management */}
                                <HealthManagement healthReducer={healthReducer} />
                            </Grid>
                            <Grid item sm={4.8} xs={12}>
                                <Card sx={{ backgroundColor: '#f3c6c6', borderRadius: 4 }}>
                                    <CardContent>
                                        <Typography gutterBottom variant="h4" component="div" textAlign="center">
                                            Skills
                                        </Typography>
                                        <section className='skills-table'>
                                            <table className='table'>
                                                <thead>
                                                    <tr>
                                                        <th>Skill</th>
                                                        <th>Modifier</th>
                                                        <th>Prof</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {skills.map((skill, i) => {
                                                        return (
                                                            <tr key={i}>
                                                                <td>
                                                                    <Typography gutterBottom variant="p" component="div">
                                                                        {skill.name} <span className='skill-type'>({skill.type})</span>
                                                                    </Typography>
                                                                </td>
                                                                <td>
                                                                    {getModifier(skill.type, skill.prof) >= 0 && '+'}
                                                                    {getModifier(skill.type, skill.prof)}
                                                                </td>
                                                                <td>
                                                                    {skill.prof &&
                                                                        <Typography><AdjustIcon sx={{ paddingTop:0.8, fontSize: 14 }} /></Typography>
                                                                    }
                                                                </td>                                      
                                                            </tr>
                                                        );
                                                    })}
                                                </tbody>
                                            </table>
                                        </section>                                        
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item sm={4} xs={12}>
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
                                <Card sx={{ backgroundColor: '#f3c6c6', borderRadius: 4, marginTop: 2 }}>
                                    <CardContent>
                                        <Typography gutterBottom variant="h4" component="div" textAlign="center">
                                            Ability Trackers
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
