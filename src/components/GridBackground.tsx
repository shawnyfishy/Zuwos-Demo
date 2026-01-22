import React from 'react';

const GridBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 grid-lines h-full w-full" />
  );
};

export default GridBackground;