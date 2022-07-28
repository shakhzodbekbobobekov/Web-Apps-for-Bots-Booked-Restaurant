import React from "react";
import Slider from "react-slick";
import "./Products.css";
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
      <div className="products__title">
        <h1>Special Offers</h1>
        <h1 className="all-products-title">See All</h1>
      </div>
      <div className="products-container">
        <div className="carusel">
          <Slider {...settings}>
            <div className="products">
              <div className="product__img-box">
                <Link to="/product">
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
                </Link>
              </div>

              <div className="product__information">
                <h1>Lavash</h1>
                <div className="product__buy">
                  <Link to="/product">
                    <img
                      className="degree-star"
                      src="./images/star half.svg"
                      alt="yulduzcha"
                    />
                  </Link>
                  <span>4.8 </span>
                </div>
                <h2>$29</h2>
              </div>
            </div>

            <div className="product">
              <div className="product__img-box">
                <Link to="/product">
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
                </Link>
              </div>

              <div className="product__information">
                <h1>Lavash</h1>
                <div className="product__buy">
                  <Link to="/product">
                    <img
                      className="degree-star"
                      src="./images/star half.svg"
                      alt="yulduzcha"
                    />
                  </Link>
                  <span>4.8 </span>
                </div>
                <h2>$29</h2>
              </div>
            </div>

            <div className="product">
              <div className="product__img-box">
                <Link to="/product">
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
                </Link>
              </div>

              <div className="product__information">
                <h1>Lavash</h1>
                <div className="product__buy">
                  <img
                    className="degree-star"
                    src="./images/star half.svg"
                    alt="yulduzcha"
                  />

                  <span>4.8 </span>
                </div>
                <h2>$29</h2>
              </div>
            </div>

            <div className="product">
              <div className="product__img-box">
                <Link to="/product">
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
                </Link>
              </div>

              <div className="product__information">
                <h1>Lavash</h1>
                <div className="product__buy">
                  <img
                    className="degree-star"
                    src="./images/star half.svg"
                    alt="yulduzcha"
                  />

                  <span>4.8 </span>
                </div>
                <h2>$29</h2>
              </div>
            </div>

            <div className="product">
              <div className="product__img-box">
                <Link to="/product">
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
                </Link>
              </div>

              <div className="product__information">
                <h1>Lavash</h1>
                <div className="product__buy">
                  <img
                    className="degree-star"
                    src="./images/star half.svg"
                    alt="yulduzcha"
                  />

                  <span>4.8 </span>
                </div>
                <h2>$29</h2>
              </div>
            </div>
          </Slider>
        </div>
      </div>

      <div className="products__title selector__product">
        <h1>Player Plant</h1>
        <h1 className="all-product">See All</h1>
      </div>
      <div className="selector__product-btns">
        <button className="active">All</button>
        <button>Teahouse</button>
        <button>Restaurant</button>
      </div>

      <div className="selector-product">
        <div className="product">
          <Link to="/product">
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
                <img
                  className="degree-star"
                  src="./images/star half.svg"
                  alt="yulduzcha"
                />
                <span>4.8 </span>
              </div>
              <h2>$29</h2>
            </div>
          </Link>
        </div>

        <div className="product">
          <Link to="/product">
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
                <Link to="/product">
                  <img
                    className="degree-star"
                    src="./images/star half.svg"
                    alt="yulduzcha"
                  />
                </Link>
                <span>4.8 </span>
              </div>
              <h2>$29</h2>
            </div>
          </Link>
        </div>

        <div className="product">
          <Link to="/product">
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
                <img
                  className="degree-star"
                  src="./images/star half.svg"
                  alt="yulduzcha"
                />

                <span>4.8 </span>
              </div>
              <h2>$29</h2>
            </div>
          </Link>
        </div>

        <div className="product">
          <Link to="/product">
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
                <img
                  className="degree-star"
                  src="./images/star half.svg"
                  alt="yulduzcha"
                />

                <span>4.8 </span>
              </div>
              <h2>$29</h2>
            </div>
          </Link>
        </div>

        <div className="product">
          <Link to="/product">
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
                <img
                  className="degree-star"
                  src="./images/star half.svg"
                  alt="yulduzcha"
                />

                <span>4.8 </span>
              </div>
              <h2>$29</h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Product;
