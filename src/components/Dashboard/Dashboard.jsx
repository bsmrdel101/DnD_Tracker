import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import CharacterSelection from '../CharacterSelection/CharacterSelection';

function Dashboard() {
  const dispatch = useDispatch();

  const characters = useSelector((store) => store.character);

  useEffect(() => {
    dispatch({
      type: 'FETCH_CHARACTER'
    });
  }, [])

  return (
    <center>
      <h1>Your Characters</h1>
      {characters.map((character, i) => {
        return <CharacterSelection key={i} character={character} />;
      })}
    </center>
  );
}

export default Dashboard;
