import React from "react";

const Cards = () => {
  return (
    <div className="lower">
      <div className="card card1">
        <h2 className="cardHeading">SHOP FOR WOMEN</h2>
        <p className="cardDescription">Discover the latest trends in women's fashion.</p>
        <button className="exploreButton">Explore</button>
      </div>
      <div className="card card2">
        <h2 className="cardHeading">SHOP FOR MEN</h2>
        <p className="cardDescription">Find stylish clothing and accessories for men.</p>
        <button className="exploreButton">Explore</button>
      </div>
      <div className="line">
        <hr />
      </div>
    </div>
  );
};

export default Cards;
