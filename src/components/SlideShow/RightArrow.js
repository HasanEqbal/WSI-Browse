import React from 'react'

export default function RightArrow({ goToNextSlide }) {

  return (
    <div className="nextArrow" onClick={goToNextSlide}>
      <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
    </div>
  );

}
