import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';
import './Overlay.scss';

export default function Overlay({ images, closeoverlay }) {
  return (
    <div className="overlay">
      <AwesomeSlider cssModule={AwesomeSliderStyles}>
        {images.map((image, index) => {
          return <div key={index} data-src={image.href} />
        })}
      </AwesomeSlider>
      <button class="close-button" data-close aria-label="Close modal" type="button" onClick={closeoverlay}>
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  )
}
