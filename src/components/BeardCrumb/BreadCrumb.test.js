import React from 'react';
import { shallow } from 'enzyme';
import BreadCrumb from './BreadCrumb';

describe('Component : BreadCrumb', () => {

  it('expect to render BreadCrumb component', () => {
    expect(shallow(<BreadCrumb />)).toMatchSnapshot();
  })

  it('expect to render BreadCrumb component', () => {
    const wrapper = shallow(<BreadCrumb categoryname="New all" />)
    console.log('yyyyyyyy', wrapper.prop)
    expect(wrapper.prop('categoryname')).toEqual('New all')
  })

})




