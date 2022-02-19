import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Grid } from '@mui/material';

import './Character.css'
import HealthManagement from '../HealthManagement/HealthManagement';
import CharacterInfoBox from '../CharacterInfoBox/CharacterInfoBox';
import SkillsTable from '../SkillsTable/SkillsTable';
import AbilityScores from '../AbilityScoresBox/AbilityScoresBox';
import AbilityTrackers from '../AbilityTrackers/AbilityTrackers';
import TraitsBox from '../TraitsBox/TraitsBox';

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
                                <SkillsTable skills={skills} character={character} />
                            </Grid>
                            <Grid item sm={4} xs={12}>
                                {/* Ability scores */}
                                <AbilityScores character={character} />

                                {/* Traits */}
                                <TraitsBox character={character} />
                            </Grid>
                        </Grid>
                    </div>
                );
            })}
        </>
    );
}

export default Character;
