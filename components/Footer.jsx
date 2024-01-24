import React from 'react'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2024 Arfat Shoe store. All rights reserved</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
        <FaYoutube  />
      </p>
    </div>
  )
}

export default Footer