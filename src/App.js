import './App.css';
import Palette from './Palette/Palette.jsx'
import seedColors from './seedColors';

function App() {
  return (
    <div className="App">
      <Palette seedColors={{...seedColors[2]}} />
    </div>
  );
}

export default App;
