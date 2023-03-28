import ColorBox from "../ColorBox/ColorBox";

const Palette = (props) => {

  console.log('this is props:', props)

  
  const colorBoxes = props.seedColors.colors.map(color => (
    <ColorBox name={color.name} background={color.color}/>
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