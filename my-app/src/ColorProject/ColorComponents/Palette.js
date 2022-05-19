import React, { useState } from 'react';
import ColorBox from './ColorBox';
import "../ColorCss/Palette.css";
import Slider from "rc-slider";
import "rc-slider/assets/index.css"


const Palette = ({palette}) => {

    const [level, setLever] = useState(500);


    const changeLevel = (level) => {

        setLever(level)
    }

    const colorBoxes = palette.colors[level].map(color=>(
        <ColorBox background={color.hex} name={color.name} key={color.name}></ColorBox>
    ))

    return (
        <div className='Palette'>
            <Slider defaultValue={level} min={100} max={900} step={100} onAfterChange={changeLevel}/>
            <div className='Palette-colors'>
                    {colorBoxes}
            </div>
        </div>
    );
};

export default Palette;