import './ColorBox.css'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import chroma from 'chroma-js'

const ColorBox = ({name, background, paletteId, colorId, showLink }) => {

  const [showCopy, setShowCopy] = useState(false)
  
  const copyToClipboard = () => {
    setShowCopy(!showCopy)
    setTimeout(() => {
      setShowCopy(!showCopy)
    }, 1500)
  }
  
  const isDarkColor = chroma(background).luminance() <= 0.35;
  const isLightColor = chroma(background).luminance() >= 0.4;

  return ( 
      <CopyToClipboard text={background} onCopy={copyToClipboard}>
        <div className='ColorBox' style={{background}}>
          <div
            style={{background}}
            className={`copyOverlay ${showCopy && "show"}`}
          >
            <div className={`copy-msg ${showCopy && "show"}`}>
              <h1>copied!</h1>
              <p className={isLightColor && "dark-text"}>{background}</p>
            </div>
          </div>
          <div className='copy-container'>
          <div className='box-content'>
            <span className={isDarkColor && "light-text"}>{name}</span>
          </div>
            <button className={`copy-button ${isLightColor && "dark-text"}`}>copy</button>
          </div>
        { !showLink &&
          <Link to={`/palette/${paletteId}/${colorId}`} onClick={(e) => e.stopPropagation()}>
            <span className={`see-more ${isLightColor && "dark-text"}`}>more</span>
          </Link>
        }
        </div>
      </CopyToClipboard>
  );
}

export default ColorBox;