import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function Dashboard() {
  const dispatch = useDispatch();

  const characters = useSelector((store) => store.character);

  useEffect(() => {
    dispatch({
      type: 'FETCH_CHARACTER'
    });
  }, [])

  const handleSelection = (character) => {
    console.log(character);
  }

  return (
    <center>
      <h1>Your Characters</h1>
      {characters.map((character, i) => {
        return (
          <div className="character-selection-container"  key={i}>
            <Card sx={{ maxWidth: 345, backgroundColor: '#e7e7e7' }} onClick={() => handleSelection(character)}>
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
