import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { getProducts, GET_PRODUCTS } from './index';

const mockStore = configureMockStore([thunkMiddleware]);
const mock = new MockAdapter(axios);
mock.onGet('http://localhost:3000/getproducts').reply(200, {
  data: {
    "id": "shop/new/all-new",
    "name": "All New",
    "categoryType": "subcat"
  }
});


const store = mockStore({});

describe('Testing getProducts()', () => {
  beforeEach(() => {
    store.clearActions();
  });
  it('should get GET_PRODUCTS', async () => {

    await store.dispatch(getProducts()).then(() => {
      let expectedActions = [{
        type: GET_PRODUCTS,
        payload: {
          data:
          {
            "id": "shop/new/all-new",
            "name": "All New",
            "categoryType": "subcat"
          }
        }
      }]
      expect(store.getActions()).toEqual(expectedActions);
    });

    //console.log(store.getActions())

  });
})
