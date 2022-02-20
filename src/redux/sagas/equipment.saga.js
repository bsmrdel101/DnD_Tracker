import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// Retrieves all of the character's skills
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


function* equipmentSaga() {
  yield takeLatest('FETCH_WEAPONS', fetchWeapons);
}

export default equipmentSaga;
