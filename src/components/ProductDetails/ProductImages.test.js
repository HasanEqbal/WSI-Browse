import React from 'react';
import { shallow } from 'enzyme';
import ProductImages from './ProductImages';
const fixture = require('../../testData/testFixture.json');

describe('Component : ProductImages', () => {

  it('expect to render Product Images component', () => {
    const product = fixture.groups[0]
    expect(shallow(<ProductImages product={product} />)).toMatchSnapshot();
  })

  it('verify the clicking of alternative images should display as main image', () => {
    const product = fixture.groups[0]
    const event = {
      target: {
        src: 'some-url'
      }
    }
    const wrapper = shallow(<ProductImages product={product} />)
    wrapper.find('img.alt-image').at(0).simulate('click', event)
    expect(wrapper.find('img.main-image').at(0).props().src) === event.target.src
  })

  it('verify the clicking on main image overlay should display', () => {
    const product = fixture.groups[0]
    const event = {
      target: {
        src: 'some-url'
      }
    }
    const wrapper = shallow(<ProductImages product={product} />)
    wrapper.find('img.main-image').at(0).simulate('click', event)
    expect(wrapper.find('div.overlay')) === true
  })

})
