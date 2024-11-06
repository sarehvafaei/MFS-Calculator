// src/components/ResultsDisplay.js
import React from 'react';

const ResultsDisplay = ({ results }) => (
  <div>
    {Object.entries(results).map(([key, value]) => (
      <p key={key}>
        <strong>{key.replace(/([A-Z])/g, ' $1')}:</strong> {value}
      </p>
    ))}
  </div>
);

export default ResultsDisplay;
