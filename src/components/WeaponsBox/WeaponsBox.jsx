import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

import './WeaponsBox.css';
import AddWeaponModal from './AddWeaponModal';

function WeaponsBox() {
    const dispatch = useDispatch();
    const weapons = useSelector(store => store.weaponsReducer);
    const selectedWeapon = useSelector(store => store.selectedWeapon);

    const [showWeaponDetails, setShowWeaponDetails] = useState(false);
    const [editWeapon, setEditWeapon] = useState(false);

    // Edit input values
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [range, setRange] = useState('');
    const [damage, setDamage] = useState('');
    const [handedness, setHandedness] = useState('');
    const [damageType, setDamageType] = useState('');
    const [magicalMod, setMagicalMod] = useState('');
    const [proficiency, setProficiency] = useState('');
    const [property, setProperty] = useState('');
    const [toHit, setToHit] = useState('');
    const [weight, setWeight] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');
    const [currency, setCurrency] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        dispatch({
            type: 'FETCH_WEAPONS'
        });
    }, [])

    const resetInputs = () => {
        setName(selectedWeapon[0].name);
        setType(selectedWeapon[0].type);
        setRange(selectedWeapon[0].range);
        setDamage(selectedWeapon[0].damage);
        setHandedness(selectedWeapon[0].handedness);
        setDamageType(selectedWeapon[0].damage_type);
        setMagicalMod(selectedWeapon[0].magical_modifier);
        setProficiency(selectedWeapon[0].proficiency);
        setProperty(selectedWeapon[0].property);
        setToHit(selectedWeapon[0].to_hit);
        setWeight(selectedWeapon[0].weight);
        setQuantity(selectedWeapon[0].quantity);
        setPrice(selectedWeapon[0].price);
        setCurrency(selectedWeapon[0].currency);
        setDescription(selectedWeapon[0].description);
    }

    const handleDeleteWeapon = (weapon) => {
        dispatch({ 
            type: 'DELETE_WEAPON', 
            payload: weapon
        });
        setShowWeaponDetails(false);
    }

    const handleCancelWeaponEdit = () => {
        setEditWeapon(false);
        resetInputs();
    }

    const handleEditWeapon = () => {
        setEditWeapon(false);
        resetInputs();
    }

    const handleSelectedWeapon = (weapon) => {
        dispatch({ 
            type: 'FETCH_SELECTED_WEAPON', 
            payload: weapon.id 
        });
        setShowWeaponDetails(true);
        // Initialize edit values
        setName(weapon.name);
        setType(weapon.type);
        setRange(weapon.range);
        setDamage(weapon.damage);
        setHandedness(weapon.handedness);
        setDamageType(weapon.damage_type);
        setMagicalMod(weapon.magical_modifier);
        setProficiency(weapon.proficiency);
        setProperty(weapon.property);
        setToHit(weapon.to_hit);
        setWeight(weapon.weight);
        setQuantity(weapon.quantity);
        setPrice(weapon.price);
        setCurrency(weapon.currency);
        setDescription(weapon.description);
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
                            {!editWeapon ?
                                <div className='weapon-details-container'>
                                    {selectedWeapon.map((weapon) => {
                                        return (
                                            <div key={weapon.id}>
                                                <div className='weapon-details-btn-container'>
                                                    <h3>{weapon.name}</h3>
                                                    <IconButton sx={{ marginLeft: 1 }} onClick={() => setEditWeapon(true)}>
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
                                            </div>
                                        );
                                    })}
                                </div>
                            :
                                <div className='weapon-details-container'>
                                    {selectedWeapon.map((weapon) => {
                                        return (
                                            <div key={weapon.id}>
                                                <div className='weapon-details-btn-container'>
                                                    <input 
                                                        value={name}
                                                        onChange={(e) => setName(e.target.value)}
                                                    />
                                                    <IconButton sx={{ marginLeft: 1 }} onClick={handleEditWeapon}>
                                                        <CheckIcon />
                                                    </IconButton>
                                                    <IconButton onClick={handleCancelWeaponEdit}>
                                                        <ClearIcon />
                                                    </IconButton>
                                                </div>
                                                <div className='weapons-details'>
                                                    <div className='weapons-details-col'>
                                                        <Typography><span className='bold-text'>Type: </span>
                                                            <input
                                                                value={type}
                                                                onChange={(e) => setName(e.target.value)}
                                                            />
                                                        </Typography>
                                                        <Typography><span className='bold-text'>Range: </span>
                                                            <input 
                                                                value={range}
                                                                onChange={(e) => setName(e.target.value)}
                                                            />
                                                        </Typography>
                                                        <Typography><span className='bold-text'>Damage: </span>
                                                            <input 
                                                                value={damage}
                                                                onChange={(e) => setName(e.target.value)}
                                                            />
                                                        </Typography>
                                                        <Typography><span className='bold-text'>Handedness: </span>
                                                            <input 
                                                                value={handedness}
                                                                onChange={(e) => setName(e.target.value)}
                                                            />
                                                        </Typography>
                                                        <Typography><span className='bold-text'>Damage Type: </span>
                                                            <input 
                                                                value={damageType}
                                                                onChange={(e) => setName(e.target.value)}
                                                            />
                                                        </Typography>
                                                    </div>
                                                    <div className='weapons-details-col'>
                                                        <Typography><span className='bold-text'>Magical Modifier: </span>
                                                            <input 
                                                                value={magicalMod}
                                                                onChange={(e) => setName(e.target.value)}
                                                            />
                                                        </Typography>
                                                        <Typography><span className='bold-text'>Proficiency: </span>
                                                            <input 
                                                                value={proficiency}
                                                                onChange={(e) => setName(e.target.value)}
                                                            />
                                                        </Typography>
                                                        <Typography><span className='bold-text'>Property: </span>
                                                            <input 
                                                                value={property}
                                                                onChange={(e) => setName(e.target.value)}
                                                            />
                                                        </Typography>
                                                        <Typography><span className='bold-text'>To Hit: </span>
                                                            <input 
                                                                value={toHit}
                                                                onChange={(e) => setName(e.target.value)}
                                                            />
                                                        </Typography>
                                                        <Typography><span className='bold-text'>Weight: </span>
                                                            <input 
                                                                value={weight}
                                                                onChange={(e) => setName(e.target.value)}
                                                            />
                                                        </Typography>
                                                    </div>
                                                    <div className='weapons-details-col'>
                                                        <Typography><span className='bold-text'>Quantity: </span>
                                                            <input 
                                                                value={quantity}
                                                                onChange={(e) => setName(e.target.value)}
                                                            />  
                                                        </Typography>
                                                        <Typography><span className='bold-text'>Price: </span>
                                                            <input 
                                                                value={price}
                                                                onChange={(e) => setName(e.target.value)}
                                                            />
                                                        </Typography>
                                                    </div>
                                                </div>
                                                <br/>
                                                <Typography><span className='bold-text'>Description:</span></Typography>
                                                <Typography>{weapon.description}</Typography>
                                            </div>
                                        );
                                    })}
                                </div>
                            }
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
                                        <tr key={weapon.id} onClick={() => handleSelectedWeapon(weapon)}>
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