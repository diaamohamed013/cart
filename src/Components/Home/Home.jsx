import React from 'react';
import Cards from '../Cards/Cards';
export default function Home(props) {

    let { products, addToCart, removeFromCart, removeItem, cartItems } = props;
    return (
        <>
            <div className="row g-3">
                {
                    products.map(item =>
                        <Cards key={item.id}
                            item={item}
                            cartItem={cartItems.find((p) => p.id === item.id)}
                            addToCart={addToCart}
                            removeFromCart={removeFromCart}
                            removeItem={removeItem} />
                    )

                }

            </div>
        </>
    )
}

