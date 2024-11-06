// src/App.js
import React, { useState } from 'react';
import PadFoundationCalculator from './components/PadFoundationCalculator';
import StripFootingCalculator from './components/StripFootingCalculator';
import ResultsDisplay from './components/ResultsDisplay';

const App = () => {
  const [padResults, setPadResults] = useState(null);
  const [stripResults, setStripResults] = useState(null);

  return (
    <div>
      <h1>Foundation Calculator</h1>
      <h2>Pad Foundation</h2>
      <PadFoundationCalculator onResults={setPadResults} />
      {padResults && <ResultsDisplay results={padResults} />}

      <h2>Strip Footing</h2>
      <StripFootingCalculator onResults={setStripResults} />
      {stripResults && <ResultsDisplay results={stripResults} />}
    </div>
  );
};

export default App;
