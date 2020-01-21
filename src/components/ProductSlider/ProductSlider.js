import React from 'react';
import './ProductSlider.scss';
import { connect } from 'react-redux';
import { getProducts } from '../../actions';

export default function ProductSlider() {
  return (
    <div>
      <div class="ecommerce-product-slider orbit" role="region" aria-label="Favorite Space Pictures" data-orbit>
        <ul class="orbit-container">
          <button class="orbit-previous"><span class="show-for-sr">Previous Slide</span>&#9664;&#xFE0E;</button>
          <button class="orbit-next"><span class="show-for-sr">Next Slide</span>&#9654;&#xFE0E;</button>
          <li class="is-active orbit-slide">
            <div class="row small-up-2 medium-up-4 large-up-5 align-center">
              <div class="column">

              </div>
            </div>
          </li>
        </ul>
        <nav class="orbit-bullets">
          <button class="is-active" data-slide="0"><span class="show-for-sr">First slide details.</span><span class="show-for-sr">Current Slide</span></button>
          <button data-slide="1"><span class="show-for-sr">Second slide details.</span></button>
        </nav>
      </div>



    </div>
  )
}
