import ColorBox from "../ColorBox/ColorBox";
import './Palette.css'
import { v4 as uuidv4 } from 'uuid'

const Palette = ({ sliderLevel, palette, format }) => {

  const colorBoxes = palette.colors[sliderLevel].map(color => (
    <ColorBox name={color[format]} background={color[format]} key={uuidv4()} />
  ))

  return ( 
    <>
      <div className="Palette">
        <div className="Palette-colors">
          {colorBoxes}
        </div>
      </div>
    </>
  );
}

export default Palette;