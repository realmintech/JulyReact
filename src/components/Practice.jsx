import React, { useEffect, useState } from "react";
import axios from "axios";
// import Card from "./Card";

const Practice = () => {
  // const [color, setColor] = useState("Blue");
  // const [num, setNum] = useState(1);
  // const [display, setDisplay] = useState(false);
  const [product, setProduct] = useState([]);

  // const handleColorChange = () => {
  //   setColor("Green");
  // };
  // const handleNumber = () => {
  //   setNum((num) => num * 2);
  // };
  // const handleDisplay = () => {
  //   setDisplay(true);
  // };
  const api = async () => {
    try {
      let req = await axios.get("https://randomuser.me/api?results=100");
      //  let data = await req.json()
      setProduct(req.data.results);
      console.log(req.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    api();
  }, []);
  return (
    <>
      {/* <p>{JSON.stringify(product)}</p> */}
      {product.map((item, index) => (
        <div key={index}>
          <p>{item.name.first}</p>
        </div>
      ))}
      {/* <p>{color}</p>
      <p>{num}</p>
      {display && <Card />}
      <button onClick={handleDisplay}>Display</button>
      <button onClick={handleNumber}>Multiply number</button>
      <button
        onClick={handleColorChange}
        style={{ color: "white", backgroundColor: "purple" }}
      >
        Color
      </button> */}
    </>
  );
};

export default Practice;
