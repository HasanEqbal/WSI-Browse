import React from 'react';
import AlternativeImages from '../AlternativeImages/AlternativeImages';
import AlertInfo from '../AlertInfo/AlertInfo';
import Carosuel from '../Carosuel/Carosuel';

export default function Overlay(props) {


  let alternativeImages = props.images;
  console.log(alternativeImages)

  return (
    <div>
      <div className="reveal overlay-container" id="exampleModal1" data-reveal>
        <div class="slider">
          <div class="slides">
            {alternativeImages ?
              alternativeImages.map((alternativeImage, index) => {
                return (
                  <Carosuel index={index} alternativeimage={alternativeImage.href} />
                )
              }) :
              <AlertInfo />}
          </div>
        </div>
      </div>
    </div>
  )

}

