import React, { createContext, useEffect, useState } from 'react'

interface SkillsProps {
    id: number;
    title: string;
    image: string
}

interface SkillsProviderProps {
    children: any;
}

interface SkillsContextProps {
    skillsData: SkillsProps[]
}



export const SkillsContext = createContext<SkillsContextProps | undefined>(undefined)

const SkillsProvider: React.FC<SkillsProviderProps> = ({ children }) => {

    const [skillsData, setSkillsData] = useState<SkillsProps[]>([])

    useEffect(() => {
        const getSkillsData = async () => {
            try {
                const response = await fetch("http://127.0.0.1:5500/src/data/skills.json")
                const data = await response.json()
                setSkillsData(data)
            } catch (error) {
                console.error('Error fetching the data: ', error);
            }
        }
        getSkillsData()
    }, [])

    return (
        <SkillsContext.Provider value={{ skillsData }}>
            {children}
        </SkillsContext.Provider>
    )
}

export default SkillsProvider