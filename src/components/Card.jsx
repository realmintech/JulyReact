import React from 'react'
import "./style.css"
// import profileImage from "/manOnLaptop.webp"
import Button from './Button'
const Card = () => {
  return (
    <>
     <div>
        <div>
            <img src="/manOnLaptop.webp" alt="" className='profile ' />
        </div>
        <div>
            <h3 className='text-3xl text-green-500'>Laptop</h3>
            <p>Lorem ipsum dolor  voluptatibus vero provident illo quos vel velit beatae. Quas totam consectetur velit aspernatur.</p>
            <p>#350</p>
            <Button />
        </div>
     </div>
    </>
  )
}

export default Card