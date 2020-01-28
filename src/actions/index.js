import productsService from '../api/services';

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const getProducts = () => async (dispatch, api) => {
  const res = await productsService.get('/getproducts');

  dispatch({
    type: GET_PRODUCTS,
    payload: res.data
  });
};

