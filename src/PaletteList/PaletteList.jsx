import MiniPalette from "../MiniPalette/MiniPalette";
import { styled } from '@mui/material/styles'
import { v4 as uuidv4 } from 'uuid'

const RootDiv = styled('div')(() => ({
  backgroundColor: 'blue',
  height: '100%',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
}))

const ContainerDiv = styled('div')(() => ({
  width: '50%',
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  flexWrap: 'wrap',
  border: '2px solid white'
}))

const Nav = styled('nav')(() => ({
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  color: 'white',
}))

const PalettesDiv = styled('div')(() => ({
  boxSizing: 'border-box',
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 30%)',
  gridGap: '5%'
}))

const PaletteList = ({ palettes }) => {
  return ( 
    <>
      <RootDiv>
        <ContainerDiv>

        <Nav><h1>React Colors</h1></Nav>

        <PalettesDiv>
          <MiniPalette />
          {palettes.map(palette => (
            <MiniPalette {...palette} key={uuidv4()} />
          ))}
        </PalettesDiv>

        </ContainerDiv>
      </RootDiv>
    </>
  );
}

export default PaletteList;