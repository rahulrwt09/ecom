import { GET_PRODUCT_SUCCESS, POST_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from "../actionTypes"
import axios from "axios"

export const getproductsuccess = (payload) => {
  return { type: GET_PRODUCT_SUCCESS, payload };
}

export const postproductsuccess = (payload) => {
  return { type: POST_PRODUCT_SUCCESS, payload };
}

export const productrequest = () => {
  return { type: PRODUCT_REQUEST };
}

export const productfailure = () => {
  return { type: PRODUCT_FAILURE };
}

export const addproduct = (payload) => (dispatch) => {
  dispatch(productrequest());
  axios
    .post("http://localhost:8080/Products", payload)
    .then((res) => {
      dispatch(postproductsuccess(res.data));
    })
    .catch(() => {
      dispatch(productfailure());
    });
};

export const getproduct = (dispatch) => {
  dispatch(productrequest());
  axios
    .get("http://localhost:8080/Products")
    .then((res) => {
      
      dispatch(getproductsuccess(res.data));
    })
    .catch(() => {
      dispatch(productfailure());
    });
};
