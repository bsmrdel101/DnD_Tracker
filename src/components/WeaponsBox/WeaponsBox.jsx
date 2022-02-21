import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2'

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

function WeaponsBox({ character }) {
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
    const [damageMod, setDamageMod] = useState('');
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
        setDamageMod(selectedWeapon[0].damage_modifier);
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
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch({ 
                    type: 'DELETE_WEAPON', 
                    payload: weapon.id
                });
                setShowWeaponDetails(false);
                // Mixin alert
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })
                
                Toast.fire({
                    icon: 'success',
                    title: `Deleted ${weapon.name}`
                })
            }
        })
    }

    const handleCancelWeaponEdit = () => {
        setEditWeapon(false);
        resetInputs();
    }

    const handleEditWeapon = (id) => {
        dispatch({
            type: 'EDIT_WEAPON',
            payload: {
                id: id,
                name: name,
                type: type,
                range: range,
                damage: damage,
                handedness: handedness,
                damage_type: damageType,
                damage_modifier: damageMod,
                proficiency: proficiency,
                property: property,
                to_hit: toHit,
                weight: weight,
                quantity: quantity,
                price: price,
                currency: currency,
                description: description
            }
        });
        setEditWeapon(false);
        setShowWeaponDetails(false);
        resetInputs();
    }

    const handleSelectedWeapon = (weapon) => {
        dispatch({ 
            type: 'FETCH_SELECTED_WEAPON', 
            payload: weapon.id 
        });
        setShowWeaponDetails(true);
        setEditWeapon(false);
        // Initialize edit values
        setName(weapon.name);
        setType(weapon.type);
        setRange(weapon.range);
        setDamage(weapon.damage);
        setHandedness(weapon.handedness);
        setDamageType(weapon.damage_type);
        setDamageMod(weapon.magical_modifier);
        setProficiency(weapon.proficiency);
        setProperty(weapon.property);
        setToHit(weapon.to_hit);
        setWeight(weapon.weight);
        setQuantity(weapon.quantity);
        setPrice(weapon.price);
        setCurrency(weapon.currency);
        setDescription(weapon.description);
    }

    // TODO:
    // Get rid of damage modifier only on the add new weapon modal
    // Keep it on the edit weapon, so the user can set their own.
    // Make a dropdown next to the damage input thats lets you chose which stat to use for the damage modifier.

    const damageModifier = (weapon) => {
        if (weapon.damage_modifier === null) {
            return 0;
        } else {
            return weapon.damage_modifier;
        }
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
                                                    <IconButton onClick={() => handleDeleteWeapon(weapon)}>
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
                                                        <Typography><span className='bold-text'>Damage Modifier: </span>{weapon.damage_modifier}</Typography>
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
                                                        className='edit-weapon-input'
                                                    />
                                                    <IconButton sx={{ marginLeft: 1 }} onClick={() => handleEditWeapon(weapon.id)}>
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
                                                                onChange={(e) => setType(e.target.value)}
                                                                className='edit-weapon-input'
                                                            />
                                                        </Typography>
                                                        <Typography><span className='bold-text'>Range: </span>
                                                            <input 
                                                                value={range}
                                                                onChange={(e) => setRange(e.target.value)}
                                                                className='edit-weapon-input'
                                                            />
                                                        </Typography>
                                                        <Typography><span className='bold-text'>Damage: </span>
                                                            <input 
                                                                value={damage}
                                                                onChange={(e) => setDamage(e.target.value)}
                                                                className='edit-weapon-input'
                                                            />
                                                        </Typography>
                                                        <Typography><span className='bold-text'>Handedness: </span>
                                                            <input 
                                                                value={handedness}
                                                                onChange={(e) => setHandedness(e.target.value)}
                                                                className='edit-weapon-input'
                                                            />
                                                        </Typography>
                                                        <Typography><span className='bold-text'>Damage Type: </span>
                                                            <input 
                                                                value={damageType}
                                                                onChange={(e) => setDamageType(e.target.value)}
                                                                className='edit-weapon-input'
                                                            />
                                                        </Typography>
                                                    </div>
                                                    <div className='weapons-details-col'>
                                                        <Typography><span className='bold-text'>Magical Modifier: </span>
                                                            <input 
                                                                value={damageMod}
                                                                onChange={(e) => setDamageMod(e.target.value)}
                                                                className='edit-weapon-input'
                                                            />
                                                        </Typography>
                                                        <Typography><span className='bold-text'>Proficiency: </span>
                                                            <input 
                                                                value={proficiency}
                                                                onChange={(e) => setProficiency(e.target.value)}
                                                                className='edit-weapon-input'
                                                            />
                                                        </Typography>
                                                        <Typography><span className='bold-text'>Property: </span>
                                                            <input 
                                                                value={property}
                                                                onChange={(e) => setProperty(e.target.value)}
                                                                className='edit-weapon-input'
                                                            />
                                                        </Typography>
                                                        <Typography><span className='bold-text'>To Hit: </span>
                                                            <input 
                                                                value={toHit}
                                                                onChange={(e) => setToHit(e.target.value)}
                                                                className='edit-weapon-input'
                                                            />
                                                        </Typography>
                                                        <Typography><span className='bold-text'>Weight: </span>
                                                            <input 
                                                                value={weight}
                                                                onChange={(e) => setWeight(e.target.value)}
                                                                className='edit-weapon-input'
                                                            />
                                                        </Typography>
                                                    </div>
                                                    <div className='weapons-details-col'>
                                                        <Typography><span className='bold-text'>Quantity: </span>
                                                            <input 
                                                                value={quantity}
                                                                onChange={(e) => setQuantity(e.target.value)}
                                                                className='edit-weapon-input'
                                                            />  
                                                        </Typography>
                                                        <Typography><span className='bold-text'>Price: </span>
                                                            <input 
                                                                value={price}
                                                                onChange={(e) => setPrice(e.target.value)}
                                                                className='edit-weapon-input'
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
                        <table className='table table-dark-rows'>
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
                                            <td>{weapon.damage}+{damageModifier(weapon)}</td>
                                            <td>{weapon.range} feet</td>
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