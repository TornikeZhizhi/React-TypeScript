import React from 'react';
import Slider from 'rc-slider';
import "rc-slider/assets/index.css";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const NavBar = ({level,changeLevel, handleChange,format}) => {


    return (

        <header className='navbar'>
            <div className='slider_container'>
                <span>Level : {level}</span>
                <div className='slider'>
                    <Slider defaultValue={level}
                    min={100}
                    max={900} 
                    step={100} 
                    onAfterChange={changeLevel}/>
                    
                </div>
            </div>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={format}
                label="Age"
                onChange={handleChange}
                >
                <MenuItem value="hex">Hex - #ffffff</MenuItem>
                <MenuItem value="rgb">Rgb - rgb(255,255,255)</MenuItem>
                <MenuItem value="rgba">Rgba - Rgba(255,255,255, 1.0)</MenuItem>
             </Select>
        </header>
    );
};

export default NavBar;