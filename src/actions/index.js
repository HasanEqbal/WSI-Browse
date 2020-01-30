import axios from 'axios';

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const getProducts = () => async (dispatch, api) => {
  const res = await axios('http://localhost:3000/getproducts');

  dispatch({
    type: GET_PRODUCTS,
    payload: res.data
  });
};

