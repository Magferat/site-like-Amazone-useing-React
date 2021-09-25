import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Products from '../Product/Products';
import "./Shop.css"
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([]);

    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setDisplayProducts(data)
                setProducts(data)
            })
    }, [])

    const handelEvent = (product) => {

        const newCart = [...cart, product];
        setCart(newCart);
        console.log(newCart);
    }
    const handelInput = event => {
        const searchText = event.target.value;
        const displayResult = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()))
        setDisplayProducts(displayResult);
        console.log(displayResult.length);

    }

    return (
        <>
            <div className="input"><input
                type="text"
                onChange={handelInput}
                placeholder="Search The Product You Want" /></div>
            <div className="shop">
                <div className="products">
                    {
                        displayProducts.map(product => <Products
                            key={product.key}
                            product={product}
                            handelEvent={handelEvent}
                        ></Products>)
                    }
                </div>
                <div className="memo">

                    <Cart
                        cart={cart}
                    ></Cart>
                </div>
            </div>
        </>
    );
};

export default Shop;