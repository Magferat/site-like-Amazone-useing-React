import React from 'react';

const Cart = (props) => {
    const { cart } = props;
    let Price = 0;
    for (const product of cart) {
        // const price = ;
        Price = Price + product.price;
        // console.log(total);
    }
    const shipping = Price > 0 ? 15 : 0;
    const tax = (Price + shipping) * 0.10;
    const total = (shipping + tax + Price)

    return (
        <div>
            <h4>Order Summery</h4>
            <h5>Items Orderd : {props.cart.length}</h5>
            <h6>Price : {Price.toFixed(2)}</h6>
            <h6>Shipping : {shipping.toFixed(2)}</h6>
            <h6>Tax : {tax.toFixed(2)}</h6>
            <h6>Total : {total.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;