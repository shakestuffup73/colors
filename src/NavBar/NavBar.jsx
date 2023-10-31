import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import './NavBar.css'

const NavBar = ({ sliderLevel, handleSliderChange }) => {

  return ( 
    <>
      <header className="NavBar">
        <div className="logo">
          <a href="#">reactcolorpicker</a>
        </div>
        <div className="slider-container">
          <span>Level: {sliderLevel} </span>
          <div className="slider">
            <Slider 
              defaultValue={sliderLevel} 
              min={100} 
              max={900} 
              step={100}
              onChange={handleSliderChange}
            />
          </div>
        </div>
      </header>
    </>
  );
}

export default NavBar;