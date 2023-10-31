import ColorBox from "../ColorBox/ColorBox";
import './Palette.css'
import { v4 as uuidv4 } from 'uuid'
import Slider from 'rc-slider'
import { useState } from "react";
import 'rc-slider/assets/index.css'

const Palette = (props) => {

  const [sliderLevel, setSliderLevel] = useState(500);

  const handleSliderChange = (value) => {
    setSliderLevel(value)
  }

  const colorBoxes = props.palette.colors[sliderLevel].map(color => (
    <ColorBox name={color.name} background={color.hex} key={uuidv4()} />
  ))

  return ( 
    <>
      <div className="Palette">
        <div className="slider">
          <Slider defaultValue={sliderLevel} min={100} max={900} step={100}
            onChange={handleSliderChange}
          />
        </div>
        <div className="Palette-colors">
          {colorBoxes}
        </div>
      </div>
    </>
  );
}

export default Palette;