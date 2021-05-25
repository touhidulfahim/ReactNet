import * as actionTypes from "../actionType/ActionTypes";

const INITIAL_STATE = {
  foods: [],
  customers: [],
};

export const foodReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ALL:
      return {
        ...state,
        foods: [...action.payload],
      };
    default:
      return state;
  }
};

export const customerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ALL:
      return {
        ...state,
        customers: [...action.payload],
      };
    default:
      return state;
  }
};
