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

    
    yield put({
        type: 'GET_SELECTED_CHARACTER'
    });
  } catch (error) {
    console.log('Error:', error);
  }
}

// function* selectCharacter(action) {
//   try {
//     const response = yield axios ({
//         method: 'GET',
//         url: `/api/stats/${action.payload}`
//     });
    
//     yield put({
//         type: 'SET_SELECTED_CHARACTER',
//         payload: response.data
//     });
//   } catch (error) {
//     console.log('Error:', error);
//   }
// }

function* characterSaga() {
  yield takeLatest('FETCH_CHARACTER', fetchCharacter);
  yield takeLatest('GET_SELECTED_CHARACTER', selectCharacter);
  yield takeLatest('POST_SELECTED_CHARACTER', postCharacter);
}

export default characterSaga;
