import { styled } from '@mui/material/styles'
import { v4 as uuidv4 } from 'uuid'

const MainDiv = styled('div')(() => ({
  backgroundColor: 'white',
  borderRadius: '5px',
  padding: '.5rem',
  position: 'relative',
  height: '100%',
  width: '100%',
  overflow: 'hidden',
  border: '3px solid orange',
  "&:hover": {
    cursor: 'pointer',
  }
}))

const ColorsDiv = styled('div')(() => ({
  border: '3px solid teal',
  height: '130px',
  backgroundColor: '#f2efee',
  borderRadius: '5px',
  overflow: 'hidden',
}))

const Title = styled('h4')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: 0,
  color: 'black',
  padding: '.5rem',
  fontSize: '1rem',
  position: 'relative',
}))

const Emoji = styled('div')(() => ({
  marginLeft: '.5rem',
  fontSize: '1.5rem',
}))

const MiniColors = styled('div')(() => ({
  height: '25%',
  width: '20%',
  display: 'inline-block',
  margin: '0 auto',
  position: 'relative',
  marginBottom: '-3.5px'
}))

const MiniPalette = (props) => {
  const { seedColor } = props;
  console.log(props);

  return ( 
    <>
      <MainDiv>

        <ColorsDiv>
          {seedColor.colors.map(color => (
            <MiniColors style={{ backgroundColor: color.color }} key={uuidv4()} />
          ))}
        </ColorsDiv>

        <Title>{seedColor.paletteName}</Title><Emoji>{seedColor.emoji}</Emoji>
        
      </MainDiv>
    </>
  );
}

export default MiniPalette;