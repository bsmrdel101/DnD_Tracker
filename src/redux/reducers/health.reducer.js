const healthReducer = (state = {maxHealth: 0, health: 0, temp_health: 0}, action) => {
  let copyOfState;
  switch (action.type) {
      case 'SET_HEALTH':
        copyOfState = {...state};
        copyOfState.health = action.payload;
        copyOfState.maxHealth = action.payload;
        return copyOfState;
      case 'HEAL':
        copyOfState = {...state};
        copyOfState.health += Number(action.payload);
        if (copyOfState.health > copyOfState.maxHealth) {
          copyOfState.health = copyOfState.maxHealth;
        }
        return copyOfState;
      case 'DAMAGE':
        let carryDamage = 0; 
        copyOfState = {...state};
        if (copyOfState.temp_health > 0) {
          // Add carry over damage if there is more damage than temp_health health
          if (action.payload > copyOfState.temp_health) {
            carryDamage = action.payload - copyOfState.temp_health;
          }
          // Damage temp_health health
          copyOfState.temp_health -= action.payload;
          if (copyOfState.temp_health < 0) {
            copyOfState.temp_health = 0;
          }
        } else {
          // Damage health
          copyOfState.health -= action.payload;
        }
        copyOfState.health -= carryDamage;
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
  