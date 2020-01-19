import React from 'react';

export default function AlertInfo() {
  return (
    <div data-closable class="alert-box callout info">
      <i class="fa fa-eye"></i> Ohh, Alternative images are not available for this product.
  <button class="close-button" aria-label="Dismiss alert" type="button" data-close>
        <span aria-hidden="true">&CircleTimes;</span>
      </button>
    </div>
  )
}
