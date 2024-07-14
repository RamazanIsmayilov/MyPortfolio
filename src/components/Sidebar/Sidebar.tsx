import React from 'react'
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
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Sidebar: React.FC = () => {
  return (
    <div className='sidebar bg-darkBlue text-white p-7 border border-customRed'>
      <div className="heading flex items-center justify-between gap-20">
        <div className='flex items-center gap-3'>
          <div className='logo px-3 py-4 bg-brightBlue'>
            <LogoIcon />
          </div>
          <h6 className='text-2xl text-gray'>Rİ</h6>
        </div>
        <div className="date">
          <h6 className='text-2xl text-gray'>{new Date().getHours()}:{new Date().getMinutes()} PM</h6>
        </div>
      </div>
      <div className="me flex gap-5 mt-6 p-5">
        <div className="img ">
          <img width={65} height={90} src={MeIMg} alt="" />
        </div>
        <div className="content">
          <h6>Ramazan İsmayılov</h6>
          <span className='text-gray'>Front-end Developer</span>
          <div className="location  flex items-center gap-3">
            <PiMapPinLight className='fill-blue-500' />
            <span className='text-gray'>Baku</span>
          </div>
        </div>

      </div>
      <div className="menu mt-12">
        <nav>
          <ul className='flex flex-col gap-3'>
            <li>
              <NavLink to='/' className='flex items-center gap-4 text-gray hover:text-white focus:text-white p-3'><PiHouse className='menu-icon text-xl text-blue' /> Home</NavLink>
            </li>
            <li>
              <NavLink to='/about' className='flex items-center gap-4 text-gray hover:text-white focus:text-white p-3'><IoFingerPrint className='menu-icon text-blue' /> About</NavLink>
            </li>
            <li>
              <NavLink to='/contact' className='flex items-center gap-4 text-gray hover:text-white focus:text-white p-3'><GoPaperclip className='menu-icon text-blue' /> Contact</NavLink>
            </li>
            <li>
              <NavLink to='/skills' className='flex items-center gap-4 text-gray hover:text-white focus:text-white p-3'><PiSwatches className='menu-icon text-blue' /> Skills</NavLink>
            </li>
            <li>
              <NavLink to='/projects' className='flex items-center gap-4 text-gray hover:text-white focus:text-white p-3'><GrProjects className='menu-icon text-blue' /> Projects</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="footer flex justify-between mt-16">
        <div className="left flex gap-7 items-center px-3 py-2">
          <NavLink to='https://www.instagram.com/r.ismayilof' target='blank'><FaInstagram /></NavLink>
          <NavLink to='https://www.facebook.com/profile.php?id=61562651615021&mibextid=ZbWKwL' target='blank'><CiFacebook /></NavLink>
          <NavLink to='https://www.linkedin.com/in/ramazanismay%C4%B1lov' target='blank'><CiLinkedin /></NavLink>
          <NavLink to='https://github.com/RamazanIsmayilov' target='blank'><FaGithub /></NavLink>
        </div>
        <div className="right px-3 py-2">
          <span className='text-gray'>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </div>
  )
}

export default Sidebar