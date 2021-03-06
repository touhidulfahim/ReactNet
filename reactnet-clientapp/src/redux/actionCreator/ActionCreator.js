//import axios from "axios";
import { createAPIEndpoint, ENDPIONTS } from "../../api/api";
import * as actionTypes from "../actionType/ActionTypes";

//Product List Start
export const getFoods = (foods) => {
  return {
    type: actionTypes.FETCH_ALL,
    payload: foods,
  };
};

//Failed Load
export const loadingFailed = (errMess) => ({
  type: actionTypes.LOADING_FAILED,
  payload: errMess,
});

export const getFoodList = () => {
  return (dispatch) => {
    createAPIEndpoint(ENDPIONTS.FOOD)
      .fetchAll()
      .then((response) => response.data)
      .then((foods) => dispatch(getFoods(foods)))
      .catch((err) => dispatch(loadingFailed(err.message)));
  };
};
//Product List End

export const addFood = (data, onSuccess) => (dispatch) => {
  //data = formateData(data);
  createAPIEndpoint(ENDPIONTS.FOOD)
    .create(data)
    .then((response) => {
      dispatch({
        type: actionTypes.CREATE,
        payload: response.data,
      });
      onSuccess();
    })
    .catch((err) => console.log(err));
};

export const updateFood = (id, data, onSuccess) => (dispatch) => {
  createAPIEndpoint(ENDPIONTS.FOOD)
    .update(id, data)
    .then((res) => {
      dispatch({
        type: actionTypes.UPDATE,
        payload: { id, ...data },
      });
      onSuccess();
    })
    .catch((err) => console.log(err));
};

export const deleteFood = (id, onSuccess) => (dispatch) => {
  createAPIEndpoint(ENDPIONTS.FOOD)
    .delete(id)
    .then((res) => {
      dispatch({
        type: actionTypes.DELETE,
        payload: id,
      });
      onSuccess();
    })
    .catch((err) => console.log(err));
};

//Customer List Start
export const getCustomers = (customers) => {
  return {
    type: actionTypes.FETCH_ALL,
    payload: customers,
  };
};
export const getCustomerList = () => {
  return (dispatch) => {
    createAPIEndpoint(ENDPIONTS.CUSTOMER)
      .fetchAll()
      .then((response) => response.data)
      .then((customers) => dispatch(getCustomers(customers)))
      .catch((err) => dispatch(loadingFailed(err.message)));
  };
};

export const addCustomer = (data, onSuccess) => (dispatch) => {
  createAPIEndpoint(ENDPIONTS.CUSTOMER)
    .create(data)
    .then((res) => {
      dispatch({
        type: actionTypes.CREATE,
        payload: res.data,
      });
      onSuccess();
    })
    .catch((err) => console.log(err));
};

export const UpdateCustomer = (id, data, onSuccess) => (dispatch) => {
  createAPIEndpoint(ENDPIONTS.CUSTOMER)
    .update(id, data)
    .then((res) => {
      dispatch({
        type: actionTypes.UPDATE,
        payload: { id, ...data },
      });
      onSuccess();
    })
    .catch((err) => console.log(err));
};

export const deleteCustomer = (id, onSuccess) => (dispatch) => {
  createAPIEndpoint(ENDPIONTS.CUSTOMER)
    .delete(id)
    .then((res) => {
      dispatch({
        type: actionTypes.DELETE,
        payload: id,
      });
      onSuccess();
    })
    .catch((err) => console.log(err));
};
