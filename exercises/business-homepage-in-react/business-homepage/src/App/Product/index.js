import React from "react";

function Product(props) {

    const { productClass, product, productLink, imageUrl, imageAlt, moreInfo } = props;

    return (
        <div className={productClass}>
            <h4>{product}</h4>
            <a href={productLink}>
                <img src={imageUrl} alt={imageAlt} />
                <p>{moreInfo}</p>
            </a>
        </div>
    )
}

export default Product;