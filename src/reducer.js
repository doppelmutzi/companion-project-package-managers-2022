export default (state, action) => {
  switch (action.type) {
    case "TOGGLE_DARK_MODE":
      return {
        ...state,
        darkMode: action.darkMode,
      };
    case "SET_FILTER":
      return {
        ...state,
        filter: action.filter,
        sounds: state.allSounds.filter((sound) =>
          sound.label.includes(action.filter)
        ),
      };
    case "RESET_FILTER":
      return {
        ...state,
        filter: null,
        sounds: [...state.allSounds],
      };
    case "SET_SOUNDS":
      return {
        ...state,
        allSounds: action.sounds,
        sounds: action.sounds,
      };
    case "UPDATE_PLAYBACK": {
      return {
        ...state,
        currentSound: action.currentSound,
      };
    }
    default:
      return state;
  }
};

export function getInitialState() {
  return {
    darkMode: false,
    allSounds: [],
    // filtered sounds
    sounds: [],
    /*
        currentSound: {
        file: string,
        label: string,
        playback: play | stop
        }
    */
    currentSound: null,
    filter: null,
  };
}
