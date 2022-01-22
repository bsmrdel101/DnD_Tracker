import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

function Dashboard() {
  const dispatch = useDispatch();

  const character = useSelector((store) => store.character);

  useEffect(() => {
    dispatch({
      type: 'FETCH_CHARACTER'
    });
  }, [])

  return (
    <center>
      <h1>Your Characters</h1>
    </center>
  );
}

export default Dashboard;
