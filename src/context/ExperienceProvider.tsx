// src/context/ExperienceContext.tsx
import React, { createContext, useEffect, useState } from 'react';

interface ExperienceProps {
  id: number;
  title: string;
  image: string;
  year: number;
  position: string;
}

interface ExperienceProviderProps {
  children: any;
}

interface ExperienceContextProps {
  experienceData: ExperienceProps[];
}

export const ExperienceContext = createContext<ExperienceContextProps | undefined>(undefined)

const ExperienceProvider: React.FC<ExperienceProviderProps> = ({ children }) => {
  const [experienceData, setExperienceData] = useState<ExperienceProps[]>([]);

  useEffect(() => {
    const getExperienceData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5500/src/data/experience.json');
        const data = await response.json();
        setExperienceData(data);
      } catch (error) {
        console.error('Error fetching the data: ', error);
      }
    };
    getExperienceData();
  }, []);

  return (
    <ExperienceContext.Provider value={{ experienceData }}>
      {children}
    </ExperienceContext.Provider>
  );
};

export default ExperienceProvider;
