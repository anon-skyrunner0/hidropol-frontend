import React from "react";
import image1 from "../../Assets/images/slide1.png";
import image2 from "../../Assets/images/slide2.png";
import image3 from "../../Assets/images/slide3.png";
import image4 from "../../Assets/images/slide4.png";

const Jumbotron = () => {
  return (
    <>
      <section class="carousel" aria-label="polite">
        <ol class="carousel__viewport">
          <li id="carousel__slide1" tabindex="0" class="carousel__slide">
            <img src={image1} alt="" width="100%" height="100%" />
            <div class="carousel__snapper">
              <a href="#carousel__slide4" class="carousel__prev">
                Go to last slide
              </a>
              <a href="#carousel__slide2" class="carousel__next">
                Go to next slide
              </a>
            </div>
          </li>
          <li id="carousel__slide2" tabindex="0" class="carousel__slide">
            <img src={image2} alt="" width="100%" height="100%" />
            <div class="carousel__snapper"></div>
            <a href="#carousel__slide1" class="carousel__prev">
              Go to previous slide
            </a>
            <a href="#carousel__slide3" class="carousel__next">
              Go to next slide
            </a>
          </li>
          <li id="carousel__slide3" tabindex="0" class="carousel__slide">
            <img src={image3} alt="" width="100%" height="100%" />
            <div class="carousel__snapper"></div>
            <a href="#carousel__slide2" class="carousel__prev">
              Go to previous slide
            </a>
            <a href="#carousel__slide4" class="carousel__next">
              Go to next slide
            </a>
          </li>
          <li id="carousel__slide4" tabindex="0" class="carousel__slide">
            <img src={image4} alt="" width="100%" height="100%" />
            <div class="carousel__snapper"></div>
            <a href="#carousel__slide3" class="carousel__prev">
              Go to previous slide
            </a>
            <a href="#carousel__slide1" class="carousel__next">
              Go to first slide
            </a>
          </li>
        </ol>

        <aside class="carousel__navigation">
          <ol class="carousel__navigation-list">
            <li class="carousel__navigation-item">
              <a href="#carousel__slide1" class="carousel__navigation-button">
                Go to slide 1
              </a>
            </li>
            <li class="carousel__navigation-item">
              <a href="#carousel__slide2" class="carousel__navigation-button">
                Go to slide 2
              </a>
            </li>
            <li class="carousel__navigation-item">
              <a href="#carousel__slide3" class="carousel__navigation-button">
                Go to slide 3
              </a>
            </li>
            <li class="carousel__navigation-item">
              <a href="#carousel__slide4" class="carousel__navigation-button">
                Go to slide 4
              </a>
            </li>
          </ol>
        </aside>
      </section>
    </>
  );
};

export default Jumbotron;
