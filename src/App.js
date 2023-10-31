import './App.css';
import Palette from './Palette/Palette.jsx'
import seedColors from './seedColors.js';
import generatePalette from './colorHelpers.js'

function App() {
  console.log('this is generatePalette', generatePalette(seedColors[4]))
  return (
    <div className="App">
      <Palette seedColors={seedColors[2]} />
    </div>
  );
}

export default App;
