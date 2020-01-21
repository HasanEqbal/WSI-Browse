import React from 'react';
import './Footer.scss';


export default function FooterColumns({ value }) {
  return (
    <div>
      <ul className="moviesByGenre">
        {value.map((value, index) => <a href="#">
          <li href="#" key={index}>{value}
          </li>
        </a>)}
      </ul>
    </div>
  )
}