import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import {BottleObj} from '../helper'
import {MugsObj} from '../helper'

export const Latest_product = () => {

    return (
        <section className="product_section p_bottom p_section1 " id="section-template--14903323820135__1626597027f88d1895" data-section="FeaturedCollection">
            <div className="container">
                <div className="row">

                    <div className="col-12">
                        <div className="section_title">
                            <h2>Latest Bottle Products</h2>
                        </div>
                    </div>

                    <div className="col-12">

                        <div className="product_area ">
                            <div className="product_container bottom flex">
                                {
                                    BottleObj?.map((product) => {
                                        return (
                                            <div className='product-container' key={product?.id}>
                                                <div className='product-item-header w-100 mx-auto'>
                                                    <img src={product.Thumbnail} alt={product.title} className='w-100 h-100' />
                                                </div>
                                                <div className='product-detail-body mt-3'>
                                                    <div className='item-title'> <p>{product.title}</p></div>
                                                    <div className='item-desc'> <p>{product.description}</p> </div>
                                                    <div className='item-price d-flex font-weight-bold item-price justify-content-start text-body mt-3'>
                                                        <p className='buy-discounted-amount mr-3'>₹ {product.price} </p>
                                                        <p className='total-amount'><s>₹ {product.total_price} </s></p>
                                                    </div>
                                                    <span className='off-text'>{product.discount_text}</span>
                                                </div>
                                                <div className='product-footer '>
                                                    <Link to="item-details" className='d-flex justify-content-between'>
                                                        {/* <Button variant="outlined">Add to cart</Button> */}
                                                        <Button variant="outlined">View Details</Button>
                                                    </Link>
                                                </div>

                                            </div>)
                                    })
                                }
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <div className="row">

                    <div className="col-12">
                        <div className="section_title">
                            <h2>Latest Cups Varieties</h2>
                        </div>
                    </div>

                    <div className="col-12">

                        <div className="product_area ">

                        <div className="product_container bottom flex">
                                {
                                    MugsObj?.map((product) => {
                                        return (
                                            <div className='product-container' key={product?.id}>
                                                <div className='product-item-header w-100 mx-auto'>
                                                    <img src={product.Thumbnail} alt={product.title} className='w-100 h-100' />
                                                </div>
                                                <div className='product-detail-body mt-3'>
                                                    <div className='item-title'> <p>{product.title}</p></div>
                                                    <div className='item-desc'> <p>{product.description}</p> </div>
                                                    <div className='item-price d-flex font-weight-bold item-price justify-content-start text-body mt-3'>
                                                        <p className='buy-discounted-amount mr-3'>₹ {product.price} </p>
                                                        <p className='total-amount'><s>₹ {product.total_price} </s></p>
                                                    </div>
                                                    <span className='off-text'>{product.discount_text}</span>
                                                </div>
                                                <div className='product-footer '>
                                                    <Link to="item-details" className='d-flex justify-content-between'>
                                                        {/* <Button variant="outlined">Add to cart</Button> */}
                                                        <Button variant="outlined">View Details</Button>
                                                    </Link>
                                                </div>

                                            </div>)
                                    })
                                }
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
