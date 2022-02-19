import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// Retrieves all of the character's skills
function* fetchSkills(action) {
  try {
    const responseId = yield axios ({
        method: 'GET',
        url: '/api/stats/selectedCharacterId'
    });
    const response = yield axios ({
        method: 'GET',
        url: `/api/skills/${responseId.data.selected_character}`
    });
    
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
