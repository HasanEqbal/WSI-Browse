import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import ProductDetailsPage from './ProductDetailsPage';
import ProductImages from './ProductImages';
import ProductDeatils from './ProductDetails';
import SimilarProduct from '../SimilarProducts/SimilarProducts'

const mockStore = configureMockStore();
const store = mockStore({});

const fixture = require('../../testData/testFixture.json');

describe('Component : ProductDetailsPage', () => {

  it('expect to render ProductDetailsPage component', () => {
    const product = fixture.groups[0]
    const match = {
      params: {
        id: "belgian-linen-embroidery-duvet-cover-shams-slate-white-b3024"
      }
    }
    expect(shallow(<ProductDetailsPage productsList={product} match={match} />)).toMatchSnapshot();
  })

  it('verifying rendering of Product images component', () => {
    const product = fixture.groups[0]
    const match = {
      params: {
        id: "belgian-linen-embroidery-duvet-cover-shams-slate-white-b3024"
      }
    }
    const wrapper = mount(<ProductDetailsPage productsList={product} match={match} />)
    expect(wrapper.contains(<ProductImages product={product[0]} />)).toBe(true);
  })
  it('verifying rendering of Product details component', () => {
    const product = fixture.groups[0]
    const match = {
      params: {
        id: "belgian-linen-embroidery-duvet-cover-shams-slate-white-b3024"
      }
    }
    const wrapper = mount(<Provider store={store}><ProductDetailsPage productsList={product} match={match} /></Provider>)
    expect(wrapper.contains(<ProductDeatils product={fixture.groups[0]} />)).toBe(true);
  })
  it('verifying rendering of Similar Product component', () => {
    const product = fixture.groups[0]
    const match = {
      params: {
        id: "belgian-linen-embroidery-duvet-cover-shams-slate-white-b3024"
      }
    }
    const wrapper = mount(<Provider store={store}><ProductDetailsPage productsList={product} match={match} /></Provider>)
    expect(wrapper.contains(<SimilarProduct />)).toBe(true);
  })

  it('verifying image loader display when data is loading', () => {
    const productlist = {}
    const wrapper = mount(<ProductDetailsPage productsList={productlist} />)
    expect(wrapper.find('img.loading-indicator').length).toBe(1);
  })
})
