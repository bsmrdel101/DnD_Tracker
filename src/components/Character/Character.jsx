import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

function Character() {
    const dispatch = useDispatch();

    const character = useSelector((store) => store.character);

    return (
        <>  
            <p>{character.name}</p>
            <p>{character.class}</p>
        </>
    );
}

export default Character;
