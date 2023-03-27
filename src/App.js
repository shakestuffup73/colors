import './App.css';
import Palette from './Palette.js'
import seedColors from './seedColors';

function App() {
  return (
    <div className="App">
      <Palette {...seedColors} />
    </div>
  );
}

export default App;
