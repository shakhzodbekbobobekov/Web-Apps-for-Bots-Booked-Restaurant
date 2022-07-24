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
        <h1 className="all-product-title">See All</h1>
      </div>
      <div className="product-container">
        <div className="carusel">
          <Slider {...settings}>
            <div className="product">
              <div className="product__img-box">
                <Link to="/">
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

            <div className="product">
              <div className="product__img-box">
                <Link to="/">
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

            <div className="product">
              <div className="product__img-box">
                <Link to="/">
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

            <div className="product">
              <div className="product__img-box">
                <Link to="/">
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

            <div className="product">
              <div className="product__img-box">
                <Link to="/">
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
          </Slider>
        </div>
      </div>
      <div className="product__title selector__product">
        <h1>Player Plant</h1>
        <h1 className="all-product">See All</h1>
      </div>
      <div className="selector__product-btns">
        <button className="active">All</button>
        <button>Teahouse</button>
        <button>Restaurant</button>
      </div>

      <div className="selector-product">
        {/* <ul>
          <li></li>
        </ul> */}

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
      </div>
    </div>
  );
}

export default Product;
