import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Modal from '@mui/material/Modal';
import { Box } from '@mui/system';

import './WeaponsBox.css';

// Styles for modal box
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 900,
    bgcolor: 'var(--card)',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: 3,
};

function AddWeaponModal() {
    const dispatch = useDispatch();

    const [addWeapon, setAddWeapon] = useState(false);
    const [selectWeapon, setSelectWeapon] = useState(false);

    // Input values for new weapon
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
    const [currency, setCurrency] = useState('GP');
    const [description, setDescription] = useState('');

    const handleClose = () => {
        setAddWeapon(false);
        setSelectWeapon(false);
    }

    // Takes all of the inputs and posts a new weapon to the database
    const handleAddWeapon = () => {
        dispatch({
            type: 'ADD_WEAPON',
            payload: {
                name: name,
                type: type,
                range: range,
                damage: damage,
                handedness: handedness,
                damage_type: damageType,
                damage_modifier: Number(magicalMod),
                proficiency: proficiency,
                property: property,
                to_hit: Number(toHit),
                weight: Number(weight),
                quantity: Number(quantity),
                price: Number(price),
                currency: currency,
                description: description
            }    
        });
        setName('');
        setType('');
        setRange('');
        setDamage('');
        setHandedness('');
        setDamageType('');
        setMagicalMod('');
        setProficiency('');
        setProperty('');
        setToHit('');
        setWeight('');
        setQuantity('');
        setPrice('');
        setCurrency('');
        setDescription('');
        setAddWeapon(false);
        setSelectWeapon(false);
    }

    return (
        <center>
            <div className='weapon-controllers'>
                <p className='table-btn' onClick={() => setSelectWeapon(true)}>Select Weapon</p>
                <p className='table-btn' onClick={() => setAddWeapon(true)}>Create Weapon</p>
            </div>
            {/* Create Weapon */}
            <Modal
                open={addWeapon}
                onClose={handleClose}
            >
                <div>
                    <Box sx={style}>
                        <center>
                            <h2>New Weapon</h2>
                        </center>
                        <form onSubmit={handleAddWeapon}>
                            <section className='modal-input-container'>
                                <div className='label-input'>
                                    <label>Name</label>
                                    <input 
                                        placeholder='Dagger'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className='label-input'>
                                    <label>Type</label>
                                    <input 
                                        placeholder='Melee'
                                        value={type}
                                        onChange={(e) => setType(e.target.value)}
                                    />
                                </div>
                                <div className='label-input'>
                                    <label>Range</label>
                                    <input 
                                        placeholder='25/100'
                                        value={range}
                                        onChange={(e) => setRange(e.target.value)}
                                    />
                                </div>
                                <div className='label-input'>
                                    <label>Damage</label>
                                    <input 
                                        placeholder='1d4'
                                        value={damage}
                                        onChange={(e) => setDamage(e.target.value)}
                                    />
                                </div>
                                <div className='label-input'>
                                    <label>Handedness</label>
                                    <input 
                                        placeholder='One Handed'
                                        value={handedness}
                                        onChange={(e) => setHandedness(e.target.value)}
                                    />
                                </div>
                                <div className='label-input'>
                                    <label>Damage Type</label>
                                    <input 
                                        placeholder='Piercing'
                                        value={damageType}
                                        onChange={(e) => setDamageType(e.target.value)}
                                    />
                                </div>
                                <div className='label-input'>
                                    <label>Damage Modifier</label>
                                    <input 
                                        placeholder='0'
                                        value={magicalMod}
                                        onChange={(e) => setMagicalMod(e.target.value)}
                                        type='number'
                                    />
                                </div>
                                <div className='label-input'>
                                    <label>Proficiency</label>
                                    <input 
                                        placeholder='Simple'
                                        value={proficiency}
                                        onChange={(e) => setProficiency(e.target.value)}
                                    />
                                </div>
                                <div className='label-input'>
                                    <label>Property</label>
                                    <input 
                                        placeholder='Finesse'
                                        value={property}
                                        onChange={(e) => setProperty(e.target.value)}
                                    />
                                </div>
                                <div className='label-input'>
                                    <label>To Hit Modifier</label>
                                    <input 
                                        placeholder='0'
                                        value={toHit}
                                        onChange={(e) => setToHit(e.target.value)}
                                        type='number'
                                    />
                                </div>
                                <div className='label-input'>
                                    <label>Weight</label>
                                    <input 
                                        placeholder='1'
                                        value={weight}
                                        onChange={(e) => setWeight(e.target.value)}
                                        type='number'
                                    />
                                </div>
                                <div className='label-input'>
                                    <label>Quantity</label>
                                    <input 
                                        placeholder='1'
                                        value={quantity}
                                        onChange={(e) => setQuantity(e.target.value)}
                                        type='number'
                                    />
                                </div>
                                <div className='label-input-dropdown-container'>
                                    <label>Price</label>
                                    <div className='label-input-dropdown'>
                                        <input
                                            placeholder='5'
                                            value={price}
                                            onChange={(e) => setPrice(e.target.value)}
                                            type='number'
                                        />
                                        <select 
                                            className='modal-dropdown' 
                                            onChange={(e) => setCurrency(e.target.value)}
                                            value={currency}
                                        >
                                            <option value={0} disabled>Currency</option>
                                            <option value={'CP'}>CP</option>
                                            <option value={'SP'}>SP</option>
                                            <option value={'EP'}>EP</option>
                                            <option value={'GP'}>GP</option>
                                            <option value={'PP'}>PP</option>
                                        </select>
                                    </div>
                                </div>
                            </section>
                            <center>
                                <textarea 
                                    className='modal-description' 
                                    cols={50} 
                                    rows={6}
                                    placeholder='Description'
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                                <br/>
                                <button className='modal-btn' type='submit'>Submit</button>
                            </center>
                        </form>
                    </Box>
                </div>
            </Modal>

            {/* Select Weapon */}
            <Modal
                open={selectWeapon}
                onClose={handleClose}
            >
                <div>
                    <Box sx={style}>
                        <center>
                            <h2>Select Weapon</h2>
                        </center>
                        <form>
                            <center>
                                <button className='modal-btn' type='submit'>Submit</button>
                            </center>
                        </form>
                    </Box>
                </div>
            </Modal>
        </center>
    );
}

export default AddWeaponModal;