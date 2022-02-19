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
import AbilityScores from '../AbilityScoresBox/AbilityScoresBox';

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
                                {/* Ability scores */}
                                <AbilityScores character={character} />
                                {/* Ability trackers */}
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
