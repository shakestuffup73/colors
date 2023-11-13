import MiniPalette from "../MiniPalette/MiniPalette";
import { v4 as uuidv4 } from 'uuid'

const PaletteList = ({ palettes }) => {

  return ( 
    <>
      <div>
        <MiniPalette />
        <h1>React Colors</h1>
          {palettes.map(palette => (
            <MiniPalette {...palette} key={uuidv4()} />
          ))}
      </div>
    </>
  );
}

export default PaletteList;