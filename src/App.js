import './App.css';
import Palette from './Palette/Palette.jsx'
import PaletteList from './PaletteList/PaletteList.jsx'
import SingleColorPalette from './SingleColorPalette/SingleColorPalette.jsx';
import seedColors from './seedColors.js';
import generatePalette from './colorHelpers.js'
import NavBar from './NavBar/NavBar';
import { useState, useMemo } from 'react';
import { Routes, Route, useParams } from 'react-router-dom'

function App() {

  const [sliderLevel, setSliderLevel] = useState(500)
  const [showSliderLevel] = useState(true)
  const [format, setFormat ] = useState('hex')
  const [open, setOpen] = useState(false)

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
          showSliderLevel={showSliderLevel}
        />
        <Palette palette={palette} sliderLevel={sliderLevel} format={format}/>
      </>
    )
  }

  function SingleColorPaletteWithParams() {
    const params = useParams();
    const palette = useMemo(() => generatePalette(findPalette(params.paletteId)), [params.paletteId]);

    return (
      <>
        <NavBar 
          sliderLevel={sliderLevel}
          handleSliderChange={handleSliderChange}
          format={format}
          handleChange={handleChange}
          open={open}
          closeSnackBar={closeSnackBar}
          showSliderLevel={!showSliderLevel}
        />
        <SingleColorPalette palette={palette} sliderLevel={sliderLevel} format={format} colorId={params.colorId}/>
      </>
    )
  }

  function HomePaletteList() {
    return (
      <>
        <div id="titleDiv"><h1>React Colors Refactored</h1></div>
        <PaletteList seedColors={seedColors} />
      </>
    )
  }

  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePaletteList />}/>
        <Route exact path="/palette/:id" element={<PaletteWithParams />}/>
        <Route exact path="/palette/:paletteId/:colorId" element={<SingleColorPaletteWithParams />} />
      </Routes>
    </>
  );
}

export default App;
