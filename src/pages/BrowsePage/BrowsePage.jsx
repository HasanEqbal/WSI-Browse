import React from 'react';
import BreadCrumb from '../../components/BeardCrumb/BreadCrumb';
import ProductThumbnail from '../../components/ProductThumbnail/ProductThumbnail';
import './BrowsePage.scss';
import loadingIndicator from '../../Images/loading-indicator-main.jpeg';

function BrowsePage({ productsList }) {
  let { groups, name } = productsList;
  return (
    <React.Fragment>
      <BreadCrumb categoryname={name} />
      <div className="grid-x grid-padding-x small-up-1 medium-up-3 large-up-3">
        {groups ? groups.map((item, index) => {
          return (<ProductThumbnail key={index} product={item} />)
        }) : <img className="loding-indicator" src={loadingIndicator}></img>}
      </div>
    </React.Fragment>
  );

}

export default BrowsePage;
