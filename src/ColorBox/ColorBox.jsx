const ColorBox = ({name, background}) => {
  return ( 
    <>
      <div className='ColorBox' style={{background: background}}>
        <span>{name}</span>
        <span>MORE</span>
      </div>
    </>
  );
}

export default ColorBox;