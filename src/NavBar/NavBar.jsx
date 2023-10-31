import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

const NavBar = ({ sliderLevel, handleSliderChange }) => {

  return ( 
    <>
      <header className="header">
        <div className="logo">
          <a href="#">reactcolorpicker</a>
        </div>
        <div className="slider">
          <Slider defaultValue={sliderLevel} min={100} max={900} step={100}
            onChange={handleSliderChange}
          />
        </div>
      </header>
    </>
  );
}

export default NavBar;