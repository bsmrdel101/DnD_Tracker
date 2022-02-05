const healthReducer = (state = {maxHealth: 0, health: 0, temp_health: 0}, action) => {
  let copyOfState;
  switch (action.type) {
      case 'SET_HEALTH':
        copyOfState = {...state};
        copyOfState.health = action.payload;
        return copyOfState;
      case 'HEAL':
        copyOfState = {...state};
        copyOfState.health += Number(action.payload);
        if (copyOfState.health > copyOfState.maxHealth) {
          copyOfState.health = copyOfState.maxHealth;
        }
        return copyOfState;
      case 'DAMAGE':
        copyOfState = {...state};
        if (copyOfState.temp > 0) {
          copyOfState.temp -= action.payload;
          if (copyOfState.temp < 0) {
            copyOfState.temp = 0;
          }
        } else {
          copyOfState.health -= action.payload;
          if (copyOfState.health < 0) {
            copyOfState.health = 0;
          }
        }
        return copyOfState;
      case 'ADD_TEMP':
        copyOfState = {...state};
        copyOfState.temp_health += Number(action.payload);
        return copyOfState;
      case 'DAMAGE_TEMP':
        copyOfState = {...state};
        copyOfState.temp_health -= action.payload;
        return copyOfState;
      default:
        return state;
    }
  };
  
  export default healthReducer;
  