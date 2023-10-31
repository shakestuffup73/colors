import './App.css';
import Palette from './Palette/Palette.jsx'
import seedColors from './seedColors.js';
import generatePalette from './colorHelpers.js'
import NavBar from './NavBar/NavBar';
import { useState } from 'react';

function App() {

  const [sliderLevel, setSliderLevel] = useState(500);

  const handleSliderChange = (value) => {
    setSliderLevel(value)
  }

  return (
    <div className="App">
      <NavBar 
        sliderLevel={sliderLevel}
        handleSliderChange={handleSliderChange}
      />
      <Palette 
        palette={generatePalette(seedColors[2])} 
        sliderLevel={sliderLevel}
      />
    </div>
  );
}

export default App;
