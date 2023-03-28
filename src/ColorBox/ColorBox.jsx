const ColorBox = ({color}) => {
  return ( 
    <>
      <div className='ColorBox'>
        <span style={{color: `${color.color}`}}>MORE</span>
      </div>
    </>
  );
}

export default ColorBox;