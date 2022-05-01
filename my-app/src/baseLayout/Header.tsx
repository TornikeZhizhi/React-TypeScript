import React, { useContext } from 'react';
import { HeaderTheme } from '../context/HeaderContext';
import  {ProductsTheme} from '../context/ProductsContext';


const Header = () => {

    const {isDarkMode,setIsDarkMode} = useContext(HeaderTheme);
    

    const toggleHandler = ()=>{
        setIsDarkMode(!isDarkMode)
    }
    

    return (
        <div className='header' style={{background:isDarkMode?"red":"green"}}>
            <button onClick={toggleHandler}>Toggle Color</button>
        </div>
    );
};

export default Header;