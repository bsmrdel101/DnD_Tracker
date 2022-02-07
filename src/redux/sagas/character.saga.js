import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// Retrieves all specific character data
function* fetchCharacter(action) {
  try {
    const response = yield axios ({
        method: 'GET',
        url: '/api/stats'
    });
    
    yield put({
        type: 'SET_CHARACTER',
        payload: response.data
    });
  } catch (error) {
    console.log('Error:', error);
  }
}

// Retrieves the selected character
function* selectCharacter(action) {
  try {
    const responseId = yield axios ({
        method: 'GET',
        url: '/api/stats/selectedCharacterId'
    });
    const response = yield axios ({
      method: 'GET',
      url: `/api/stats/${responseId.data.selected_character}`
    });
    
    yield put({
        type: 'SET_SELECTED_CHARACTER',
        payload: response.data
    });
  } catch (error) {
    console.log('Error:', error);
  }
}

// Adds the selected character's id to the database
function* postCharacter(action) {
  try {
    yield axios ({
      method: 'PUT',
      url: '/api/stats',
      data: {id: action.payload}
    });
    
    yield put({
        type: 'GET_SELECTED_CHARACTER'
    });
  } catch (error) {
    console.log('Error:', error);
  }
}

function* getHealth(action) {
  try {
    const responseId = yield axios ({
        method: 'GET',
        url: '/api/stats/selectedCharacterId'
    });
    const response = yield axios ({
      method: 'GET',
      url: `/api/stats/health/${responseId.data.selected_character}`
    });
    let current_health = response.data.current_health;
    let max_health = response.data.max_health;
    let temp_health = response.data.temp_health;
    
    yield put({
        type: 'SET_HEALTH',
        payload: {max_health: max_health, current_health: current_health, temp_health: temp_health}
    });
  } catch (error) {
    console.log('Error:', error);
  }
}

function* dmgHealth(action) {
  try {
    const responseId = yield axios ({
        method: 'GET',
        url: '/api/stats/selectedCharacterId'
    });
    const response = yield axios ({
      method: 'GET',
      url: `/api/stats/health/${responseId.data.selected_character}`
    });

    let carryDamage = 0; 
    let current_health = response.data.current_health;
    let max_health = response.data.max_health;
    let temp_health = response.data.temp_health;

    if (temp_health > 0) {
      // Add carry over damage if there is more damage than temp_health health
      if (action.payload > temp_health) {
        carryDamage = action.payload - temp_health;
      }
      // Damage temp_health health
      temp_health -= action.payload;
      if (temp_health < 0) {
        temp_health = 0;
      }
    } else {
      // Damage health
      current_health -= action.payload;
    }
    current_health -= carryDamage;


    // Update current health
    yield axios ({
      method: 'PUT',
      url: `/api/stats/health/${responseId.data.selected_character}`,
      data: {current_health: current_health, temp_health: temp_health}
    });

    yield put({
        type: 'SET_HEALTH',
        payload: {max_health: max_health, current_health: current_health, temp_health: temp_health}
    });
  } catch (error) {
    console.log('Error:', error);
  }
}

function* tempHealth(action) {
  try {
    const responseId = yield axios ({
        method: 'GET',
        url: '/api/stats/selectedCharacterId'
    });
    const response = yield axios ({
      method: 'GET',
      url: `/api/stats/health/${responseId.data.selected_character}`
    });

    let temp_health = response.data.temp_health;

    temp_health += Number(action.payload);

    // Update temp health
    yield axios ({
      method: 'PUT',
      url: `/api/stats/temp/${responseId.data.selected_character}`,
      data: {temp_health: temp_health}
    });

    yield put({
        type: 'SET_TEMP_HEALTH',
        payload: {temp_health: temp_health}
    });
  } catch (error) {
    console.log('Error:', error);
  }
}


function* characterSaga() {
  yield takeLatest('FETCH_CHARACTER', fetchCharacter);
  yield takeLatest('GET_SELECTED_CHARACTER', selectCharacter);
  yield takeLatest('POST_SELECTED_CHARACTER', postCharacter);
  yield takeLatest('GET_HEALTH', getHealth);
  yield takeLatest('DAMAGE', dmgHealth);
  yield takeLatest('ADD_TEMP', tempHealth);
}

export default characterSaga;
