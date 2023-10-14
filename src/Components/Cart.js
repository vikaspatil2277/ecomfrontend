import React, { useEffect, useState } from 'react'
import './Components.css'
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import { RxCross1 } from 'react-icons/rx';
import Footer from './Footer';


const Cart = ({ cart, count }) => {
    const navigate = useNavigate();

    const [CART, setCART] = useState([]);


    useEffect(() => {
        setCART(cart)
    }, [cart])

    const goBack = () => {
        navigate(-1)
    }

    return (
        <>
            <Navbar count={count} />
            <MdOutlineArrowBackIosNew className='back-icon' onClick={goBack} />
            <h4 className='cart-heading'>CART</h4>
            <div className='cart-container'>
                <div className='cart'>
                    {
                        CART.map((cartItem, cartIndex) => {
                            return (
                                <>
                                    <div className='cart-data'>
                                        <img src={cartItem.productImage1} alt='' height={200} width={200}></img>
                                        <div>
                                            <p>{cartItem.productTitle}</p>
                                            <p className='cart-price'>&#x20b9; {cartItem.productPrice}</p>
                                            <div className='increment-decrement'>
                                                <button onClick={() => {
                                                    const _CART = CART.map((item, index) => {
                                                        return cartIndex === index ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity } : item
                                                    })
                                                    setCART(_CART)
                                                }} className='increment'><span className='minus'>-</span></button>
                                                <span className='cart-quantity'>{cartItem.quantity}</span>
                                                <button onClick={() => {
                                                    const _CART = CART.map((item, index) => {
                                                        return cartIndex === index ? { ...item, quantity: item.quantity + 1 } : item
                                                    })
                                                    setCART(_CART)
                                                }} className='decrement'><span className='plus'>+</span></button>
                                            </div>
                                        </div>
                                        <RxCross1 id='remove-icon' onClick={() => {
                                            const arr = CART.filter((item) => item.id !== cartItem.id)
                                            setCART(arr)
                                        }} />
                                    </div>
                                    <div className='cart-hr-container'>
                                        <hr className='cart-hr' />
                                    </div>
                                </>
                            )
                        })
                    }
                    <div className='total'>
                        <h4>TOTAL : &nbsp;
                            {
                                CART.map(item => item.productPrice * item.quantity).reduce((total, value) => total + value, 0)
                            }
                        </h4>
                    </div>
                </div>
            </div >
            <div className='checkout'>
                <button onClick={() => {
                    setCART(CART.length = 0)
                    alert("Order Placed Successfully")
                    navigate('/')
                }}>CHECKOUT</button>
            </div>
            <hr />
            <Footer />
        </>
    )
}

export default Cart