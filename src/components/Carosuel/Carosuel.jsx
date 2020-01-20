import React from 'react';
import './Carosuel.scss';

export default function Carosuel(props) {
    let { alternativeimage, index } = props
    console.log(alternativeimage, index)
    return (
        <React.Fragment>
            <div id={`slide-${index+1}`}>
                <img src={alternativeimage} />
            </div>
        </React.Fragment>
    )
}

