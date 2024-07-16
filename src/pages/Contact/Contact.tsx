import React from 'react'
import { CiMap } from "react-icons/ci";
import { CiHeadphones } from "react-icons/ci";

const Contact: React.FC = () => {
  return (
    <div className='contact'>
      <div className="heading d-flex align-items-center justify-content-between gap-3 p-3">
        <p className='text-white fw-medium m-0'>Contact</p>
        <div className="text-animation">
          <span className="text-white"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat deleniti pariatur quasi minus fugit maiores doloribus. Neque cupiditate ex fuga nostrum eaque unde incidunt possimus necessitatibus? Hic recusandae ea soluta!</span>
        </div>
      </div>
      <div className="connection mt-3">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-7 col-lg-7">
            <div className="left">
              <form className='d-flex flex-column gap-3'>
                <input type="text" placeholder='Name' />
                <input type="email" placeholder='Email' />
                <textarea name="message" id="message" rows={5} placeholder='Message'></textarea>
                <button className='fw-medium'>Submit</button>
              </form>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-5 col-lg-5">
            <div className="right">
              <div className="head">
                <p className='text-light fw-medium'>Address</p>
              </div>
              <div className="contact-infos mt-4">
                <ul className='d-flex flex-column gap-2 px-0'>
                  <li>
                    <div className="icon d-flex align-items-center justify-content-center">
                      <CiMap />
                    </div>
                    <div className="content">
                      <h3>Visit Me</h3>
                      <p>Yeni Ramana qəsəbəsi,  Manafov <br /> Osman küçəsi</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon d-flex align-items-center justify-content-center">
                      <CiHeadphones />
                    </div>
                    <div className="content">
                      <h3>Contact Info</h3>
                      <p>+994 50 572-18-98 <br /> ramazandev2024@gmail.com</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact