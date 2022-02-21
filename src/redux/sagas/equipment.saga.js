import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// Retrieves all of the character's weapons
function* fetchWeapons(action) {
  try {
    const responseId = yield axios ({
        method: 'GET',
        url: '/api/stats/selectedCharacterId'
    });
    const response = yield axios ({
        method: 'GET',
        url: `/api/equipment/weapons/${responseId.data.selected_character}`
    });
    console.log(response.data);
    
    yield put({
        type: 'SET_WEAPONS',
        payload: response.data
    });
  } catch (error) {
    console.log('Error:', error);
  }
}

// Adds a new weapon to the table
function* addWeapon(action) {
    try {
        const responseId = yield axios ({
            method: 'GET',
            url: '/api/stats/selectedCharacterId'
        });
        yield axios ({
            method: 'POST',
            url: `/api/equipment/weapons/${responseId.data.selected_character}`,
            data: action.payload
        });
        
        yield put({
            type: 'FETCH_WEAPONS'
        });
    } catch (error) {
        console.log('Error:', error);
    }
}

// Retrieves the selected weapon on the table
function* fetchSelectedWeapon(action) {
    try {
        const response = yield axios ({
            method: 'GET',
            url: `/api/equipment/select/${action.payload}`
        });
        
        yield put({
            type: 'SET_SELECTED_WEAPON',
            payload: response.data
        });
    } catch (error) {
        console.log('Error:', error);
    }
}

// Deletes a weapon
function* deleteWeapon(action) {
    try {
        yield axios ({
            method: 'DELETE',
            url: `/api/equipment/weapons/${action.payload}`
        });
        
        yield put({
            type: 'FETCH_WEAPONS'
        });
    } catch (error) {
        console.log('Error:', error);
    }
}


function* equipmentSaga() {
  yield takeLatest('FETCH_WEAPONS', fetchWeapons);
  yield takeLatest('ADD_WEAPON', addWeapon);
  yield takeLatest('FETCH_SELECTED_WEAPON', fetchSelectedWeapon);
  yield takeLatest('DELETE_WEAPON', deleteWeapon);
}

export default equipmentSaga;
