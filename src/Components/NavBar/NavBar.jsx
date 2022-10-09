import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.scss'

export default function NavBar(props) {
    let { cartItems } = props
    return (
        <>
            <nav className='bg-white shadow navbar-light'>
                <div className="container">
                    <div className="links d-flex justify-content-between align-items-baseline p-3">
                        <Link className='navbar-brand' to="home">
                            <h2>
                                Shopping Cart
                            </h2>
                        </Link>
                        <Link className='text-dark' to ="basket">
                            <i className="fa-solid fa-cart-shopping">

                                {
                                    cartItems !== 0 ?
                                        <span className='quantity'>
                                            <span className="quantity-number">{cartItems}</span>
                                        </span>

                                        :
                                        ""
                                }

                            </i>
                        </Link>
                    </div>

                </div>

            </nav>


        </>
    )
}
