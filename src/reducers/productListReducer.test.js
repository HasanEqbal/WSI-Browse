import { GET_PRODUCTS } from '../actions';
import productListReducer from './productListReducer';


describe('Testing Reducer', () => {
  const intialState = {}
  it('should return intial state of reducer', () => {
    expect(productListReducer(undefined, {})).toEqual(intialState)
  })

  it('should handle GET_PRODUCTS action', () => {
    expect(productListReducer(intialState, {
      type: GET_PRODUCTS,
      payload: {
        "id": "shop/new/all-new",
        "name": "All New",
        "categoryType": "subcat"
      }
    })).toEqual({
      "id": "shop/new/all-new",
      "name": "All New",
      "categoryType": "subcat"
    })
  })
}


)
