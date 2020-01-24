import React, { Component } from 'react';
import { connect } from 'react-redux';
import { lifecycle, compose } from 'recompose';
import { getProducts } from '../../actions';
import ProductThumbnail from '../../components/ProductThumbnail/ProductThumbnail';
import './BrowsePage.scss';
import BreadCrumb from '../../components/BeardCrumb/BreadCrumb';
import Carosuel from '../../components/Carosuel/Carosuel';
import BrowsePage from './BrowsePage';


const mapStateToProps = (state) => {
  return { productsList: state.productsList };
};

const reduxConnector = connect(mapStateToProps, { getProducts });

const lifecycleHandlers = lifecycle({
  componentDidMount() {
    this.props.getProducts();
  }
});

export default compose(
  reduxConnector,
  lifecycleHandlers,
)(BrowsePage);

