import React from 'react';

export default function AlternativeImages(props) {

  let { alternativeimage } = props

  return (
    <React.Fragment>
      <li> <a className="sim-thumb" data-image="https://placehold.it/350x350?text=Image+1"><img src={alternativeimage} alt="" /></a> </li>
    </React.Fragment>
  )
}
