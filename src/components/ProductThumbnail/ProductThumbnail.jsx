import React, { useState } from 'react';
import Parser from 'html-react-parser';
import { Link } from 'react-router-dom';
import './ProductThumbnail.scss';

export default function ProductThumbnail({ product }) {
  let { name, id } = product;
  let regularPrice, originalPriceRangeLow, originalPriceRangeHigh, salePriceRangeHigh, salePriceRangeLow, salePrice;
  if (product.priceRange.regular) {
    originalPriceRangeHigh = product.priceRange.regular.high;
    originalPriceRangeLow = product.priceRange.regular.low
  } else if (product.price) {
    regularPrice = product.price.regular
  } else if (product.priceRange.selling) {
    salePriceRangeHigh = product.priceRange.selling.high;
    salePriceRangeLow = product.priceRange.selling.low
  } else {
    salePrice = product.price.selling
  }


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
            {originalPriceRangeHigh ?
              <span className="product-card-old-price">Original Price: ${originalPriceRangeLow}-${originalPriceRangeHigh}</span>
              : regularPrice ?
                <span className="product-card-regular-price">Original Price: ${regularPrice}</span> : ""
            }
          </div>
          <div>
            <span className="product-card-sale-price">Sale Price: ${salePriceRangeHigh ? `${salePriceRangeLow} - $${salePriceRangeHigh}` : salePrice}</span>
          </div>
        </div>
      </div>
    </React.Fragment >
  )
}

