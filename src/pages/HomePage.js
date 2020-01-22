import React, { Component } from 'react';
import ProductSlider from '../components/ProductSlider/ProductSlider';

class Home extends Component {

  render() {
    return (
      <React.Fragment>
        <ProductSlider />
      </React.Fragment>
    );
  }
}

export default {
  component: (Home)
};
