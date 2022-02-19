import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import './AbilityTrackers.css';

function AbilityTrackers({ character }) {

    return (
        <Card sx={{ backgroundColor: '#f3c6c6', borderRadius: 4, marginTop: 2 }}>
            <CardContent>
                <Typography gutterBottom variant="h4" component="div" textAlign="center">
                    Ability Trackers
                </Typography>

            </CardContent>
        </Card>
    );
}

export default AbilityTrackers;