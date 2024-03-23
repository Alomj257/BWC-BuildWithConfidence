import React from "react";
import Slider from "react-slick";
import "./SayClient.css";
const SayClient = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    centerPadding: "60px",
    className: "center",
    centerMode: true,
    slidesToScroll: 1,
    innerHeight: "450px",
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="say-client">
      <div className="container py-5">
        <h4 className="fw-bold  text-center">What They Say About Us</h4>
        <Slider {...settings}>
          {data?.map((da, key) => (
            <div className="d-flex">
              <div
                className="shadow mx-4 p-5 d-flex flex-column justify-content-between"
                style={{ height: "350px" }}
              >
                <div>
                  <i class="bx bxs-quote-alt-left fs-1 text-info"></i>
                </div>
                <div>
                  <p>{da?.message}</p>
                </div>
                <div className="d-flex gap-3">
                  <div style={{ width: "3rem" }} className="rounded-circle">
                    <img
                      src="/images/Home/say-bg.png"
                      className="w-100 h-100 "
                      alt=""
                    />
                  </div>
                  <div className="d-flex flex-column">
                    <span className="fw-bold">{da?.name}</span>
                    <small>{da?.location}</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SayClient;

const data = [
  {
    message: "Very professional and user friendly. ",
    img: "",
    name: "Ak Khan",
    location: "London",
  },
  {
    message:
      "I loved the secure payment protection service which protected me from bad quality work or incomplete work ",
    img: "",
    name: "RH Khan",
    location: "India",
  },
  {
    message: "Nice platform and easy to use. ",
    img: "",
    name: "Mk Khan",
    location: "Saudi arabia",
  },
];
