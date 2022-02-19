import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';
import { Grid } from '@mui/material';

import './Character.css'
import HealthManagement from '../HealthManagement/HealthManagement';
import CharacterInfoBox from '../CharacterInfoBox/CharacterInfoBox';
import SkillsTable from '../SkillsTable/SkillsTable';

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
                                {/* Skills table */}
                                <SkillsTable skills={skills} selectedCharacter={selectedCharacter} />
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
