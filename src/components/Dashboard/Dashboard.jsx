import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useHistory } from 'react-router-dom';

import './Dashboard.css';

function Dashboard() {
  const dispatch = useDispatch();
  const history = useHistory();

  const characters = useSelector((store) => store.character);

  useEffect(() => {
    dispatch({
      type: 'FETCH_CHARACTER'
    });
  }, [])

  const handleSelection = (character) => {
    dispatch({
      type: 'POST_SELECTED_CHARACTER',
      payload: character.id
    });
    setTimeout(() => {history.push('/character')}, 100);
  }

  return (
    <center>
      <h1 className='dashboard-title'>Your Characters</h1>
      {characters.map((character) => {
        return (
          <div className="character-selection-container" key={character.id}>
            <Card sx={{ maxWidth: 345, backgroundColor: 'var(--card)' }} onClick={() => handleSelection(character)}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
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
    </center>
  );
}

export default Dashboard;
