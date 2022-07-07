import React, { useState } from 'react';
import ColorBox from './ColorBox';
import "rc-slider/assets/index.css"
import "../ColorCss/Palette.css";
import NavBar from './NavBar';


const Palette = ({palette}) => {

    const [level, setLever] = useState(500);
    const [format, setFormat] = useState("hex");


    const changeLevel = (level) => {

        setLever(level)
        console.log(level)
    }

    const changeFormat = (e)=> {
        setFormat(e.target.value)
    }

    const colorBoxes = palette.colors[level].map(color=>(
        <ColorBox background={color[format]} name={color.name} key={color.name}></ColorBox>
    ))

    return (
        <div className='Palette'>
            <NavBar level={level} format={[format]} changeLevel={changeLevel}
            handleChange={changeFormat}/>
            <div className='Palette-colors'>
                    {colorBoxes}
            </div>
        </div>
    );
};

export default Palette;