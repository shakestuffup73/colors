import { styled, useTheme, ThemeProvider, createTheme, alpha, getContrastRatio } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { v4 as uuidv4 } from 'uuid'
import { ChromePicker } from 'react-color';
import { useState } from 'react';

const drawerWidth = 262;

const greenBase = '#354f52';
const greenMain = alpha(greenBase, 0.7);

const blueBase = '#6488a4';
const blueMain = alpha(blueBase, 0.7);

const cherryBase = '#66202c';
const cherryMain = alpha(cherryBase, 0.7);

const theme = createTheme({
  palette: {
    green: {
      main: greenMain,
      light: alpha(greenBase, 0.5),
      dark: alpha(greenBase, 0.9),
      contrastText: getContrastRatio(greenMain, '#fff') > 4.5 ? '#fff' : '#111',
    },
    blue: {
      main: blueMain,
      light: alpha(blueBase, 0.5),
      dark: alpha(blueBase, 0.9),
      contrastText: getContrastRatio(blueMain, '#fff') > 4.5 ? '#fff' : '#111',
    },
    cherry: {
      main: cherryMain,
      light: alpha(cherryBase, 0.5),
      dark: alpha(cherryBase, 0.9),
      contrastText: getContrastRatio(cherryMain, '#fff') > 4.5 ? '#fff' : '#111',
    }
  },
});

const centerContentStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '5%',
};

const Main = styled('main', {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const NewPaletteForm = () => {
  //const theme = useTheme();

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [currentColor, setCurrentColor] = useState('teal');
  const [paletteColors, setPaletteColors ] = useState(["purple"])

  function updateCurrentColor(newColor) {
    setCurrentColor(newColor.hex)
  }

  function addNewColor(currentColor) {
    setPaletteColors([...paletteColors, currentColor])
  }


  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Color Palette Generator
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <div style={centerContentStyle}>
          <Typography variant="h5">Design Your Palette</Typography>
        </div>
        <div>
          <Button variant="contained" color="secondary" size='small'>Clear Palette</Button>
          <Button variant="contained" color="primary" size='small'>Random Color</Button>
        </div>
        <div style={centerContentStyle}>
          <ChromePicker color={currentColor} onChangeComplete={updateCurrentColor}></ChromePicker>
          <Button 
            variant="contained" 
            style={{background: `${currentColor}`}} 
            size='small'
            onClick={() => addNewColor(currentColor)}
          >Add Color
          </Button>
        </div>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <div>
          <ul>
            {paletteColors.map(color => (
              <li key={(uuidv4)}>{color}</li>
            ))}
          </ul>
        </div>
      </Main>
    </Box>
    </ThemeProvider>
  );
}

export default NewPaletteForm;