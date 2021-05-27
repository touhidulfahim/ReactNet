import axios from "axios";
const baseUrl = "http://localhost:16451/api/";

export const ENDPIONTS = {
  CUSTOMER: "Customer",
  FOOD: "Food",
  ORDER: "Order",
};

export const createAPIEndpoint = (endpoint) => {
  let url = baseUrl + endpoint + "/";
  return {
    fetchAll: () => axios.get(url),
    fetchById: (id) => axios.get(url + id),
    create: (newRecord) => axios.post(url, newRecord),
    update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
    delete: (id) => axios.delete(url + id),
  };
};
