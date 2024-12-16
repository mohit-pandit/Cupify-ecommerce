import React, { useState } from "react";

export const Product_card = () => {
  const [selectedColor, setSelectedColor] = useState("Black");
  const [selectedSize, setSelectedSize] = useState("520 ml");

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  return (
    <>
      <div className="product-page">
        <div className="product-image">
          <img src="https://www.milton.in/cdn/shop/files/Glassy_350_Pink_4.jpg?v=1701346019&width=1000" alt="Steel Convey Insulated Water Bottle" />
        </div>
        <div className="product-details">
          <h1>Steel Convey Insulated Water Bottle (Milton)</h1>
          <div className="product-review">
            <span>⭐ 1 review</span>
          </div>
          <div className="product-price">
            <span className="current-price">₹299.00</span>
            <span className="original-price">₹380.00</span>
            <span className="discount">Save 21%</span>
          </div>
          <div className="product-color">
            <h3>Color</h3>
            <div className="color-options">
              {["Black", "Blue", "Cyan"].map((color) => (
                <div
                  key={color}
                  className={`color-option ${selectedColor === color ? "selected" : ""}`}
                  onClick={() => handleColorChange(color)}
                >
                  {color}
                </div>
              ))}
            </div>
          </div>
          <div className="product-size">
            <h3>Size</h3>
            <div className="size-options">
              {["520 ml", "630 ml"].map((size) => (
                <div
                  key={size}
                  className={`size-option ${selectedSize === size ? "selected" : ""}`}
                  onClick={() => handleSizeChange(size)}
                >
                  {size}
                </div>
              ))}
            </div>
          </div>
          <div className="product-variant">
            <h3>Variant</h3>
            <span>1 Unit</span>
          </div>
          <div className="product-features">
            <ul>
              <li>Free Delivery Above ₹499</li>
              <li>Easy Returns</li>
              <li>Priority Support</li>
              <li>Assured Quality</li>
            </ul>
          </div>
          <button className="check-offers">Check the Offers</button>
        </div>
      </div>
    </>
  )
}
