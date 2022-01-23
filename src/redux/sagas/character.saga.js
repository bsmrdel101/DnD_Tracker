import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// Retrieves all specific character data
function* fetchCharacter(action) {
  try {
    const response = yield axios ({
        method: 'GET',
        url: '/api/stats'
    });
    console.log(response.data);
    
    yield put({
        type: 'SET_CHARACTER',
        payload: response.data
    });
  } catch (error) {
    console.log('Error:', error);
  }
}

function* setSelectedCharacter(action) {
  try {
    yield axios ({
        method: 'PUT',
        url: '/api/selection',
        data: {id: action.payload}
    });

  } catch (error) {
    console.log('Error:', error);
  }
}

function* getSelectedCharacter(action) {
  try {
    const response = yield axios ({
        method: 'GET',
        url: '/api/selection',
    });
    
    yield put({
      type: 'SET_SELECTION',
      payload: response.data.selected_character
    });
  } catch (error) {
    console.log('Error:', error);
  }
}

function* characterSaga() {
  yield takeLatest('FETCH_CHARACTER', fetchCharacter);
  yield takeLatest('SET_SELECTED_CHARACTER', setSelectedCharacter);
  yield takeLatest('GET_SELECTED_CHARACTER', getSelectedCharacter);
}

export default characterSaga;
