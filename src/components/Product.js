import React from 'react';

function Product({img, title, description}) {

    return (
        <article className="product">
            <img src={img} alt={title}/>
            <h2 className="product-name">{title}</h2>
            <p className="product-description">{description}</p>
        </article>
    );
}

export default Product;