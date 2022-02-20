import React from 'react';
import { useState } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import './WeaponsBox.css';
import AddWeaponModal from './AddWeaponModal';

function WeaponsBox() {
    return (
        <Card sx={{ backgroundColor: 'var(--card)', borderRadius: 4 }}>
            <CardContent>
                <Typography gutterBottom variant="h4" component="div" textAlign="center">
                    Weapons
                </Typography>

                <section className='table-container'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Weapon</th>
                                <th>To Hit</th>
                                <th>Damage</th>
                                <th>Range</th>
                                <th>Property</th>
                            </tr>
                        </thead>
                        <tbody>

                        </tbody>
                    </table>
                </section>
                {/* Add weapon modal */}
                <AddWeaponModal />
            </CardContent>
        </Card>
    );
}

export default WeaponsBox;