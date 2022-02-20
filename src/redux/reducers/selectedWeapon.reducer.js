const selectedWeapon = (state = [], action) => {
    switch (action.type) {
        case 'SET_SELECTED_WEAPON':
          return action.payload;
        default:
          return state;
      }
    };
    
    export default selectedWeapon;
    