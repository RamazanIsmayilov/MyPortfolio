import React from 'react'
import MainImg from '../../assets/images/main.png'
import { FaRegClock } from "react-icons/fa";
import { RiArrowRightUpLine } from "react-icons/ri";
import { ReactComponent as SignetureIcon } from "../../assets/images/signeture.svg";

import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className='home'>
      {/* <div className="hero flex items-center gap-5 p-5">
        <div className="row">
          <div className="col-12 col-sm-12 col-ms-4 col-lg-4">
            <div className="hero-img">
              <img width={400} src={MainImg} alt="image/main" />
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-8 col-lg-8">
            <div className="hero-content">
              <div className="top flex items-center justify-between gap-7 p-3">
                <div className="available flex items-center gap-5 text-white px-3 py-3" style={{ fontSize: '14px' }}>
                  <span className='online-dot'></span>
                  Available for freelance work
                </div>
                <div className="time">
                  <span className='flex items-center text-white gap-3 px-32 py-3'>
                    <FaRegClock className='text-blue' />
                    {new Date().getMonth()}
                    -
                    {new Date().getDate()}
                    -
                    {new Date().getFullYear()}
                  </span>
                </div>
                <div className="contact-me">
                  <Link to='/contact'>
                    <span className='text-white flex items-center gap-2 py-3 px-3'>
                      Contact Me
                      <RiArrowRightUpLine />
                    </span>
                  </Link>
                </div>
              </div>
              <div className="bottom flex gap-4 mt-4">
                <div className="left p-6">
                  <div className="title">
                    <span className='text-gray'>Front-end Developer</span>
                  </div>
                  <div className="name text-white">
                    <h1 className='text-3xl'>Ramazan İsmayılov 👋🏽</h1>
                  </div>
                  <div className="description mt-3">
                    <span className='text-gray'>I am a San francisco-based product designer with a focus on web design, illustration, a visual development. I have a diverse range of experience and industries.</span>
                  </div>
                  <div className="signeture flex items-center justify-end mt-4">
                    <SignetureIcon />
                  </div>
                </div>
                <div className="right">
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus suscipit fugit consectetur, ea excepturi alias sit quod eveniet nesciunt.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default Home