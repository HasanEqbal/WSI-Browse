
import React, { useState } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';

export default function SlideShow() {

  const [images, setImages] = useState([
    "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg",
    "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
    "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg",
    "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
    "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/mountains.jpg",
    "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/redsky.jpg",
    "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/sandy-shores.jpg",
    "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg"
  ]);


  return (
    <div >
      <AwesomeSlider cssModule={AwesomeSliderStyles}>
        <div data-src="https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg" />
        <div data-src="https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg" />
        <div data-src="https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg" />
      </AwesomeSlider>
    </div>
  )
}
