import React from 'react';
import { Link } from "react-router-dom"
import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';
import './Overlay.scss'
import SlideShow from '../SlideShow/SlideShow'

export default function Overlay(props) {

  console.log(props)
  let alternativeImages = props.images;


  return (
    <div className="reveal large overlay" id="settings-modal" data-reveal data-overlay>
      <AwesomeSlider cssModule={AwesomeSliderStyles}>
        {alternativeImages.map((image, index) => {
          return <div key={index} data-src={image.href} />
        })}
      </AwesomeSlider>
      <Link href="#" class="close-button" data-close aria-label="Close modal" type="button">
        <span aria-hidden="true">&times;</span>
      </Link>
    </div>
  )
}

