import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import './NavBar.css'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const NavBar = ({ sliderLevel, handleSliderChange, format, handleChange  }) => {

  return ( 
    <>
      <header className="NavBar">
        <div className="logo">
          <a href='/'>reactcolorpicker</a>
        </div>
        <div className="slider-container">
          <span>Level: {sliderLevel} </span>
          <div className="slider">
            <Slider 
              defaultValue={sliderLevel} 
              min={100} 
              max={900} 
              step={100}
              onChange={handleSliderChange}
            />
          </div>
        </div>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth style={{marginTop: '5px'}}>
            <InputLabel id="demo-simple-select-label">Color Options</InputLabel>
            <Select 
              id="select"
              value={format}
              label="Color Options"
              onChange={handleChange}
              style={{width: "290px"}}
            >
              <MenuItem value='hex'>HEX - #ffffff</MenuItem>
              <MenuItem value='rgb'>RGB - rgb(255, 255, 255)</MenuItem>
              <MenuItem value='rgba'>RGBA - rgba(255, 255, 255, 1.0)</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </header>
    </>
  );
}

export default NavBar;