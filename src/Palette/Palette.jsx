import ColorBox from "../ColorBox/ColorBox";
import './Palette.css'
import PaletteFooter from "../PaletteFooter/PaletteFooter";
import { v4 as uuidv4 } from 'uuid'

const Palette = ({ sliderLevel, palette, format }) => {

  const colorBoxes = palette.colors[sliderLevel]?.map(color => (
    <ColorBox name={color[format]} background={color[format]} key={uuidv4()} paletteId={palette.id} colorId={color.id}/>
  ))

  return ( 
    <> 
      <div className="Palette">
        <div className="Palette-colors">
          {colorBoxes}
        </div>
        <PaletteFooter palette={palette} />
      </div>
    </>
  );
}

export default Palette;