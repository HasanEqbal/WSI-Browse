import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../actions';
import ProductThumbnail from '../components/ProductThumbnail/ProductThumbnail';
import BreadCrumb from '../components/BeardCrumb/BreadCrumb';
import Carosuel from '../components/Carosuel/Carosuel';
import ProductSlider from '../components/ProductSlider/ProductSlider';

class Home extends Component {
  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    return (
      <React.Fragment>
        <BreadCrumb />
        <ProductSlider />
        <Carosuel />
      </React.Fragment>
    );
  }
}

export function mapStateToProps(state) {
  return { productsList: state.productsList.groups };
}

export default {
  component: connect(mapStateToProps, { getProducts })(Home)
};
