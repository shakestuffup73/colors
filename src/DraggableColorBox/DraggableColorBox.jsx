import { styled } from '@mui/material/styles';


const DraggableColorBox = ({ color }) => {

  const DraggableColorBoxStyle = styled('div')(() => ({
    width: '20%',
    height: '20vh',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-3.5px'
  }))

  return ( 
      <>
        <DraggableColorBoxStyle 
          style={{backgroundColor: color}}
        >{color}
        </DraggableColorBoxStyle>
      </>
  );
}

export default DraggableColorBox;