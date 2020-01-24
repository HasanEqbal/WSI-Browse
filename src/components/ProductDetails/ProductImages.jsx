import React, { useState } from 'react';
import './ProductImages.scss';
import Overlay from '../Overlay/Overlay'

export default function ProductsImages({ product }) {
    const [mainImage, setMainImage] = useState(product[0].hero)
    const [displayCarosuel, setDisplayCarosuel] = useState(false)
    let { images } = product[0]
    return (
        <React.Fragment>
            {<div className="medium-6 columns">
                <a>
                    <img className="thumbnail" onClick={() => { setDisplayCarosuel(true) }} src={mainImage} />
                </a>
                <div className="row small-up-8">
                    {images ? images.map((image, index) => {
                        return (<div key={index} className="column">
                            <a>
                                <img className="thumbnail" src={image.href} onClick={(e) => { setMainImage(e.target.src) }} />
                            </a>
                        </div>)
                    }) : <h4>Product Does not have alternative images</h4>}
                </div>
            </div>}
            {displayCarosuel && <Overlay images={images} />}
        </React.Fragment >
    )
}


