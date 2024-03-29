import MiniPalette from "../MiniPalette/MiniPalette";
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles'
import { v4 as uuidv4 } from 'uuid'
import { Link } from 'react-router-dom'

const RootDiv = styled('div')(() => ({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
}))

const ContainerDiv = styled('div')(() => ({
  width: '70%',
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  flexWrap: 'wrap',
}))

const Nav = styled('nav')(() => ({
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  color: 'teal',
}))

const PalettesDiv = styled('div')(() => ({
  boxSizing: 'border-box',
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 30%)',
  gridGap: '5%',
}))


const PaletteList = (props) => {
  const { seedColors } = props;
  const navigate = useNavigate();

  const goToPalette = (id) => {
    navigate(`/palette/${id}`);
  }

  return ( 
    <>
      <RootDiv>
        <ContainerDiv>
          <Nav>
            <h1>React Colors</h1>
            <Link to="/palette/new" style={{color: "maroon"}}>Create New Palette</Link>
          </Nav>
          <PalettesDiv>
            {seedColors.map(seedColor => (
              <MiniPalette 
                key={uuidv4()} 
                seedColor={seedColor}
                onClick={() => goToPalette(seedColor.id)}
              />
            ))}
          </PalettesDiv>
        </ContainerDiv>
      </RootDiv>
    </>
  );
}

export default PaletteList;