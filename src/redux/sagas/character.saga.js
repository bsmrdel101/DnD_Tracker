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
    
    yield put({
        type: 'SET_HEALTH',
        payload: response.data.health
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
}

export default characterSaga;
