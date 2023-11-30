import ColorBox from "../ColorBox/ColorBox";
import { v4 as uuidv4 } from 'uuid'

const SingleColorPalette = ({ sliderLevel, palette, format }) => {

  console.log('this is palette', palette)

  const colorBoxes = palette.colors[sliderLevel]?.map(color => (
    <ColorBox name={color[format]} background={color[format]} key={uuidv4()} />
  ))

  return ( 
    <>
      <div>
        <h1>Single Color Palette Component!</h1>
        <div>{colorBoxes}</div>
      </div>
      <footer className="palette-footer">
          {palette.paletteName}
        <span className="emoji">{palette.emoji}</span>
      </footer>
    </>
  );
}

export default SingleColorPalette;