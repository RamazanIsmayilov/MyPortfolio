import React, { useEffect, useState } from 'react'
import { ReactComponent as LogoIcon } from "../../assets/images/logo.svg";
import MeIMg from '../../assets/images/me.png'
import { PiMapPinLight } from "react-icons/pi";
import { NavLink } from 'react-router-dom';
import { PiHouse } from "react-icons/pi";
import { GrProjects } from "react-icons/gr";
import { IoFingerPrint } from "react-icons/io5";
import { GoPaperclip } from "react-icons/go";
import { PiSwatches } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Sidebar: React.FC = () => {

  const [time, setTime] = useState<string>("");

  useEffect(() => {
    setInterval(() => {
      const x = new Date();
      let hour = x.getHours();  
      const minute = x.getMinutes();
      const seconds = x.getSeconds();
      
      const ampm = hour >= 12 ? 'PM' : 'AM';
      hour = hour % 12;
      hour = hour ? hour : 12; // Saat 0 olduqda 12 göstər

      const formattedHour = hour < 10 ? "0" + hour : hour;
      const formattedMinute = minute < 10 ? "0" + minute : minute;
      const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

      setTime(`${formattedHour}:${formattedMinute}:${formattedSeconds} ${ampm}`);
    }, 1000);

    
  }, []);

  return (
    <div className='sidebar'>
      <div className="heading d-flex align-items-center justify-content-between">
        <div className='d-flex align-items-center gap-3'>
          <div className='logo px-3 py-3'>
            <LogoIcon />
          </div>
          <h6 className='fw-bold m-0'>Rİ</h6>
        </div>
        <div className="date">
          <h6 className='fw-bold m-0'>{time}</h6>
        </div>
      </div>
      <div className="me d-flex align-items-center gap-4 mt-5">
        <div className="img ">
          <img width={65} height={65} src={MeIMg} alt="image/Me" />
        </div>
        <div className="content">
          <h6 className='text-light m-0'>Ramazan İsmayılov</h6>
          <span className='fw-medium'>Front-end Developer</span>
          <div className="location d-flex align-items-center gap-2 mt-1">
            <PiMapPinLight className='icon' />
            <span className='fw-medium'>Baku</span>
          </div>
        </div>
      </div>
      <div className="menu mt-5">
        <nav>
          <ul className='d-flex flex-column gap-3 p-0'>
            <li>
              <NavLink to='/' className='d-flex align-items-center gap-3 p-2'><PiHouse className='menu-icon' /> Home</NavLink>
            </li>
            <li>
              <NavLink to='/about' className='d-flex align-items-center gap-3 p-2'><IoFingerPrint className='menu-icon text-blue' /> About</NavLink>
            </li>
            <li>
              <NavLink to='/contact' className='d-flex align-items-center gap-3 p-2'><GoPaperclip className='menu-icon text-blue' /> Contact</NavLink>
            </li>
            <li>
              <NavLink to='/skills' className='d-flex align-items-center gap-3 p-2'><PiSwatches className='menu-icon text-blue' /> Skills</NavLink>
            </li>
            <li>
              <NavLink to='/projects' className='d-flex align-items-center gap-3 p-2'><GrProjects className='menu-icon text-blue' /> Projects</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="footer d-flex justify-content-between mt-5">
        <div className="left d-flex gap-4 align-items-center px-3 py-2">
          <NavLink to='https://www.instagram.com/r.ismayilof' target='blank'><FaInstagram /></NavLink>
          <NavLink to='https://www.facebook.com/profile.php?id=61562651615021&mibextid=ZbWKwL' target='blank'><RiFacebookCircleLine /></NavLink>
          <NavLink to='https://www.linkedin.com/in/ramazanismay%C4%B1lov' target='blank'><CiLinkedin /></NavLink>
          <NavLink to='https://github.com/RamazanIsmayilov' target='blank'><FaGithub /></NavLink>
        </div>
        <div className="right px-3 py-2">
          <span className='fw-medium'>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </div>
  )
}

export default Sidebar