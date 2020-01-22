import React, { Component } from 'react';
import './ProductSlider.scss';
import { connect } from 'react-redux';
import { getProducts } from '../../actions';
import ProductThumbnail from '../ProductThumbnail/ProductThumbnail';



class ProductSlider extends Component {
  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    return (
      <div>
        {this.props.productsList ? this.props.productsList.map((item) => { return (<ProductThumbnail product={item} />) }) : <img src="../../ajax-loader.jpg"></img>}
      </div>

    );
  }
}

export function mapStateToProps(state) {
  return { productsList: state.productsList.groups };
}

export default connect(mapStateToProps, { getProducts })(ProductSlider)
