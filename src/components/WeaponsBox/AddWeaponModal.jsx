import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

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
    const [addMagicItem, setAddMagicItem] = useState(false);
    const [addArmor, setAddArmor] = useState(false);

    useEffect(() => {

    }, [])

    // Input values for new weapon
    const [name, setName] = useState('');
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
    const [description, setDescription] = useState('');

    const handleClose = () => {
        setAddWeapon(false);
    }

    return (
        <center>
            <p className='table-btn' onClick={() => setAddWeapon(true)}>Add Weapon</p>
            <Modal
                open={addWeapon}
                onClose={handleClose}
            >
                <div>
                    <Box sx={style}>
                        <center>
                            <h2>New Weapon</h2>
                        </center>
                        <form>
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
                                        placeholder='Type'
                                        value={type}
                                        onChange={(e) => setType(e.target.value)}
                                    />
                                </div>
                                <div className='label-input'>
                                    <label>Name</label>
                                    <input 
                                        placeholder='Dagger'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className='label-input'>
                                    <label>Name</label>
                                    <input 
                                        placeholder='Dagger'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className='label-input'>
                                    <label>Name</label>
                                    <input 
                                        placeholder='Dagger'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className='label-input'>
                                    <label>Name</label>
                                    <input 
                                        placeholder='Dagger'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className='label-input'>
                                    <label>Name</label>
                                    <input 
                                        placeholder='Dagger'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className='label-input'>
                                    <label>Name</label>
                                    <input 
                                        placeholder='Dagger'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className='label-input'>
                                    <label>Name</label>
                                    <input 
                                        placeholder='Dagger'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className='label-input'>
                                    <label>Name</label>
                                    <input 
                                        placeholder='Dagger'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className='label-input'>
                                    <label>Name</label>
                                    <input 
                                        placeholder='Dagger'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className='label-input'>
                                    <label>Name</label>
                                    <input 
                                        placeholder='Dagger'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className='label-input'>
                                    <label>Name</label>
                                    <input 
                                        placeholder='Dagger'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                            </section>
                            <center>
                                <textarea 
                                    className='modal-description' 
                                    cols={50} 
                                    rows={6}
                                    placeholder='Description'
                                />
                                <br/>
                                <button className='modal-btn'>Submit</button>
                            </center>
                        </form>
                    </Box>
                </div>
            </Modal>
        </center>
    );
}

export default AddWeaponModal;