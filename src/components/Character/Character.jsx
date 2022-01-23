import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Character() {
    const dispatch = useDispatch();

    // const selection = useSelector((store) => store.selectedCharacterReducer);

    useEffect(() => {
        // dispatch({
        //     type: 'GET_SELECTED_CHARACTER' 
        // });
        // console.log(selection);
    },[])

    return (
        <>
            
        </>
    );
}

export default Character;
