import React from 'react';

export default function SimilarProducts({ productsList }) {
    let similarProducts = productsList.groups


    return (
        <React.Fragment>
            <button className="button expanded similar-products">Similar Products</button>
            <div className="row medium-up-3 large-up-5">
                {similarProducts ? similarProducts.filter((item, index) => index < 5).map((item) => {
                    let { name } = item
                    let { href } = item.hero
                    let price = (item.priceRange ?
                        (item.priceRange.regular.high + "-" + item.priceRange.regular.low) :
                        item.price.regular);

                    let salePrice = (item.priceRange ?
                        (item.priceRange.selling.high + "-" + item.priceRange.selling.low) :
                        item.price.selling);
                    return (<div className="column similar-product-details">
                        <img className="thumbnail" src={href} />
                        <h6>{name} <small>${salePrice}</small></h6>
                        <div className="product-description">
                            <p>In condimentum facilisis porta. Sed nec diam eu diam mattis viverra. Nulla fringilla, orci ac euismod
              semper, magna diam.</p>
                        </div>
                        <a href="#" className="button hollow tiny expanded">Buy Now</a>
                    </div>
                    )
                }) : <div>Similar Product not found</div>}
            </div>
        </React.Fragment>
    )
}
