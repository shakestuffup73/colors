const PaletteFooter = ({ palette }) => {
  return ( 
      <footer className="palette-footer">
        {palette.paletteName}
        <span className="emoji">{palette.emoji}</span>
      </footer>
  );
}

export default PaletteFooter;