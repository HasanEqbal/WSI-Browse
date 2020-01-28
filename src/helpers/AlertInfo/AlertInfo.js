import React from 'react';

export default function AlertInfo({ message }) {
  return (
    <div data-closable class="alert-box callout info">
      <i class="fa fa-eye"></i> {message}
      <button class="close-button" aria-label="Dismiss alert" type="button" data-close>
        <span aria-hidden="true">&CircleTimes;</span>
      </button>
    </div>
  )
}
