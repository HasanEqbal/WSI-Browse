import React from 'react';
import Parser from 'html-react-parser';

export default function ProductDetails({ product }) {
    let productdeatils = product
    let { name } = productdeatils

    let regularPrice, originalPriceRangeLow, originalPriceRangeHigh, salePriceRangeHigh, salePriceRangeLow, salePrice;

    if (productdeatils.priceRange.regular) {
        originalPriceRangeHigh = productdeatils.priceRange.regular.high;
        originalPriceRangeLow = productdeatils.priceRange.regular.low
    } else if (productdeatils.price) {
        regularPrice = productdeatils.price.regular
    } else if (productdeatils.priceRange.selling) {
        salePriceRangeHigh = productdeatils.priceRange.selling.high;
        salePriceRangeLow = productdeatils.priceRange.selling.low
    } else {
        salePrice = productdeatils.price.selling
    }

    return (
        <div className="medium-6 large-5 columns">
            <h3>{Parser(name)}</h3>
            <div>
                {originalPriceRangeHigh ?
                    <span className="product-card-old-price">Original Price: ${originalPriceRangeLow}-${originalPriceRangeHigh}</span>
                    : regularPrice ?
                        <span className="product-card-old-price">Original Price: ${regularPrice}</span> : ""
                }
            </div>
            <div>
                <span className="product-card-sale-price">Sale Price: ${salePriceRangeHigh ? `${salePriceRangeLow} - $${salePriceRangeHigh}` : salePrice}</span>
            </div>
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
