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
            <div className="row product-images">
                <ProductImages product={product} />
                <ProductDetails product={product} />
                <SimilarProductRenderer />
            </div>
        </React.Fragment>
    )
}



