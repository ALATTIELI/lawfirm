import React, { useState, useEffect } from "react";
import "./ImageSlider.css"; // Import the CSS file for styling

function ImageSlider({}) {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "./src/assets/abudhabicourt.png",
    "./src/assets/economic.png",
    "./src/assets/municipality.jpg",
    "./src/assets/moj.png",
    "./src/assets/dubaicourt.jpg",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, [images]);

  const nextSlide = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  return (
    <div className="imageslider">
      <div className="slider-container">
        <img
          src={images[currentImage]}
          alt="Slider Image"
          className="slider-image"
        />
      </div>
      <button className="prev-button" onClick={prevSlide}>
        &#9664; {/* Left arrow symbol */}
      </button>
      <button className="next-button" onClick={nextSlide}>
        &#9654; {/* Right arrow symbol */}
      </button>
    </div>
  );
}

export default ImageSlider;
