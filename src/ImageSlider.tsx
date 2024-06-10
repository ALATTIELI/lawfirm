import React, { useState, useEffect, useRef } from "react";
import "./ImageSlider.css"; // Import the CSS file for styling

function ImageSlider() {
  const [currentImage, setCurrentImage] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const images = [
    "./src/assets/abudhabicourt.png",
    "./src/assets/economic.png",
    "./src/assets/moj.png",
    "./src/assets/dubaicourt.png",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, [images]);

  // const nextSlide = () => {
  //   setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  // };

  // const prevSlide = () => {
  //   setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  // };

  return (
    <div className="imageslider" ref={containerRef}>
      <div className="slider-container">
        <img
          src={images[currentImage]}
          alt="Slider Image"
          className="slider-image"
        />
      </div>
    </div>
  );
}

export default ImageSlider;
