import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import character from './character.reducer';
import selectedCharacterReducer from './selectedCharacter.reducer';
import healthReducer from './health.reducer';
import skillsReducer from './skills.reducer';
import weaponsReducer from './weapons.reducer';
import selectedWeapon from './selectedWeapon.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  character,
  selectedCharacterReducer,
  healthReducer,
  skillsReducer,
  weaponsReducer,
  selectedWeapon,
});

export default rootReducer;
