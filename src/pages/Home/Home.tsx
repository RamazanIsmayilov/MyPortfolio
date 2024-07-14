import React from 'react'
import MainImg from '../../assets/images/main.png'
import { FaRegClock } from "react-icons/fa";

const Home: React.FC = () => {
  return (
    <div className='home'>
      <div className="hero bg-darkBlue flex items-center gap-5 p-5">
        <div className="hero-img">
          <img width={220} src={MainImg} alt="image/main" />
        </div>
        <div className="hero-content">
          <div className="top flex items-center gap-5 p-3">
            <div className="available flex items-center gap-5 text-white px-3 py-2" style={{ fontSize: '14px' }}>
              <span className='online-dot'></span>
              Available for freelance work
            </div>
            <div className="time flex items-center text-white gap-3 px-5 py-2">
              <FaRegClock className='text-blue' />
              {new Date().getMonth()}
              -
              {new Date().getDate()}
              -
              {new Date().getFullYear()}
            </div>
            <div className="contact-me"></div>
          </div>
          <div className="bottom"></div>
        </div>
      </div>
    </div>
  )
}

export default Home