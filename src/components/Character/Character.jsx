import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Avatar } from '@mui/material';
import { useEffect } from 'react';

function Character() {
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
                    <div key={character.id}>
                        <Card sx={{ maxWidth: 345, backgroundColor: '#e7e7e7' }} onClick={() => handleSelection(character)}>
                            <CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        <Avatar sx={{ width: 56, height: 56 }} alt="Avatar" src="orc_pic.png" className="avatar" />
                                        {character.name}
                                    </Typography>
                                    <Typography variant="p" component="div">
                                        {character.race} {character.class} {character.level}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                );
            })}
        </>
    );
}

export default Character;
