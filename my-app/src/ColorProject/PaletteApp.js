import React from 'react';
import Palette from './ColorComponents/Palette';
import SeedColors from './SeedColors';
import {generatePalette} from "./ColorComponents/ColorHelers"

const PaletteApp = () => {
    // console.log(generatePalette(SeedColors[4]))
    return (
        <>
            
            <Palette palette={generatePalette(SeedColors[4])} />
            
        </>
    );
};

export default PaletteApp;