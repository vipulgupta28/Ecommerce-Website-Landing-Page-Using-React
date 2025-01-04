import React, { useEffect, useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1571513800374-df1bbe650e56?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1524679813234-66a389fe1a42?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1553175007-57ef66d90ffa?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState("left");

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideDirection("left");
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => {
    setSlideDirection(index > currentIndex ? "left" : "right");
    setCurrentIndex(index);
  };

  return (
    <div className="heroSection">
      <div className="navbar">
        <a href="#">FOR MEN</a>
        <a href="#">FOR WOMEN</a>
        <a href="#">FOR KIDS</a>
        <a href="#">ACCESSORIES</a>
      </div>

      <div
        className={`imageContainer ${
          slideDirection === "left" ? "left-enter" : "right-enter"
        }`}
      >
        <img
          src={images[currentIndex]}
          className="image"
          alt="Slider gallery"
        />
      </div>

      <div className="overlay">
        <h2>
          Dare To Be
          <br /> Different
        </h2>
        <button className="exploreButton">Explore Products</button>
      </div>

      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
