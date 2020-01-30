import React, { useState } from 'react';
import './ProductImages.scss';
import Overlay from '../Overlay/Overlay';
import AlertInfo from '../../helpers/AlertInfo/AlertInfo'

export default function ProductsImages({ product }) {
    const [mainImage, setMainImage] = useState(product.hero.href)
    const [displayCarosuel, setDisplayCarosuel] = useState(false)
    let { images } = product

    const closeOverLay = () => {
        setDisplayCarosuel(false)
    }

    return (
        <React.Fragment>
            {<div className="medium-6 columns">
                <a data-open="exampleModal8" onClick={() => { setDisplayCarosuel(true) }}>
                    <img className="thumbnail" src={mainImage} alt={name} />
                </a>
                <div className="row small-up-8">
                    {images ? images.map((image, index) => {
                        return (<div key={index} className="column">
                            <a>
                                <img className="thumbnail" src={image.href} onClick={(e) => { setMainImage(e.target.src) }} />
                            </a>
                        </div>)
                    }) : <AlertInfo message="Ohh, Alternative images are not available for this product." />}
                </div>
            </div>}
            {displayCarosuel && <Overlay closeoverlay={closeOverLay} images={images} />}
        </React.Fragment >
    )
}


