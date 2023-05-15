import React, { Component } from "react";
import Slider from "react-slick";
import { sliderImages } from './../../sliderImages.js';
import cmodule from './simpleSlider.module.css';
import { Navigate } from "react-router-dom";
import DOMPurify from 'dompurify';

export default class SimpleSlider extends Component {

  state = {
    submitted: false,
  }

  render() {

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    };
    return (
      <div className={cmodule.sliderWrapper}>
        {this.state.submitted && <Navigate to={`/contacts`} />}
        <Slider {...settings}>
          {sliderImages.map(element => {
            return (
              <div className={cmodule.simpleSlider}>
                <div className={cmodule.descr}>
                  <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(element.desription) }} >

                  </div>
                  <button onClick={() => { this.setState({ submitted: true }); }}>{element.buttonText}</button>

                </div>

                <img src={element.img} />

              </div>
            )
          })}
        </Slider>
      </div>
    );
  }
}