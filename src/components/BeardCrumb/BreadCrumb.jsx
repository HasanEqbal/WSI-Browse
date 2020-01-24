import React from 'react';
import './BreadCrumb.scss';

export default function BreadCrumb({ categoryname }) {
  return (
    <React.Fragment>
      <ul className="breadcrumbs grid-x grid-padding-x large-up-3">
        <li><a href="#">Cookware</a></li>
        <li><a href="#">Features</a></li>
        <li className="disabled">Gene Splicing</li>
        <li>
          <span className="show-for-sr">Current: </span> {categoryname}
        </li>
      </ul>
    </React.Fragment>
  )
}
