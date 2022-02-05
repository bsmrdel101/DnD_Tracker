import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Character() {
    const dispatch = useDispatch();

    const selectedCharacter = useSelector((store) => store.selectedCharacterReducer);

    return (
        <>  {selectedCharacter.map((character) => {
                return (
                    <div key={character.id}>
                        <p>{character.name}</p>
                        <p>{character.class}</p>
                    </div>
                );
            })}
        </>
    );
}

export default Character;
