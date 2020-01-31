import React, { useState } from 'react';
import Parser from 'html-react-parser';
import { Link } from 'react-router-dom';
import './ProductThumbnail.scss';

export default function ProductThumbnail({ product }) {
  const {
    name,
    id,
    price,
    priceRange,
  } = product;

  let regularHigh
  let regularLow
  let sellingHigh
  let sellingLow

  if (priceRange) {
    if (priceRange.regular) {
      regularHigh = priceRange.regular.high;
      regularLow = priceRange.regular.low;
    }

    if (priceRange.selling) {
      sellingHigh = priceRange.selling.high;
      sellingLow = priceRange.selling.low;
    }
  }

  let regularPrice
  let sellingPrice

  if (price) {
    regularPrice = price.regular
    if (price.selling) {
      sellingPrice = price.selling
    }
  }

  let image = product.thumbnail.href;

  return (
    <React.Fragment>
      <div className="cell thumbnail">
        <div className="product-card" >
          <div className="product-card-thumbnail">
            <Link className="product-main-image" to={`/shop/${id}`}><img src={image} alt={name} /></Link>
          </div>
          <h6 className="product-card-title">
            <Link className="product-name"to={`/shop/${id}`}>{Parser(name)}</Link></h6>
          <div>
            {regularHigh ?
              <span className="product-card-old-price">
                Original Price: ${regularLow}-${regularHigh}
              </span>
              : regularPrice ?
                <span className="product-card-regular-price">
                  Original Price: ${regularPrice}
                </span> : ""
            }
          </div>
          <div>
            <span className="product-card-sale-price">
              Sale Price: ${sellingHigh
                ? `${sellingLow} - $${sellingHigh}`
                : sellingPrice
              }
            </span>
          </div>
        </div>
      </div>
    </React.Fragment >
  )
}

