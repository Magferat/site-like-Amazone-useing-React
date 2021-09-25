import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Product.css'

const Products = (props) => {
    // console.log(props)
    const { name, price, seller, stock, img, star, starcount } = props.product;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="product">
            <div ><img src={img} alt="" /></div>
            <div className="info">
                <h4>{name.slice(0, 56)}</h4>
                <p><small>by : {seller} </small><br /> stock : {stock} <br /> </p>
                <h5>Price :{price} </h5>
                <button onClick={() => props.handelEvent(props.product)} className="btn">{element} Add to cart</button>
            </div>
        </div>
    );
};

export default Products;