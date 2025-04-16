//Name: Joana Osei
//Class: Web dev 
//Date: April 16, 2025.  

import { useState } from 'react'
import './App.css'

function App() {
  // Array of colors to cycle through - alternate between 3-5 colors 
  const colors = ['#ff6b6b', '#4ecdc4', '#ffe66d', '#6a0572', '#00b4d8'];
  
  // State to track current color index
  const [colorIndex, setColorIndex] = useState(0);
  
  // Function to handle button click and change color
  const changeColor = () => {
    // Calculate next index, loop back to 0 when we reach the end
    const nextIndex = (colorIndex + 1) % colors.length;
    setColorIndex(nextIndex);
  };

  return (
    <div 
      className="app-container"
      style={{ backgroundColor: colors[colorIndex] }}
    >
      <button onClick={changeColor} className="color-button">
        Change Color
      </button>
    </div>
  )
}

export default App