import React from 'react'

const Contact: React.FC = () => {
  return (
    <div className='contact'>
      <div className="heading d-flex align-items-center justify-content-between gap-3">
        <p className='text-white m-0'>Contact</p>
        <div className="text-animation">
          <span className="text-white"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat deleniti pariatur quasi minus fugit maiores doloribus. Neque cupiditate ex fuga nostrum eaque unde incidunt possimus necessitatibus? Hic recusandae ea soluta!</span>
        </div>
      </div>
      <div className="connection">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-8 col-lg-8">
            <div className="left"></div>
          </div>
          <div className="col-12 col-sm-12 col-md-8 col-lg-8"></div>
        </div>
      </div>
    </div>
  )
}

export default Contact