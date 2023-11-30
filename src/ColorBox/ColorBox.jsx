import './ColorBox.css'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ColorBox = ({name, background, paletteId, colorId }) => {

  console.log('this is paletteId in ColorBox', paletteId)
  console.log('this is colorId in ColorBox', colorId)

  const [showCopy, setShowCopy] = useState(false)
  
  const copyToClipboard = () => {
    setShowCopy(!showCopy)
    setTimeout(() => {
      setShowCopy(!showCopy)
    }, 1500)
  }

  return ( 
      <CopyToClipboard text={background} onCopy={copyToClipboard}>
        <div className='ColorBox' style={{background}}>
          <div
            style={{background}}
            className={`copyOverlay ${showCopy && "show"}`}
          >
            <div className={`copy-msg ${showCopy && "show"}`}>
              <h1>copied!</h1>
              <p>{background}</p>
            </div>
          </div>
          <div className='copy-container'>
          <div className='box-content'>
            <span>{name}</span>
          </div>
            <button className='copy-button'>copy</button>
          </div>
        <Link to={`/palette/${paletteId}/${colorId}`} onClick={(e) => e.stopPropagation()}>
          <span className='see-more'>more</span>
        </Link>
        </div>
      </CopyToClipboard>
  );
}

export default ColorBox;