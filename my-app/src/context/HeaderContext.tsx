import React, { createContext, useState } from "react";



interface ThemeProps  {
    children:React.ReactNode;
}

interface HeaderData {

    isDarkMode:boolean,
    setIsDarkMode:()=>void;

}

export const HeaderTheme = createContext<any>([]);


const HeaderContext:React.FC<ThemeProps> = ({children}) => {

    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
    

    const value = {isDarkMode,setIsDarkMode} 

    return (
            <HeaderTheme.Provider value={value}>
                {children}
            </HeaderTheme.Provider>
        
        )
}

export default HeaderContext;