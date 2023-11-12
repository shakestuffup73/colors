import './App.css';
import Palette from './Palette/Palette.jsx'
import seedColors from './seedColors.js';
import generatePalette from './colorHelpers.js'
import NavBar from './NavBar/NavBar';
import { useState, useMemo } from 'react';
import { Routes, Route, useParams } from 'react-router-dom'

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

  function findPalette (id) {
    return seedColors.find(function(palette) {
      return palette.id === id;
    })
  }

  function PaletteWithParams() {
    const params = useParams();
    const palette = useMemo(() => generatePalette(findPalette(params.id)), [params.id]);
    return (
      <>
        <NavBar 
          sliderLevel={sliderLevel}
          handleSliderChange={handleSliderChange}
          format={format}
          handleChange={handleChange}
          open={open}
          closeSnackBar={closeSnackBar}
        />
        <Palette palette={palette} sliderLevel={sliderLevel} format={format}/>
      </>
    )
  }

  function HomePalette() {
    return (
      <>
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
      </>
    )
  }

  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePalette />}/>
        <Route exact path="/palette/:id" element={<PaletteWithParams />}/>
      </Routes>
    </>
  );
}

export default App;
