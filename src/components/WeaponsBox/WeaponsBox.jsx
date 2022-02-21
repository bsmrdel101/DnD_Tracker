import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import './WeaponsBox.css';
import AddWeaponModal from './AddWeaponModal';

function WeaponsBox() {
    const dispatch = useDispatch();
    const weapons = useSelector(store => store.weaponsReducer);
    const selectedWeapon = useSelector(store => store.selectedWeapon);

    const [showWeaponDetails, setShowWeaponDetails] = useState(false);

    useEffect(() => {
        dispatch({
            type: 'FETCH_WEAPONS'
        });
    }, [])

    const handleDeleteWeapon = (weapon) => {
        dispatch({ 
            type: 'DELETE_WEAPON', 
            payload: weapon
        });
        setShowWeaponDetails(false);
    }

    return (
        <Card sx={{ backgroundColor: 'var(--card)', borderRadius: 4 }}>
            <CardContent>
                <Typography gutterBottom variant="h4" component="div" textAlign="center">
                    Weapons
                </Typography>

                <section className='table-container'>
                    {showWeaponDetails ?
                        <>
                            <p className='back-text' onClick={() => setShowWeaponDetails(false)}>&#10094; Back</p>
                            <div className='weapon-details-container'>
                                {selectedWeapon.map((weapon) => {
                                    return (
                                        <>
                                            <div className='weapon-details-btn-container'>
                                                <h3>{weapon.name}</h3>
                                                <IconButton sx={{ marginLeft: 1 }}>
                                                    <EditIcon />
                                                </IconButton>
                                                <IconButton onClick={() => handleDeleteWeapon(weapon.id)}>
                                                    <DeleteIcon />
                                                </IconButton>
                                            </div>
                                            <div className='weapons-details'>
                                                <div className='weapons-details-col'>
                                                    <Typography><span className='bold-text'>Type: </span>{weapon.type}</Typography>
                                                    <Typography><span className='bold-text'>Range: </span>{weapon.range}</Typography>
                                                    <Typography><span className='bold-text'>Damage: </span>{weapon.damage}</Typography>
                                                    <Typography><span className='bold-text'>Handedness: </span>{weapon.handedness}</Typography>
                                                    <Typography><span className='bold-text'>Damage Type: </span>{weapon.damage_type}</Typography>
                                                </div>
                                                <div className='weapons-details-col'>
                                                    <Typography><span className='bold-text'>Magical Modifier: </span>{weapon.magical_modifier}</Typography>
                                                    <Typography><span className='bold-text'>Proficiency: </span>{weapon.proficiency}</Typography>
                                                    <Typography><span className='bold-text'>Property: </span>{weapon.property}</Typography>
                                                    <Typography><span className='bold-text'>To Hit: </span>{weapon.to_hit}</Typography>
                                                    <Typography><span className='bold-text'>Weight: </span>{weapon.weight}</Typography>
                                                </div>
                                                <div className='weapons-details-col'>
                                                    <Typography><span className='bold-text'>Quantity: </span>{weapon.quantity}</Typography>
                                                    <Typography><span className='bold-text'>Price: </span>{weapon.price} {weapon.currency}</Typography>
                                                </div>
                                            </div>
                                            <br/>
                                            <Typography><span className='bold-text'>Description:</span></Typography>
                                            <Typography>{weapon.description}</Typography>
                                        </>
                                    );
                                })}
                            </div>
                        </>
                    :
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>Weapon</th>
                                    <th>To Hit</th>
                                    <th>Damage</th>
                                    <th>Range</th>
                                    <th>Damage Type</th>
                                    <th>Quantity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {weapons.map((weapon) => {
                                    return (
                                        <tr key={weapon.id} onClick={() => {
                                            dispatch({ type: 'FETCH_SELECTED_WEAPON', payload: weapon.id });
                                            setShowWeaponDetails(true);
                                        }}>
                                            <td>{weapon.name}</td>
                                            <td>+{weapon.to_hit}</td>
                                            <td>{weapon.damage}</td>
                                            <td>{weapon.range} ft</td>
                                            <td>{weapon.damage_type}</td>
                                            <td>{weapon.quantity}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>}
                </section>
                {/* Add weapon modal */}
                <AddWeaponModal />
            </CardContent>
        </Card>
    );
}

export default WeaponsBox;