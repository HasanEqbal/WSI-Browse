import React from 'react';
import AlternativeImages from '../AlternativeImages/AlternativeImages';
import AlertInfo from '../AlertInfo/AlertInfo'

export default function Overlay(props) {

  let mainImage = props.product.hero.href;

  let alternativeImages = props.product.images;

  return (
    <div>
      <div className="reveal overlay-container" id="exampleModal1" data-reveal>
        <div className="row align-center">
          <div className="product-image-gallery">
            <img className="pdp-product-image" id="main-product-image" src={mainImage} alt="" />
            <br></br>
            <ul className="menu product-thumbs align-center">
              {alternativeImages ?
                alternativeImages.map((alternativeImage) => {
                  return <AlternativeImages alternativeimage={alternativeImage.href} />
                }) :
                <AlertInfo />}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )

}

