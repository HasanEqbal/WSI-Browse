import React from 'react';
import ProductThumbnail from '../ProductThumbnail/ProductThumbnail';

export default function SimilarProducts({ productsList }) {
    let similarProducts = productsList.groups

    return (
        <div className="similar-products-section">
            <div className="grid-x grid-padding-x small-up-1 medium-up-1 large-up-1">
                <h5 className="subheader primary">Similar Products</h5>
            </div>
            <div className="grid-x grid-padding-x small-up-1 medium-up-3 large-up-4">
                {similarProducts ? similarProducts.filter((item, index) => index < 4).map((item, index) => {
                    return <ProductThumbnail key={index} product={item} />
                }) : <div>Similar Product not found</div>}
            </div>
        </div>
    )
}
