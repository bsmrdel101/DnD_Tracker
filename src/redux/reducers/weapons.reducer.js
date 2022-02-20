const weaponsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_WEAPONS':
          return action.payload;
        default:
          return state;
      }
    };
    
    export default weaponsReducer;
    