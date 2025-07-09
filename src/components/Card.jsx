import React, { useState } from 'react'
import "./style.css"
// import profileImage from "/manOnLaptop.webp"
import Button from './Button'
import { FaSearch } from 'react-icons/fa'
// import { FaTimes } from 'react-icons/fa'
// import { FaCartArrowDown } from 'react-icons/fa6'
const Card = () => {
  const [count, setCount] = useState(0)
  const [modal, setModal] = useState(false)
  const handleCount = () => {
     setCount(count => count + 1)
  }  

  const handleModal =() => {
    setModal(true)
  }
  const data = [
    {
      name: "Laptop",
      img: "/manOnLaptop.webp",
      price: "#450",
      desc: "lljfdjdshhjfdhhdfhjkdfvjhdfhfd",
    },
    {
      name: "Laptop",
      img: "/manOnLaptop.webp",
      price: "#450",
      desc: "lljfdjdshhjfdhhdfhjkdfvjhdfhfd",
    },
    {
      name: "Laptop",
      img: "/manOnLaptop.webp",
      price: "#450",
      desc: "lljfdjdshhjfdhhdfhjkdfvjhdfhfd",
      icon: <FaSearch />
    },
  ];
  return (
    <>
      {data.length >= 3 ? data.map((item, index) => (
        <div key={index}>
          <img src={item.img} alt="" />
          <p>{item.name}</p>
          <p>{item.desc}</p>
          <p>{item.price}</p>
          {/* <FaTimes /> */}
          {/* <FaCartArrowDown /> */}
          <span>{item.icon}</span>
          <Button title="Add to cart" />
          <Button title="Buy now" />
        </div>
      )): "No available data"}
      <div>{modal}</div>
      <button onClick={handleModal}>Click</button>
{
  modal && <h1>THis is modal component</h1>
}
      {/* <div>
        <div>
          <img src="/manOnLaptop.webp" alt="" className="profile " />
        </div>
        <div>
          <h3 className="text-3xl text-green-500">Laptop</h3>
          <p>
            Lorem ipsum dolor voluptatibus vero provident illo quos vel velit
            beatae. Quas totam consectetur velit aspernatur.
          </p>
          <p>#350</p>
          <Button />
          <p>{count}</p>
          <button onClick={handleCount}>Count</button>
        </div>
      </div> */}
    </>
  );
}

export default Card