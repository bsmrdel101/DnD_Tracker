const characterReducer = (state = [], action) => {
    let copyOfState;
    switch (action.type) {
      case 'SET_CHARACTER':
        return action.payload;
      default:
        return state;
    }
  };
  
  export default characterReducer;
  