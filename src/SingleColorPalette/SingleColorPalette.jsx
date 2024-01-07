import React from 'react';
import ColorBox from "../ColorBox/ColorBox";
import { useState, useEffect } from 'react';

const SingleColorPalette = ({ sliderLevel, format, palette, colorId }) => {

  console.log('this is sliderLevel', sliderLevel)
  console.log('this is format', format)
  console.log('this is palette', palette)
  console.log('this is colorId', colorId)

  // return all shades of given color
  // gatherShades()

  const [ shades, setShades ] = useState([])
  
  useEffect(() => {
    setShades(gatherShades(palette, colorId))
  }, [palette, colorId])

  function gatherShades(palette, colorToFilterBy) {
    let shades = []
    let allColors = palette.colors

    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter(color => color.id === colorToFilterBy)
      )
    }
    return shades.slice(1);
  }

  const shadeBoxes = shades.map(color => (
    <ColorBox key={color.id} name={color.name} color={color.hex} showLink={false} background={color.hex} />
  ));


  return (
    <div>
      <h1>Single Color Palette Component!</h1>
      <div>{shadeBoxes}</div>
    </div>
  );
}

export default SingleColorPalette;


