import React from 'react';
import ProductDetails from './ProductDetails';
import ProductImages from './ProductImages';
import SimilarProductRenderer from '../SimilarProducts/SimilarProductsRenderer';
import loadingIndicator from '../../Images/loading-indicator-main.jpeg';

export default function ProductDetailsPage({ productsList, match }) {
    return (
        <React.Fragment>
            {productsList.groups ? productsList.groups.filter(item => item.id === match.params.id).map((product, index) => {
                return (
                    <React.Fragment key={index} >
                        <div className="grid-x grid-padding-x small-up-1 medium-up-2 large-up-2">
                            <ProductImages product={product} />
                            <ProductDetails product={product} />
                        </div>
                        <SimilarProductRenderer />
                    </React.Fragment>)
            }) : <img className="loading-indicator" src={loadingIndicator}></img>}
        </React.Fragment>
    )
}



