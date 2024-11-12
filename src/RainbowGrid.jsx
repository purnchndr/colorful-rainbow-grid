import React, { useState, useEffect } from 'react';
// import './RainGrid.css';

const RainbowGrid = () => {
  const rows = 15; // Number of rows
  const cols = 20; // Number of columns
  const [grid, setGrid] = useState(
    Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () => randomColor())
    )
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setGrid(prevGrid =>
        prevGrid.map((row, rowIndex) =>
          row.map((_, colIndex) =>
            rowIndex === 0 ? randomColor() : prevGrid[rowIndex - 1][colIndex]
          )
        )
      );
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className='grid-container'
      style={{ background: 'url("./gamingBg.gif")' }}
    >
      {grid.map((row, rowIndex) => (
        <div className='row' key={rowIndex}>
          {row.map((color, colIndex) => (
            <div
              className='square'
              key={colIndex}
              style={{ backgroundColor: color }}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};

function randomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export default RainbowGrid;
