import React from 'react'
import './Basket.scss'

export default function Basket(props) {

    const { cartItems, addToCart, removeFromCart, removeItem } = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.quantity * c.price, 0);
    const taxPrice = itemsPrice * 0.14;
    const shippingPrice = itemsPrice > 2000 ? 0 : 20;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;
    return (
        <div className="cart">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 m-auto">
                        <h2 className='mb-4'>Cart Items</h2>
                        <div>
                            {cartItems.length === 0 && <div>Cart is empty</div>}
                            {cartItems.map((item) => (
                                <div key={item.id} className="items d-flex justify-content-between align-items-baseline">
                                    <img src={item.image} className="w-img-30" alt='productImage'></img>
                                    <div className="card-process-quantity">
                                        <button className="btn text-danger border-0" onClick={() => removeFromCart(item)}>
                                            -
                                        </button>
                                        <button className="btn text-success border-0" onClick={() => addToCart(item)}>
                                            +
                                        </button>
                                        <button className="btn text-warning border-0" onClick={() => removeItem(item)}>
                                            <i className="fa-solid fa-trash-can"></i>
                                        </button>

                                    </div>
                                    <p>
                                        {item.quantity} x ${item.price.toFixed(2)}
                                    </p>
                                </div>
                            ))}

                            {cartItems.length !== 0 && (
                                <>
                                    <hr></hr>
                                    <div className="itemPrice">
                                        <h3>Items Price</h3>
                                        <p>${itemsPrice.toFixed(2)}</p>
                                    </div>
                                    <div className="itemPrice">
                                        <h3>Tax Price</h3>
                                        <p>${taxPrice.toFixed(2)}</p>
                                    </div>
                                    <div className="itemPrice">
                                        <h3>Shipping Price</h3>
                                        <p>
                                            ${shippingPrice.toFixed(2)}
                                        </p>
                                    </div>

                                    <div className="itemPrice">
                                        <h3>
                                            Total Price
                                        </h3>
                                        <p>
                                            ${totalPrice.toFixed(2)}
                                        </p>
                                    </div>
                                    <hr />
                                    <div className="itemCheck text-center">
                                        <button className='btn btn-warning px-5 py-1' onClick={() => alert('Implement Checkout!')}>
                                            Checkout
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>

                </div>
            </div>


        </div>
    );

}
