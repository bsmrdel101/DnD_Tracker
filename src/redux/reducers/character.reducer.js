const characterReducer = (state = {}, action) => {
    let copyOfState;
    switch (action.type) {
      case 'SEt_CHARACTER':
        return action.payload;
      default:
        return state;
    }
  };
  
  export default characterReducer;
  