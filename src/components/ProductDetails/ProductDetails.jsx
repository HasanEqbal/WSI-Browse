import React from 'react';

export default function ProductDetails({ product }) {
    let productdeatils = product[0]
    let { name } = productdeatils
    let price = (productdeatils.priceRange ?
        (productdeatils.priceRange.regular.high + "-" + productdeatils.priceRange.regular.low) :
        productdeatils.price.regular);

    let salePrice = (productdeatils.priceRange ?
        (productdeatils.priceRange.selling.high + "-" + productdeatils.priceRange.selling.low) :
        productdeatils.price.selling);

    return (
        <div className="medium-6 large-5 columns">
            <h3>{name}</h3>
            <span className="product-card-old-price">Original Price: ${price}</span>
            <span className="product-card-sale-price">Sale Price: ${salePrice}</span>
            <p>Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque
              faucibus vestibulum. Nulla at nulla justo, eget luctus tortor. Nulla facilisi. Duis aliquet egestas purus in.
     </p>
            <label>Quantity
       <select>
                    <option value="husker">1</option>
                    <option value="starbuck">2</option>
                    <option value="hotdog">3</option>
                    <option value="apollo">4</option>
                    <option value="apollo">5</option>
                    <option value="apollo">6</option>
                </select>
            </label>
            <a href="#" className="button large expanded">Buy Now</a>
            <div className="small secondary expanded button-group">
                <a className="button">Facebook</a>
                <a className="button">Twitter</a>
                <a className="button">Instagram</a>
            </div>
        </div>
    )
}
