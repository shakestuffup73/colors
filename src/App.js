import './App.css';
import Palette from './Palette/Palette.jsx'
import seedColors from './seedColors';

function App() {
  return (
    <div className="App">
      <Palette seedColors={{...seedColors[1]}} />
    </div>
  );
}

export default App;
