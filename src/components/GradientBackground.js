// src/components/GradientBackground.js
import React from 'react';

const GradientBackground = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-lg"></div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default GradientBackground;
