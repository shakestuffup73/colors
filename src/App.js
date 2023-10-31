import './App.css';
import Palette from './Palette/Palette.jsx'
import seedColors from './seedColors.js';
import generatePalette from './colorHelpers.js'

function App() {
  
  return (
    <div className="App">
      <Palette palette={generatePalette(seedColors[2])} />
    </div>
  );
}

export default App;
