import './App.css';
import Palette from './Palette/Palette.jsx'
import PaletteList from './PaletteList/PaletteList.jsx'
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

  function HomePaletteList() {
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
        <PaletteList palettes={seedColors} />
      </>
    )
  }

  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePaletteList />}/>
        <Route exact path="/palette/:id" element={<PaletteWithParams />}/>
      </Routes>
    </>
  );
}

export default App;
