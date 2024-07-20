// src/components/About.tsx
import React, { useContext } from 'react';
import { EducationContext } from '../../context/EducationProvider';
import { ExperienceContext } from '../../context/ExperienceProvider';
import { SkillsContext } from '../../context/SkillsProvider';

const About: React.FC = () => {
  const educationContext = useContext(EducationContext);
  const experienceContext = useContext(ExperienceContext);
  const skillsContext = useContext(SkillsContext);

  if (!educationContext || !experienceContext || !skillsContext) {
    return <div>No data available</div>;
  }

  const { educationData } = educationContext;
  const { experienceData } = experienceContext;
  const { skillsData } = skillsContext;

  return (
    <div className='about-page'>
      <div className="area">
        <div className="row g-4">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <div className="education">
              <div className="head">
                <p className='text-light fw-medium'>Education</p>
              </div>
              <div className="education-lists mt-5">
                {educationData.map(item => (
                  <div key={item.id} className="content d-flex align-items-center gap-3 mb-4">
                    <div className="img">
                      <img width={60} src={item.image} alt={item.title} />
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
              <div className="experience-lists mt-5">
                {experienceData.map(item => (
                  <div key={item.id} className="content d-flex align-items-center gap-3 mb-4">
                    <div className="img">
                      <img width={60} src={item.image} alt={item.title} />
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
        </div>
      </div>
      <div className="skills mt-3">
        <div className="area d-flex align-items-center gap-5">
          <div className="head">
            <p className='text-light fw-medium m-0'>Skills</p>
          </div>
        </div>
        <div className="logos d-flex gap-5 mt-2">
          {skillsData.map(item => (
            <div key={item.id} className="content d-flex align-items-center gap-3 mb-4">
              <div className="img">
                <img width={60} src={item.image} alt={item.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
