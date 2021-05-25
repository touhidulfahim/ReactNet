import axios from "axios";
const baseUrl = "http://localhost:16451/api/";

export const ACTION_TYPES = {
  CREATE: "CREATE",
  UPDATE: "UPDATE",
  DELETE: "DELETE",
  FETCH_ALL: "FETCH_ALL",
};

export const fetchComments = () => {
  return (dispatch) => {
    //dispatch(commentLoading());
    axios.get(baseUrl + "food/").then((response) => console.log(response));
    //.then((comments) => dispatch(loadComments(comments)))
    //.catch((error) => dispatch(commentFailed(error.message)));
  };
};
