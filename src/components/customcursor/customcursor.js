import React from 'react';
import BasicCursor from './basiccursor'; // Import the BasicCursor component
import ExpandedCursor from './expandedcursor'; // Import the ExpandedCursor component
import * as styles from './customcursor.module.css'; // Import CSS module for styling

const CustomCursor = () => {
  const [hovered, setHovered] = React.useState(false);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  const updateCursorPosition = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  React.useEffect(() => {
    document.addEventListener('mousemove', updateCursorPosition);

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div className={`${styles.customCursor} ${hovered ? styles.hovered : ''}`} style={{ left: `${position.x}px`, top: `${position.y}px` }}>
      {hovered ? <ExpandedCursor /> : <BasicCursor />}
    </div>
  );
};

export default CustomCursor;
