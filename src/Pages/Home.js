import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './swiper_slider.css';

// Import required modules
import { HashNavigation, Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Banner_card } from '../components/Banner_card';
import { Latest_product } from '../components/Latest_product';

export const Home = () => {
  return (
    <>



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
        className="mySwiper"
      >

        {/* Slide 1 */}
        <SwiperSlide data-hash="slide1">
          <div
            className="single_slider"
            style={{
              backgroundImage: `url(https://www.shutterstock.com/image-photo/sochirussiaaugust-2017-amusement-parkchildren-parents-600nw-742211017.jpg)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '400px',
            }}
          >
            <div className="container">
              <div className="row align-items-center">
                <div className="col-12">
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
              backgroundImage: `url(//monsta-demo.myshopify.com/cdn/shop/files/slider4.jpg?v=1614305543)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '400px',
            }}
          >
            <div className="container">
              <div className="row align-items-center">
                <div className="col-12">
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
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide data-hash="slide3">
          <div
            className="single_slider"
            style={{
              backgroundImage: `url(//monsta-demo.myshopify.com/cdn/shop/files/slider3.jpg?v=1614305543)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '400px',
            }}
          >
            <div className="container">
              <div className="row align-items-center">
                <div className="col-12">
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
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Add More Slides */}
        <SwiperSlide data-hash="slide4">
          <div
            className="single_slider"
            style={{
              backgroundImage: `url(//monsta-demo.myshopify.com/cdn/shop/files/slider3.jpg?v=1614305543)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '400px',
            }}
          >
            <div className="container">
              <div className="row align-items-center">
                <div className="col-12">
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
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div>
        <Banner_card />
      </div>

      <div>
        <Latest_product/>
      </div>


    </>
  );
};

