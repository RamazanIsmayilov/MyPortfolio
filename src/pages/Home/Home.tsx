import React, { useEffect, useState } from 'react'
import MainImg from '../../assets/images/main.png'
import { FaRegClock } from "react-icons/fa";
import { RiArrowRightUpLine } from "react-icons/ri";
import { ReactComponent as SignetureIcon } from "../../assets/images/signeture.svg";

import { Link } from 'react-router-dom';

const Home: React.FC = () => {

  const [date, setDate] = useState<string>("");

  useEffect(() => {
    setInterval(() => {
      const now = new Date();
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

      const day = days[now.getDay()];
      const month = months[now.getMonth()];
      const date = now.getDate();
      const year = now.getFullYear();
      setDate(`${day}, ${month} ${date}, ${year}`);
    }, 1000);
  }, []);

  return (
    <div className='home'>
      <div className="hero d-flex align-items-center gap-5">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-3 col-lg-3">
            <div className="hero-img">
              <img height={370} src={MainImg} alt="image/main" />
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-9 col-lg-9">
            <div className="hero-content">
              <div className="top d-flex align-items-center justify-content-between">
                <div className="available d-flex align-items-center gap-3 text-white fw-medium">
                  <span className='online-dot'></span>
                  Available for freelance work
                </div>
                <div className="time d-flex align-items-center text-white gap-2 fw-medium">
                  <FaRegClock className='icon' />
                  <p className='m-0'>{date}</p>
                </div>
                <div className="contact-me">
                  <Link to='/contact' className='text-white d-flex align-items-center gap-1 fw-medium'>
                    Contact Me
                    <RiArrowRightUpLine />
                  </Link>
                </div>
              </div>
              <div className="bottom d-flex gap-3 mt-3">
                <div className="left p-4">
                  <p className='m-0'>Front-end Developer</p>
                  <h3 className='text-white'>Ramazan İsmayılov 👋🏽</h3>
                  <p>I am a San francisco-based product designer with a focus on web design, illustration, a visual development. I have a diverse range of experience and industries.</p>
                  <div className="signeture d-flex align-items-center justify-content-end mt-4">
                    <SignetureIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home