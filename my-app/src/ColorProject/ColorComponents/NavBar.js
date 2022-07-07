import React, { useState } from 'react';
import Slider from 'rc-slider';
import "rc-slider/assets/index.css";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';


const NavBar = ({level,changeLevel, handleChange,format}) => {

    const [open, setOpen] = useState(false)
        const handleChange2 = (e) => {
            console.log(e.target.value)
            handleChange(e.target.value)
            setOpen(true);
          };

          
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
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
                onChange={handleChange2}
                >
                <MenuItem value="hex">Hex - #ffffff</MenuItem>
                <MenuItem value="rgb">Rgb - rgb(255,255,255)</MenuItem>
                <MenuItem value="rgba">Rgba - Rgba(255,255,255, 1.0)</MenuItem>
             </Select>

             <Snackbar
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
                message={<span>Format change To {format}</span>}
                action={action}
             />
        </header>
    );
};

export default NavBar;