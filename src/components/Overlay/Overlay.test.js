import React from 'react';
import { shallow } from 'enzyme';
import Overlay from './Overlay';


describe('Component : Overlay', () => {

  it('expect to render Overlay component', () => {
    expect(shallow(<Overlay />)).toMatchSnapshot();
  })

})
