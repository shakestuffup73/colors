import './App.css';
import Palette from './Palette/Palette.jsx'
import seedColors from './seedColors.js';
import generatePalette from './colorHelpers.js'
import NavBar from './NavBar/NavBar';
import { useState } from 'react';

function App() {

  const [sliderLevel, setSliderLevel] = useState(500);
  const [format, setFormat ] = useState('hex')

  const handleSliderChange = (value) => {
    setSliderLevel(value)
  }

  function handleChange(e) {
    console.log('this is e.target.value', e.target.value)
    setFormat(e.target.value)
  }

  return (
    <div className="App">
      <NavBar 
        sliderLevel={sliderLevel}
        handleSliderChange={handleSliderChange}
        format={format}
        handleChange={handleChange}
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
