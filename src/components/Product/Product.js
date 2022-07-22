import React from "react";
import Slider from "react-slick";
import "./Product.css";

// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

function Product() {
  const settings = {
    className: "slider variable-width",
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };
  return (
    <div className="container">
      <div className="carusel">
        <Slider {...settings}>
          <div className="product__img">
            <img src="./images/tacos.png" alt="tacos.png" />
          </div>
          <div className="product__img">
            <img src="./images/tacos.png" alt="tacos.png" />
            <span>Lorem ipsum dolor um omnis. Ipsum.</span>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Product;
