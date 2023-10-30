import './ColorBox.css'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useState } from 'react';

const ColorBox = ({name, background}) => {

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
          <span className='see-more'>more</span>
        </div>
      </CopyToClipboard>
  );
}

export default ColorBox;