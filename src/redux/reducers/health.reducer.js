const healthReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_HEALTH':
        return action.payload;
      default:
        return state;
    }
  };
  
  export default healthReducer;
  