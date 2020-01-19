import React, { Component } from 'react';
import ProductThumbnail from '../../components/ProductThumbnail/ProductThumbnail';
import './BrowsePage.scss';

class BrowsePage extends Component {

  render() {
    return (
      <div className="row product-thumnail-container">
        {this.props.productsList ? this.props.productsList.map((item) => { return (<ProductThumbnail product={item} />) }) : console.log('error')}
      </div>
    );
  }
}

export default BrowsePage;
