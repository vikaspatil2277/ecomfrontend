import React from 'react'
import Navbar from '../Components/Navbar'
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Carousel from 'react-bootstrap/Carousel';
import Footer from '../Components/Footer'

const DetailDescription = ({ addToCart, count }) => {
    const [data, setData] = useState([]);

    var { id } = useParams();
    id = Number(id);

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1)
    }

    useEffect(() => {
        axios.get("https://backend-ecommer-dq0g.onrender.com/products/alldata")
            .then((response) => setData(response.data))
            .catch((error) => console.log("Error", error))
    }, [])

    return (
        <>
            <Navbar count={count} />
            <MdOutlineArrowBackIosNew className='back-icon' onClick={goBack} />
            <div className='product-data-description-container'>
                <div className='product-data-description'>
                    {
                        data.filter((item) => { return item.id === id }).map((element, index) => (
                            <div className='product-data-description-details' key={index}>
                                <div id='carousel'>
                                    <Carousel slide={false}>
                                        <Carousel.Item >
                                            <img
                                                className="d-block w-100"
                                                src={element.productImage1}
                                                alt=""
                                                style={{ width: "10rem" }}
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100"
                                                src={element.productImage2}
                                                alt=""
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item >
                                            <img
                                                className="d-block w-100"
                                                src={element.productImage3}
                                                alt=""
                                            />
                                        </Carousel.Item>
                                    </Carousel >
                                </div>
                                <div className='product-data-description-rating-price'>
                                    <h5>{element.productTitle}</h5>
                                    <p className='product-description-rating'>Rating⭐ : {element.rating}</p>
                                    <p className='product-description-price'>&#x20b9; {element.productPrice}</p>
                                    <button onClick={() => { addToCart(element) }} className='product-data-description-page-add-to-cart-btn'>Add to Cart</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <hr />
            <Footer />
        </>
    )
}

export default DetailDescription