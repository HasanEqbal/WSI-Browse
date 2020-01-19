import React from 'react';
import './BreadCrumb.scss';

export default function BreadCrumb() {
  return (
    <React.Fragment>
      <ul className="breadcrumbs">
        <li><a href="#">Home</a></li>
        <li><a href="#">Features</a></li>
        <li className="disabled">Gene Splicing</li>
        <li>
          <span className="show-for-sr">Current: </span> Cloning
    </li>
      </ul>
    </React.Fragment>
  )
}
