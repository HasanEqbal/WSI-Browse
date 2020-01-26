import React from 'react'

export default function LeftArrow({ goToPrevSlide }) {
  return (
    <div className="backArrow" onClick={goToPrevSlide}>
      <i className="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
    </div>
  )
}
