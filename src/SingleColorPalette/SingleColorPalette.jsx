import React from 'react';
import ColorBox from "../ColorBox/ColorBox";
import { v4 as uuidv4 } from 'uuid';

const SingleColorPalette = ({ sliderLevel, format, palette }) => {
  // Gather shades for the given sliderLevel
  const shades = palette.colors[sliderLevel].map(color => {
    return {
      name: color.name,
      hex: color.hex, // Assuming color object has a hex value
      id: color.id
    };
  });

  // Generate color boxes for each shade
  const shadeBoxes = shades.map(shade => (
    <div key={uuidv4()}>
      <ColorBox name={shade.name} background={shade.hex} paletteId={palette.id} colorId={shade.id} />
    </div>
  ));

  return (
    <div>
      <h1>Single Color Palette Component!</h1>
      <div>{shadeBoxes}</div>
    </div>
  );
}

export default SingleColorPalette;


