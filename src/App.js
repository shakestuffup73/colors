import './App.css';
import Palette from './Palette/Palette.jsx'
import seedColors from './seedColors.js';
import generatePalette from './colorHelpers.js'
import NavBar from './NavBar/NavBar';
import { useState } from 'react';

function App() {

  const [sliderLevel, setSliderLevel] = useState(500);
  const [format, setFormat ] = useState('hex')
  const [open, setOpen] = useState(true)

  const closeSnackBar = () => {
    setOpen(false)
  }

  const handleSliderChange = (value) => {
    setSliderLevel(value)
  }

  function handleChange (e) {
    setFormat(e.target.value)
    setOpen(true)
  }

  return (
    <div className="App">
      <NavBar 
        sliderLevel={sliderLevel}
        handleSliderChange={handleSliderChange}
        format={format}
        handleChange={handleChange}
        open={open}
        closeSnackBar={closeSnackBar}
      />
      <Palette 
        palette={generatePalette(seedColors[2])} 
        sliderLevel={sliderLevel}
        format={format}
      />
    </div>
  );
}

export default App;
