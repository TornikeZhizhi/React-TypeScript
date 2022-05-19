import React from 'react';
import Palette from './ColorComponents/Palette';
import SeedColors from './SeedColors';


const PaletteApp = () => {
    return (
        <div>
            
            <Palette {...SeedColors[4]} />
            
        </div>
    );
};

export default PaletteApp;