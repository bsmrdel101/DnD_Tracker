const characterReducer = (state = [], action) => {
    let copyOfState;
    switch (action.type) {
      case 'SET_CHARACTER':
        return [...state,{
          name: action.payload.name,
          class: action.payload.class,
          race: action.payload.race,
          background: action.payload.background,
          level: action.payload.level,
          ac: action.payload.ac,
          health: action.payload.health,
          temp_health: action.payload.temp_health,
          prof_bonus: action.payload.prof_bonus,
          movement: action.payload.movement,
          initiative: action.payload.initiative,
          hit_dice: action.payload.hit_dice,
          str: action.payload.str,
          dex: action.payload.dex,
          con: action.payload.con,
          int: action.payload.int,
          wis: action.payload.wis,
          char: action.payload.char
        }];
      default:
        return state;
    }
  };
  
  export default characterReducer;
  