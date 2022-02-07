const healthReducer = (state = {max_health: 0, health: 0, temp_health: 0}, action) => {
  let copyOfState;
  switch (action.type) {
      case 'SET_HEALTH':
        copyOfState = {...state};
        copyOfState.health = action.payload.current_health;
        copyOfState.max_health = action.payload.max_health;
        copyOfState.temp_health = action.payload.temp_health;
        return copyOfState;
      // case 'HEAL':
      //   copyOfState = {...state};
      //   copyOfState.health += Number(action.payload);
      //   if (copyOfState.health > copyOfState.max_health) {
      //     copyOfState.health = copyOfState.max_health;
      //   }
      //   return copyOfState;
      case 'SET_TEMP_HEALTH':
        copyOfState = {...state};
        copyOfState.temp_health = action.payload.temp_health;
        return copyOfState;
      default:
        return state;
    }
  };
  
  export default healthReducer;
  