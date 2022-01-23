import React from 'react';

function CharacterSelection({character}) {
    return (
        <div className="character-selection-container">
            <p>{character.name}</p>
        </div>
    );
}

export default CharacterSelection;
