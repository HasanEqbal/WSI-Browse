import React from 'react';
import ProductDetails from './ProductDetails';
import ProductImages from './ProductImages';
import SimilarProductRenderer from '../SimilarProducts/SimilarProductsRenderer'

export default function ProductDetailsPage({ productsList, match }) {
    let product = productsList.groups.filter(
        item => item.id === match.params.id
    );

    return (
        <React.Fragment>
            <div className="grid-x grid-padding-x small-up-1 medium-up-2 large-up-2">
                <ProductImages product={product} />
                <ProductDetails product={product} />
            </div>
            <SimilarProductRenderer />
        </React.Fragment>
    )
}



