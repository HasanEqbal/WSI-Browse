import React from 'react';
import Parser from 'html-react-parser';

export default function ProductDetails({ product }) {

    const {
        name,
        price,
        priceRange,
    } = product;

    let regularHigh
    let regularLow
    let sellingHigh
    let sellingLow

    if (priceRange) {
        if (priceRange.regular) {
            regularHigh = priceRange.regular.high;
            regularLow = priceRange.regular.low;
        }

        if (priceRange.selling) {
            sellingHigh = priceRange.selling.high;
            sellingLow = priceRange.selling.low;
        }
    }

    let regularPrice
    let sellingPrice

    if (price) {
        regularPrice = price.regular
        if (price.selling) {
            sellingPrice = price.selling
        }
    }


    return (
        <div className="medium-6 large-5 columns">
            <h3 className="product-title">{Parser(name)}</h3>
            <div>
                {regularHigh ?
                    <span className="product-card-old-price">Original Price: ${regularLow}-${regularHigh}</span>
                    : regularPrice ?
                        <span className="product-card-regular-price">Original Price: ${regularPrice}</span> : ""
                }
            </div>
            <div>
                <span className="product-card-sale-price">Sale Price: ${sellingHigh ? `${sellingLow} - $${sellingHigh}` : sellingPrice}</span>
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
