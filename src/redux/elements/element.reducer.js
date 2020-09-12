const INITIAL_STATE = {
  elements: [],
};

export const elementReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_ELEMENT":
      return {
        ...state,
        elements: action.payload,
      };

    case "UPDATE_ELEMENT":
      return {
        ...state,
        elements: action.payload,
      };

    default:
      return state;
  }
};
