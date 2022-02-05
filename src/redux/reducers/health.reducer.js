const healthReducer = (state = {health: 0}, action) => {
  let copyOfState;
  switch (action.type) {
      case 'SET_HEALTH':
        copyOfState = {...state};
        copyOfState.health = action.payload;
        return copyOfState;
      case 'HEAL':
        copyOfState = {...state};
        copyOfState.health += Number(action.payload);
        return copyOfState;
      case 'DAMAGE':
        copyOfState = {...state};
        copyOfState.health -= action.payload;
        return copyOfState;
      default:
        return state;
    }
  };
  
  export default healthReducer;
  