import React from 'react';
import './Footer.scss';

export default function FooterColumns({ value }) {
  return (
    <div>
      <ul className="footer-columns">
        {
          value.map((value, index) => <li key={index}>
            <a href="#" key={index}>{value}></a>
          </li>)
        }
      </ul>
    </div>
  )
}
