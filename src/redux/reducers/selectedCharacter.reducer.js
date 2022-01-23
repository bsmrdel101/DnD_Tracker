const selectedCharacterReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_SELECTION':
        return [{id: action.payload}];
      default:
        return state;
    }
  };
  
  export default selectedCharacterReducer;
  