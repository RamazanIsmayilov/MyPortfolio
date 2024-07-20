import React, { createContext, useEffect, useState } from 'react';

interface EducationProps {
  id: number;
  title: string;
  image: string;
  year: number;
  position: string;
}

interface EducationProviderProps {
  children: any;
}

interface EducationContextProps {
  educationData: EducationProps[];
}

export const EducationContext = createContext<EducationContextProps | undefined>(undefined);

const EducationProvider: React.FC<EducationProviderProps> = ({ children }) => {
  const [educationData, setEducationData] = useState<EducationProps[]>([]);

  useEffect(() => {
    const getEducationData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5500/src/data/education.json');
        const data = await response.json();
        setEducationData(data);
      } catch (error) {
        console.error('Error fetching the data: ', error);
      }
    };
    getEducationData();
  }, []);

  return (
    <EducationContext.Provider value={{ educationData }}>
      {children}
    </EducationContext.Provider>
  );
};

export default EducationProvider;
