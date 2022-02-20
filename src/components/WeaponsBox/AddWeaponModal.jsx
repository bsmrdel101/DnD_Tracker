import React from 'react';
import { useState } from 'react';

import Modal from '@mui/material/Modal';
import { Box } from '@mui/system';

import './WeaponsBox.css';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'var(--card)',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: 3
};

function AddWeaponModal() {
    const [addWeapon, setAddWeapon] = useState(false);
    const [addMagicItem, setAddMagicItem] = useState(false);
    const [addArmor, setAddArmor] = useState(false);

    const handleClose = () => {
        setAddWeapon(false);
        setAddMagicItem(false);
        setAddArmor(false);
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
                        
                    </Box>
                </div>
            </Modal>
        </center>
    );
}

export default AddWeaponModal;