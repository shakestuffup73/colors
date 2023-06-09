import './ColorBox.css'
import { CopyToClipboard } from 'react-copy-to-clipboard';

const ColorBox = ({name, background}) => {
  return ( 
      <CopyToClipboard text={background}>
        <div className='ColorBox' style={{background}}>
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