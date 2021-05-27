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
    case actionTypes.CREATE:
      return {
        ...state,
        foods: [...state.foods, action.payload],
      };
    case actionTypes.UPDATE:
      return {
        ...state,
        foods: state.foods.map((x) =>
          x.sysId == action.payload.id ? action.payload : x
        ),
      };
    case actionTypes.DELETE:
      return {
        ...state,
        foods: state.foods.filter((x) => x.sysId != action.payload),
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
