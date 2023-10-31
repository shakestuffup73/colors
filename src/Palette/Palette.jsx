import ColorBox from "../ColorBox/ColorBox";
import './Palette.css'
import { v4 as uuidv4 } from 'uuid'

const Palette = ({ sliderLevel, palette }) => {

  const colorBoxes = palette.colors[sliderLevel].map(color => (
    <ColorBox name={color.name} background={color.hex} key={uuidv4()} />
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