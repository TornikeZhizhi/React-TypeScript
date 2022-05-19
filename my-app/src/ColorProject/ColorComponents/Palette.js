import React from 'react';
import ColorBox from './ColorBox';
import "../ColorCss/Palette.css";


const Palette = (props) => {

    const colorBoxes = props.colors.map(color=>(
        <ColorBox background={color.color} name={color.name}></ColorBox>
    ))

    return (
        <div className='Palette'>
            <div className='Palette-colors'>
                     {colorBoxes}
            </div>
        </div>
    );
};

export default Palette;