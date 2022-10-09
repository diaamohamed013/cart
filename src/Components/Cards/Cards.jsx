import React from 'react'

export default function Cards(props) {
    let { item, cartItem, addToCart, removeFromCart, removeItem } = props;
    let { image, title, price } = item;
    return (
        <>
            {
                item.length !== null ?
                    <div className="col-lg-3 col-md-6">
                        <div className="card shadow h-100 p-3">
                            <div className="card-img d-flex justify-content-center my-3">
                                <img src={image} className="w-img" alt="product" />
                            </div>
                            <div className="card-body p-0">
                                <h5 className="card-title h6">{title}</h5>
                                <p className="card-price h6">$ {price}</p>
                            </div>
                            {
                                cartItem ?
                                    <>
                                        <div className="card-process-quantity d-flex justify-content-center align-items-baseline">
                                            <button className="btn text-danger mx-1 fs-5 border-0" onClick={() => removeFromCart(item)}>
                                                -
                                            </button>
                                            <span>{cartItem.quantity}</span>
                                            <button className="btn text-success mx-1 fs-5 border-0" onClick={() => addToCart(item)}>
                                                +
                                            </button>
                                        </div>
                                        <div className="itemRemover text-center">
                                            <button className="btn btn-danger text-white my-1" onClick={() => removeItem(item)}>
                                                Remove Item
                                            </button>
                                        </div>
                                    </>

                                    :
                                    <div className="card-process-add d-flex justify-content-center">
                                        <button className="btn btn-warning px-5 py-1 my-1" onClick={() => addToCart(item)}>
                                            Add To Cart
                                        </button>
                                    </div>

                            }
                        </div>

                    </div>
                    : ""
            }

        </>
    )
}
