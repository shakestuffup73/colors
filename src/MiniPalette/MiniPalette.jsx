import { styled } from '@mui/material/styles'

const MainDiv = styled('div')(() => ({
  backgroundColor: 'white',
  borderRadius: '5px',
  padding: '.5rem',
  position: 'relative',
  overflow: 'hidden',
  border: '3px solid orange',
  "&:hover": {
    cursor: 'pointer',
  }
}))

const ColorsDiv = styled('div')(() => ({
  backgroundColor: 'grey', 
  border: '3px solid teal',
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

const MiniPalette = (props) => {
  const palette = props;

  return ( 
    <>
      <MainDiv>
        <ColorsDiv><h3>Banana</h3></ColorsDiv>
        <Title>{palette.paletteName}</Title><Emoji>{palette.emoji}</Emoji>
      </MainDiv>
    </>
  );
}

export default MiniPalette;