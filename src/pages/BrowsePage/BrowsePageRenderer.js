import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../../actions';
import ProductThumbnail from '../../components/ProductThumbnail/ProductThumbnail';
import './BrowsePage.scss';
import BreadCrumb from '../../components/BeardCrumb/BreadCrumb';
import Carosuel from '../../components/Carosuel/Carosuel';

class BrowsePageRenderer extends Component {
  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    return (
      <div className="browse-page">
        <BreadCrumb />
        <div className="row product-thumbnail-container">
          {this.props.productsList ? this.props.productsList.map((item) => { return (<ProductThumbnail product={item} />) }) : <img src="../../ajax-loader.jpg"></img>}
        </div>
        <Carosuel />
      </div>
    );
  }
}

export function mapStateToProps(state) {
  return { productsList: state.productsList.groups };
}

export default {
  component: connect(mapStateToProps, { getProducts })(BrowsePageRenderer)
};
