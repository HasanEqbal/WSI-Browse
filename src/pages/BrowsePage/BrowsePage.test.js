import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import BrowsePage from './BrowsePage';
import BreadCrumb from '../../components/BeardCrumb/BreadCrumb';
import ProductThumbnail from '../../components/ProductThumbnail/ProductThumbnail';
const fixture = require('../../testData/testFixture.json');

describe('Component : BrowsePage', () => {

  it('expect to render BrowsePage component', () => {
    expect(shallow(<BrowsePage productsList="productsList" />)).toMatchSnapshot();
  })

  it('verifying rendering of BreadCrumb component', () => {
    const productlist = { name: "All New" }
    const wrapper = mount(<BrowsePage productsList={productlist} />)
    expect(wrapper.contains(<BreadCrumb categoryname={productlist.name} />)).toBe(true);
  })

  it('verifying rendering of productThumbnail component', () => {
    const groups = fixture.groups
    const wrapper = mount(
      <MemoryRouter>
        <BrowsePage productsList={fixture} />
      </MemoryRouter>
    )
    expect(wrapper.contains(<ProductThumbnail product={groups[0]} />)).toBe(true);
    expect(wrapper.contains(<ProductThumbnail product={groups[groups.length - 1]} />)).toBe(true);
  })

  it('verifying image loader display when data is loading', () => {
    const productlist = {}
    const wrapper = mount(<BrowsePage productsList={productlist} />)
    expect(wrapper.find('img.loading-indicator').length).toBe(1);
  })

})
