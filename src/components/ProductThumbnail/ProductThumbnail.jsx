import React, { useState } from 'react';
import Parser from 'html-react-parser';
import { Link } from 'react-router-dom';
import './ProductThumbnail.scss';

export default function ProductThumbnail({ product }) {
  let { name, id } = product;

  let price = (product.priceRange ?
    (product.priceRange.regular.high + "-" + product.priceRange.regular.low) :
    product.price.regular);

  let salePrice = (product.priceRange ?
    (product.priceRange.selling.high + "-" + product.priceRange.selling.low) :
    product.price.selling);

  let image = product.thumbnail.href;

  return (
    <React.Fragment>
      <div className="cell thumbnail">
        <div className="product-card" >
          <div className="product-card-thumbnail">
            <Link to={`/shop/${id}`}><img src={image} alt={name} /></Link>
          </div>
          <h6 className="product-card-title">
            <Link to={`/shop/${id}`}>{Parser(name)}</Link></h6>
          <div>
            <span className="product-card-old-price">Original Price: ${price}</span>
          </div>
          <div>
            <span className="product-card-sale-price">Sale Price: ${salePrice}</span>
          </div>
        </div>
      </div>
    </React.Fragment >
  )
}

