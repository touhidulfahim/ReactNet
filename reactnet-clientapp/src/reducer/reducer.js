import { ACTION_TYPES } from "../actions/dCandidate";
const initialState = {
  list: [],
};

export const foodReducer = (foodState = initialState, foodAction) => {
  switch (foodAction.type) {
    case ACTION_TYPES.FETCH_ALL:
      return {
        ...foodState,
        list: [...foodAction.payload],
      };
    default:
      return foodState;
  }
};
