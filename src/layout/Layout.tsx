import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import Contact from '../pages/Contact/Contact'
import Sidebar from '../components/Sidebar/Sidebar'

const Layout: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <div className='row'>
          <div className="col-12 col-sm-12 col-md-3 col-lg-3">
            <Sidebar />
          </div>
          <div className="col-12 col-sm-12 col-md-9 col-lg-9">
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/about' element={<About />}></Route>
              <Route path='/contact' element={<Contact />}></Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default Layout