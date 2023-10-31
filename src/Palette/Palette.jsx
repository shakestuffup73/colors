import ColorBox from "../ColorBox/ColorBox";
import './Palette.css'
import { v4 as uuidv4 } from 'uuid'

const Palette = (props) => {

  console.log('this is props:', props)

  const colorBoxes = props.seedColors.colors?.map(color => (
    <ColorBox name={color.name} background={color.color} key={uuidv4()} />
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