import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router';
import ProductThumbnail from './ProductThumbnail'
const fixture = require('../../testData/testFixture.json');

describe('Component : Product Details', () => {

  it('expect to render Product Details component', () => {
    const product = fixture.groups[0]
    expect(shallow(<ProductThumbnail product={product} />)).toMatchSnapshot();
  })

  it('verify that product name should display', () => {
    const product = fixture.groups[0];
    const wrapper = shallow(<ProductThumbnail product={product} />)
    expect(wrapper.find('h3')) === fixture.groups[0].name
  })

  it('verify that product image should display', () => {
    const productdetails = {
      name: "belgian-linen-embroidery-duvet-cover-shams-slate-white-b3024",
      thumbnail: {
        href: "https://www.westelm.com/weimgs/rk/images/wcm/products/202003/0005/belgian-linen-ladder-stripe-embroidery-duvet-cover-shams-s-m.jpg"
      },
      priceRange: {
        regular: {
          high: 400,
          low: 40
        }
      }

    }
    const wrapper = shallow(<ProductThumbnail product={productdetails} />)
    expect(wrapper.find('img').prop("src")) === productdetails.thumbnail.href
  })

  it('verify that original product price should display', () => {
    const productdetails = {
      name: "belgian-linen-embroidery-duvet-cover-shams-slate-white-b3024",
      thumbnail: {
        href: "https://www.westelm.com/weimgs/rk/images/wcm/products/202003/0005/belgian-linen-ladder-stripe-embroidery-duvet-cover-shams-s-m.jpg"
      },
      priceRange: {
        regular: {
          high: 400,
          low: 40
        }
      }
    }
    const wrapper = shallow(<ProductThumbnail product={productdetails} />)
    expect(wrapper.find('product-card-old-price')) === `Original Price: ${productdetails.priceRange.regular.low}-${productdetails.priceRange.regular.high}`
  })

  it('verify that sale product price should display', () => {
    const productdetails = {
      name: "belgian-linen-embroidery-duvet-cover-shams-slate-white-b3024",
      thumbnail: {
        href: "https://www.westelm.com/weimgs/rk/images/wcm/products/202003/0005/belgian-linen-ladder-stripe-embroidery-duvet-cover-shams-s-m.jpg"
      },
      priceRange: {
        selling: {
          high: 400,
          low: 40
        }
      }

    }
    const wrapper = shallow(<ProductThumbnail product={productdetails} />)
    expect(wrapper.find('product-card-sale-price')) === `Sale Price: ${productdetails.priceRange.selling.low}-${productdetails.priceRange.selling.high}`
  })

  it('verify that regular product price should display', () => {
    const productdetails = {
      name: "belgian-linen-embroidery-duvet-cover-shams-slate-white-b3024",
      thumbnail: {
        href: "https://www.westelm.com/weimgs/rk/images/wcm/products/202003/0005/belgian-linen-ladder-stripe-embroidery-duvet-cover-shams-s-m.jpg"
      },
      price: {
        regularPrice: 400
      }
    }
    const wrapper = shallow(<ProductThumbnail product={productdetails} />)
    expect(wrapper.find('product-card-regular-price')) === `Original Price: ${productdetails.price.regularPrice}`
  })

  it('verify that selling product price should display', () => {
    const productdetails = {
      name: "belgian-linen-embroidery-duvet-cover-shams-slate-white-b3024",
      thumbnail: {
        href: "https://www.westelm.com/weimgs/rk/images/wcm/products/202003/0005/belgian-linen-ladder-stripe-embroidery-duvet-cover-shams-s-m.jpg"
      },
      price: {
        selling: 400
      }
    }
    const wrapper = shallow(<ProductThumbnail product={productdetails} />)
    expect(wrapper.find('product-card-sale-price')) === `Sale Price: ${productdetails.price.selling}`
  })

  it('verify that clicking on the image user should navigate to Product detail page', () => {
    const productdetails = {
      name: "belgian-linen-embroidery-duvet-cover-shams-slate-white-b3024",
      id: "belgian-linen-embroidery-duvet-cover-shams-slate-white-b3024",
      thumbnail: {
        href: "https://www.westelm.com/weimgs/rk/images/wcm/products/202003/0005/belgian-linen-ladder-stripe-embroidery-duvet-cover-shams-s-m.jpg"
      },
      price: {
        selling: 400
      }
    }
    const wrapper = shallow(<ProductThumbnail product={productdetails} />)
    expect(wrapper.find('.product-main-image').props().to).toEqual('/shop/belgian-linen-embroidery-duvet-cover-shams-slate-white-b3024')
  })

  it('verify that clicking on product name user should navigate to Product detail page', () => {
    const productdetails = {
      name: "belgian-linen-embroidery-duvet-cover-shams-slate-white-b3024",
      id: "belgian-linen-embroidery-duvet-cover-shams-slate-white-b3024",
      thumbnail: {
        href: "https://www.westelm.com/weimgs/rk/images/wcm/products/202003/0005/belgian-linen-ladder-stripe-embroidery-duvet-cover-shams-s-m.jpg"
      },
      price: {
        selling: 400
      }
    }
    const wrapper = shallow(<ProductThumbnail product={productdetails} />)
    expect(wrapper.find('.product-name').props().to).toEqual('/shop/belgian-linen-embroidery-duvet-cover-shams-slate-white-b3024')
  })


})
