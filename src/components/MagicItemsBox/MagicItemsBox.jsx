import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import './MagicItemsBox.css';

function MagicItemsBox() {

    return (
        <Card sx={{ backgroundColor: 'var(--card)', borderRadius: 4, marginTop: 2 }}>
            <CardContent>
                <Typography gutterBottom variant="h4" component="div" textAlign="center">
                    Magic Items
                </Typography>

            </CardContent>
        </Card>
    );
}

export default MagicItemsBox;