import ColorBox from "../ColorBox/ColorBox";

const Palette = (props) => {

  console.log('this is props:', props)

  
  const colorBoxes = props.seedColors.colors.map(color => (
    <ColorBox color={color} />
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