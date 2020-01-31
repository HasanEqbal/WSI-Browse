import React from 'react';
import { shallow } from 'enzyme';
import BreadCrumb from './BreadCrumb';

describe('Component : BreadCrumb', () => {

  it('expect to render BreadCrumb component', () => {
    const wrapper = shallow(<BreadCrumb />)
    expect(wrapper.exists()).toBe(true);
  })

})




