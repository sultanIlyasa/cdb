import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Resizable() {

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
  };
  return (
    <>
    <Slider {...settings}>
          <img
              className="px-2 lg:py-10"
              src="/images/client1.png"
          />
          <img
              className="w-auto lg:px-4 lg:py-5"
              src="/images/client2.png"
          />
          <img
              className="px-3 py-9"
              src="/images/client3.png"
          />
          <img
              className="pr-3"
              src="/images/client4.png"
          />
          <img
              className="pr-3 py-3"
              src="/images/client5.png"
          />
          <img
              className="pr-5 py-12"
              src="/images/client6.png"
          />
          <img
              className="pr-3 py-12"
              src="/images/client7.png"
          /> 
          <img
              className="pt-5 pr-2"
              src="/images/client8.png"
          /> 
          <img
              className="pt-5 pr-2"
              src="/images/client9.jpg"
          />
          <img
              className="pt-5 pr-2"
              src="/images/client10.jpg"
          />
          <img
              className="pt-5 pr-2"
              src="/images/client11.png"
          />
          <img
              className="pt-5 pr-2"
              src="/images/client12.png"
          />
          <img
              className="pt-5 pr-2"
              src="/images/client13.png"
          />
          <img
              className="pt-5 pr-2"
              src="/images/client14.png"
          />

    </Slider>
    </>
  );
}

export default Resizable;
