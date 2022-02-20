import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import './WeaponsBox.css';
import AddWeaponModal from './AddWeaponModal';

function WeaponsBox() {
    const dispatch = useDispatch();
    const weapons = useSelector(store => store.weaponsReducer);

    useEffect(() => {
        dispatch({
            type: 'FETCH_WEAPONS'
        });
    }, [])

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
                            {weapons.map((weapon) => {
                                return (
                                    <tr key={weapon.id}>
                                        <td>{weapon.name}</td>
                                        <td>{weapon.to_hit}</td>
                                        <td>{weapon.damage}</td>
                                        <td>{weapon.range}</td>
                                        <td>{weapon.property}</td>
                                    </tr>
                                );
                            })}
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