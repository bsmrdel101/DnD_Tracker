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

function* characterSaga() {
  yield takeLatest('FETCH_CHARACTER', fetchCharacter);
}

export default characterSaga;
