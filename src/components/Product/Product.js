import React from "react";
import Slider from "react-slick";
import "./Product.css";
import { Link } from "react-router-dom";

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
      <div className="product__title">
        <h1>Special Offers</h1>
        <h1 className="all-product">See All</h1>
      </div>
      <div className="product-container">
        <div className="carusel">
          <Slider {...settings}>
            <Link to="/">
              <div className="product">
                <div className="product__img-box">
                  <img
                    className="product__img"
                    src="./images/tacos.png"
                    alt="tacos.png"
                  />
                  <img
                    className="heart-icon__product"
                    src="./images/heart.svg"
                    alt="heart icon product section"
                  />
                </div>

                <div className="product__information">
                  <h1>Lavash</h1>
                  <div className="product__buy">
                    <Link to="/">
                      <img
                        className="degree-star"
                        src="./images/star half.svg"
                        alt="yulduzcha"
                      />
                    </Link>
                    <span>4.8 |</span>
                    <button>4.268 Sold</button>
                  </div>
                  <h2>$29</h2>
                </div>
              </div>
            </Link>

            <Link to="/">
              <div className="product">
                <div className="product__img-box">
                  <img
                    className="product__img"
                    src="./images/tacos.png"
                    alt="tacos.png"
                  />
                  <img
                    className="heart-icon__product"
                    src="./images/heart.svg"
                    alt="heart icon product section"
                  />
                </div>

                <div className="product__information">
                  <h1>Lavash</h1>
                  <div className="product__buy">
                    <Link to="/">
                      <img
                        className="degree-star"
                        src="./images/star half.svg"
                        alt="yulduzcha"
                      />
                    </Link>
                    <span>4.8 |</span>
                    <button>4.268 Sold</button>
                  </div>
                  <h2>$29</h2>
                </div>
              </div>
            </Link>

            <Link to="/">
              <div className="product">
                <div className="product__img-box">
                  <img
                    className="product__img"
                    src="./images/tacos.png"
                    alt="tacos.png"
                  />
                  <img
                    className="heart-icon__product"
                    src="./images/heart.svg"
                    alt="heart icon product section"
                  />
                </div>

                <div className="product__information">
                  <h1>Lavash</h1>
                  <div className="product__buy">
                    <Link to="/">
                      <img
                        className="degree-star"
                        src="./images/star half.svg"
                        alt="yulduzcha"
                      />
                    </Link>
                    <span>4.8 |</span>
                    <button>4.268 Sold</button>
                  </div>
                  <h2>$29</h2>
                </div>
              </div>
            </Link>

            <Link to="/">
              <div className="product">
                <div className="product__img-box">
                  <img
                    className="product__img"
                    src="./images/tacos.png"
                    alt="tacos.png"
                  />
                  <img
                    className="heart-icon__product"
                    src="./images/heart.svg"
                    alt="heart icon product section"
                  />
                </div>

                <div className="product__information">
                  <h1>Lavash</h1>
                  <div className="product__buy">
                    <Link to="/">
                      <img
                        className="degree-star"
                        src="./images/star half.svg"
                        alt="yulduzcha"
                      />
                    </Link>
                    <span>4.8 |</span>
                    <button>4.268 Sold</button>
                  </div>
                  <h2>$29</h2>
                </div>
              </div>
            </Link>

            <Link to="/">
              <div className="product">
                <div className="product__img-box">
                  <img
                    className="product__img"
                    src="./images/tacos.png"
                    alt="tacos.png"
                  />
                  <img
                    className="heart-icon__product"
                    src="./images/heart.svg"
                    alt="heart icon product section"
                  />
                </div>

                <div className="product__information">
                  <h1>Lavash</h1>
                  <div className="product__buy">
                    <Link to="/">
                      <img
                        className="degree-star"
                        src="./images/star half.svg"
                        alt="yulduzcha"
                      />
                    </Link>
                    <span>4.8 |</span>
                    <button>4.268 Sold</button>
                  </div>
                  <h2>$29</h2>
                </div>
              </div>
            </Link>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Product;
