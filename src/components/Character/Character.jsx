import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Character() {
    const dispatch = useDispatch();
    const history = useHistory();

    const selectedCharacter = useSelector((store) => store.selectedCharacterReducer);

    return (
        <>  
            {selectedCharacter.length === 0 &&
                <button onClick={() => history.push('/dashboard')}>Back</button>
            }
            {selectedCharacter.map((character) => {
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
