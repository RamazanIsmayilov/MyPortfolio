// src/components/About.tsx
import React, { useContext } from 'react';
import { EducationContext } from '../../context/EducationProvider';

const About: React.FC = () => {
  const educationContext = useContext(EducationContext);

  if (!educationContext) {
    return <div>No education data available</div>;
  }

  const { educationData } = educationContext;

  return (
    <div className='about'>
      <div className="row g-4">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
          <div className="education">
            <div className="head">
              <p className='text-light fw-medium'>Education</p>
            </div>
            <div className="education-lists mt-5">
              {educationData.map(item => (
                <div key={item.id} className="content d-flex align-items-cemter gap-3 mb-4">
                  <div className="img">
                    <img width={60} src={item.image} alt="image" />
                  </div>
                  <div className="information">
                    <h6 className='m-0 '>{item.title}</h6>
                    <h6 className='m-0'>{item.position}</h6>
                    <span>{item.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
          <div className="experience">
            <div className="head">
              <p className='text-light fw-medium'>Experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
