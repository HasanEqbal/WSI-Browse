import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import SimilarProducts from './SimilarProducts';
import ProductThumbnail from '../../components/ProductThumbnail/ProductThumbnail';


const fixture = require('../../testData/testFixture.json');

describe('Component : SimilarProduct', () => {

  it('expect to render Similar Product component', () => {
    expect(shallow(<SimilarProducts productsList={fixture} />)).toMatchSnapshot();
  })

  it('verifying rendering of productThumbnail component in Similar Product component', () => {
    const groups = fixture.groups
    const wrapper = mount(
      <MemoryRouter>
        <SimilarProducts productsList={fixture} />
      </MemoryRouter>
    )
    expect(wrapper.contains(<ProductThumbnail product={groups[0]} />)).toBe(true);
    expect(wrapper.contains(<ProductThumbnail product={groups[3]} />)).toBe(true);
    expect(wrapper.contains(<ProductThumbnail product={groups[4]} />)).toBe(false);
  })
})
