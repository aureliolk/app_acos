import { createContext, useState } from "react";

export interface ChildrenProps {
    children: React.ReactNode
}

interface SkillContextProps {
    width: number
    setWidth:(width:number)=>void
    color: string
    setColor:(color:string)=>void
}

export const SkillContexts = createContext({} as SkillContextProps)

export const SkillProvider = ({children}:ChildrenProps) =>{
    const [width, setWidth] = useState<number>(0)
    const [color, setColor] = useState<string>("#e63312")

    return(
        <SkillContexts.Provider value={{setWidth, width,color,setColor}}>
            {children}
        </SkillContexts.Provider>
    )
}