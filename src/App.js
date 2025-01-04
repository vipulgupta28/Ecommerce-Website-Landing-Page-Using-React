import React from "react";
import FirstBar from "./Components/FirstBar"; // Correct default import
import Hero from "./Components/Hero";
import Arrivals from "./Components/Arrivals";
import Cards from "./Components/Cards";
import Sale from "./Components/Sale";
import Footer from "./Components/footer";
import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <FirstBar />
      <Hero />
      <Arrivals />
      <Cards />
      <Sale />
      <Footer />
    </div>
  );
};
export default App;
