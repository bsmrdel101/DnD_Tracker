import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// Retrieves all of the character's skills
function* fetchSkills(action) {
  try {
    const response = yield axios ({
        method: 'GET',
        url: '/api/skills'
    });
    console.log(response.data);
    
    yield put({
        type: 'SET_SKILLS',
        payload: response.data
    });
  } catch (error) {
    console.log('Error:', error);
  }
}


function* skillsSaga() {
  yield takeLatest('FETCH_SKILLS', fetchSkills);
}

export default skillsSaga;
