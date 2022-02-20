import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Grid } from '@mui/material';

import './EquipmentPage.css'
import WeaponsBox from '../WeaponsBox/WeaponsBox';
import MagicItemsBox from '../MagicItemsBox/MagicItemsBox';
import ArmorBox from '../ArmorBox/ArmorBox';

function EquipmentPage() {
    const dispatch = useDispatch();

    const selectedCharacter = useSelector((store) => store.selectedCharacterReducer);

    useEffect(() => {
        dispatch({
            type: 'GET_SELECTED_CHARACTER'
        });
    }, [])
    
    return (
        <>  
            {selectedCharacter.map((character) => {
                return (
                    <div key={character.id} className='container'>
                        <Grid container spacing={4}>
                            <Grid item xs={12} sm={7}>
                                <WeaponsBox />
                                <MagicItemsBox />
                            </Grid>
                            <Grid item sm={5} xs={12}>
                                <ArmorBox />
                            </Grid>
                        </Grid>
                    </div>
                );
            })}
        </>
    );
}

export default EquipmentPage;
