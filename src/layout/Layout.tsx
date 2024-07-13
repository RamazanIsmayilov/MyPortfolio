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
        <div className='flex gap-5'>
          <Sidebar />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default Layout