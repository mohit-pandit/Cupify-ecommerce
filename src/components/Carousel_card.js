import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../assets/css/swiper_slider.css';
import carousel1 from "../assets/images/carousel/carousel1.jpeg"
import carousel2 from "../assets/images/carousel/carousel2.jpg"
import carousel3 from "../assets/images/carousel/carousel3.jpg"
import carousel4 from "../assets/images/carousel/carousel4.jpg"

import { HashNavigation, Pagination, Navigation, Autoplay } from 'swiper/modules';

export const Carousel_card = () => {
  return (
    <Swiper
    spaceBetween={30}
    loop={true}
    autoplay={{
      delay: 3000,
      disableOnInteraction: false,
    }}
    pagination={{
      clickable: true,
    }}
    // navigation={true}
    modules={[Pagination, Navigation, HashNavigation, Autoplay]}
    className="mySwiper homeCarouselSwiper"
  >

    {/* Slide 1 */}
    <SwiperSlide data-hash="slide1">
      <div
        className="single_slider"
        style={{
          backgroundImage: `url(${carousel1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '400px',
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12">
              <div className="slider_content text-left">
                <p>Exclusive offer -10% off With 3 items purchase</p>
                <h1> Customize Cups / Mugs</h1>
                <p className="slider_price">
                  starting at <span>₹ 200.00</span>
                </p>
                <a className="button" href="/collections/all">
                  Order Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SwiperSlide>

    {/* Slide 2 */}
    <SwiperSlide data-hash="slide2">
      <div
        className="single_slider"
        style={{
          backgroundImage: `url(${carousel2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '400px',
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            {/* <div className="col-12">
              <div className="slider_content text-left">
                <p>exclusive offer -10% off this week</p>
                <h1>dennis arrivals</h1>
                <p className="slider_price">
                  starting at <span>$2,199.00</span>
                </p>
                <a className="button" href="/collections/all">
                  Shop Now
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </SwiperSlide>

    {/* Slide 3 */}
    <SwiperSlide data-hash="slide3">
      <div
        className="single_slider"
        style={{
          backgroundImage:  `url(${carousel3})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '400px',
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            {/* <div className="col-12">
              <div className="slider_content text-left">
                <p>exclusive offer -10% off this week</p>
                <h1>dennis arrivals</h1>
                <p className="slider_price">
                  starting at <span>$2,199.00</span>
                </p>
                <a className="button" href="/collections/all">
                  Shop Now
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </SwiperSlide>

    {/* Add More Slides */}
    <SwiperSlide data-hash="slide4">
      <div
        className="single_slider"
        style={{
          backgroundImage: `url(${carousel4})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '400px',
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            {/* <div className="col-12">
              <div className="slider_content text-left">
                <p>exclusive offer -10% off this week</p>
                <h1>dennis arrivals</h1>
                <p className="slider_price">
                  starting at <span>$2,199.00</span>
                </p>
                <a className="button" href="/collections/all">
                  Shop Now
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
  )
}
