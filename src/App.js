import React from "react";
import redShoes from "../src/assets/redShoes.png";
import greenShoes from "../src/assets/greenShoes.png";
import blueShoes from "../src/assets/blueShoes.png";
import Product from "./components/Product";

const App = () => {
  const product = {
    name: "Red Flyknit Trainers",
    price: "$190.00",
    sizes: ["Small", "Medium", "Large", "Extra Large"],
    images: [
      { image: redShoes, color: "red" },
      { image: greenShoes, color: "green" },
      { image: blueShoes, color: "blue" }
    ],
    colors: [
      {
        name: "red",
        color1: "#8A3D28",
        color2: "#AC5941"
      },
      {
        name: "green",
        color1: "#1F737E",
        color2: "#419FAC"
      },
      {
        name: "blue",
        color1: "#1F2E7E",
        color2: "#416CAC"
      }
    ]
  };

  return <Product {...product} />;
};

export default App;
