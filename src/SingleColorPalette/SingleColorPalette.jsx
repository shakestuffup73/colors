import React from 'react';
import ColorBox from "../ColorBox/ColorBox";
import PaletteFooter from '../PaletteFooter/PaletteFooter';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

const SingleColorPalette = ({ format, palette, colorId }) => {

  const { id } = palette

  const [ showLink ] = useState(false)
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
    <ColorBox key={color.id} name={color.name} color={color.hex} showLink={!showLink} background={color[format]} />
  ));

  const colorName = colorId.toUpperCase() 

  return (
    <>
      <div>
        <h1>{ colorName } - Shade Palette</h1>
          <div className='SingleColorPalette'>{shadeBoxes}
            <div className='ColorBox'>
              <div className='box-content'>
                <div className='back-button'><Link to={`/palette/${id}`}>Go Back</Link></div>
              </div>
            </div>
          </div>
        </div>
      <div>
        <PaletteFooter palette={palette} />
      </div>
    </>
  );
}

export default SingleColorPalette;


