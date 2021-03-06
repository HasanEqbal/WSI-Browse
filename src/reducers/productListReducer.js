import { GET_PRODUCTS } from '../actions';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
