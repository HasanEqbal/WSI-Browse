import React from 'react';
import { shallow, mount } from 'enzyme';
import ProductDetails from './ProductDetails'
const fixture = require('../../testData/testFixture.json');

describe('Component : Product Details', () => {

  it('expect to render Product Details component', () => {
    const product = fixture.groups[0]
    expect(shallow(<ProductDetails product={product} />)).toMatchSnapshot();
  })

  it('verify that product name should display', () => {
    const product = fixture.groups[0];
    const wrapper = shallow(<ProductDetails product={product} />)
    expect(wrapper.find('h3')) === fixture.groups[0].name
  })

  it('verify that original product price should display', () => {
    const productdetails = {
      name: "belgian-linen-embroidery-duvet-cover-shams-slate-white-b3024",
      priceRange: {
        regular: {
          high: 400,
          low: 40
        }
      }

    }
    const wrapper = shallow(<ProductDetails product={productdetails} />)
    expect(wrapper.find('product-card-old-price')) === `Original Price: ${productdetails.priceRange.regular.low}-${productdetails.priceRange.regular.high}`
  })

  it('verify that sale product price should display', () => {
    const productdetails = {
      name: "belgian-linen-embroidery-duvet-cover-shams-slate-white-b3024",
      priceRange: {
        selling: {
          high: 400,
          low: 40
        }
      }

    }
    const wrapper = shallow(<ProductDetails product={productdetails} />)
    expect(wrapper.find('product-card-sale-price')) === `Sale Price: ${productdetails.priceRange.selling.low}-${productdetails.priceRange.selling.high}`
  })

  it('verify that regular product price should display', () => {
    const productdetails = {
      name: "belgian-linen-embroidery-duvet-cover-shams-slate-white-b3024",
      price: {
        regularPrice: 400
      }
    }
    const wrapper = shallow(<ProductDetails product={productdetails} />)
    expect(wrapper.find('product-card-regular-price')) === `Original Price: ${productdetails.price.regularPrice}`
  })

  it('verify that selling product price should display', () => {
    const productdetails = {
      name: "belgian-linen-embroidery-duvet-cover-shams-slate-white-b3024",
      price: {
        selling: 400
      }
    }
    const wrapper = shallow(<ProductDetails product={productdetails} />)
    expect(wrapper.find('product-card-sale-price')) === `Sale Price: ${productdetails.price.selling}`
  })
})
