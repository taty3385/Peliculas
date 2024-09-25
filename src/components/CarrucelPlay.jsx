import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

export default function CarrucelPlay() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  // Flecha Siguiente
  function NextArrow(props) {
    return (
      <div
        style={{
          position: "absolute",
          right: "10px",
          top: "50%",
          zIndex: 1,
          cursor: "pointer",
          opacity: 0.2,
        }}
        onClick={props.onClick}
      >
        <ArrowForward sx={{ fontSize: "40px", color: "black" }} />
      </div>
    );
  }

  // Flecha Anterior
  function PrevArrow(props) {
    return (
      <div
        style={{
          position: "absolute",
          top: "50%",
          zIndex: 1,
          cursor: "pointer",
          opacity: 0.2,
        }}
        onClick={props.onClick}
      >
        <ArrowBack sx={{ fontSize: "40px", color: "black" }} />
      </div>
    );
  }

  return (
    <Box>
      <Slider {...settings} style={{ width: "100%", height: "400px" }}>
        <Box sx={{ width: "100%", height: "400px," }}>
          <img
            src="https://via.placeholder.com/300?text=Slide+1"
            alt="Slide 1"
            style={{ width: "100%", height: "400px" }}
          />
        </Box>
      </Slider>
    </Box>
  );
}
