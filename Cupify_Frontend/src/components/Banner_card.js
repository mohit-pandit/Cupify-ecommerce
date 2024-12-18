import React from 'react'

export const Banner_card = () => {
  return (
    <>
<div>
</div>    
    <div id="shopify-section-template--14903323820135__1626596575982cca1f" className="shopify-section">

    <section className="banner_section " id="section-template--14903323820135__1626596575982cca1f">
      <div className="container">
        <div className="row ">
          <div className="col-lg-6 col-md-6 col-12 mb-30">
            <div className="single_banner">
              <div className="banner_thumb">
                <a href="#">
                  <img src={require("../assets/images/Banner/bottleBanner.webp")} alt="Item Banner" />
                </a>
                <div className="banner_content text-left">
                  <p>Steel - Fiber</p>
                  <h2>Creative Bottles</h2>
                  <span>Start From ₹ 250.00</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-12 mb-30">
            <div className="single_banner">
              <div className="banner_thumb">
                <a href="#">
                  <img src={require("../assets/images/Banner/cupBanner.webp")} alt="Item Banner" />   
               </a>
                <div className="banner_content text-left">
                  <p className='text-white'>Fiber</p>
                  <h2 className='text-white'>Creative Mugs</h2>
                  <span className='text-white'>Start From ₹ 200.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  </>

  )
}
