import React, { useState } from 'react';
import './ProductThumbnail.scss';
import Overlay from '../Overlay/Overlay';

export default function ProductThumbnail({ product }) {

  const [modalShow, setModalShow] = useState(false);

  let { name } = product;

  let price = (product.priceRange ?
    (product.priceRange.regular.high + "-" + product.priceRange.regular.low) :
    product.price.regular);

  let salePrice = (product.priceRange ?
    (product.priceRange.selling.high + "-" + product.priceRange.selling.low) :
    product.price.selling);

  let image = product.thumbnail.href;

  return (
    <React.Fragment>
      <div className="columns small-12 large-expand thumbnail">
        <div className="product-card" >
          <div className="product-card-thumbnail">
            <a href="#" onClick={() => setModalShow(true)}><img src={image} alt={name} /></a>
          </div>
          <h6 className="product-card-title"><a href="#">{name}</a></h6>
          <span className="product-card-old-price">${price}</span><span className="product-card-sale-price">${salePrice}
          </span>
        </div>
      </div>
      {modalShow && <Overlay product={product} />}
    </React.Fragment >
  )

}

