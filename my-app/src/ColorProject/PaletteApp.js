import React from 'react';
import Palette from './ColorComponents/Palette';
import SeedColors from './SeedColors';


const PaletteApp = () => {
    return (
        <>
            
            <Palette {...SeedColors[4]} />
            
        </>
    );
};

export default PaletteApp;