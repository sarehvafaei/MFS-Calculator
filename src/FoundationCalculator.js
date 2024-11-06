// src/FoundationCalculator.js
import React, { useState } from 'react';
import LoadInput from './components/LoadInput';
import SoilDataInput from './components/SoilDataInput';
import ResultsDisplay from './components/ResultsDisplay';
import { calculateFoundation } from './utils/calculateFoundation';

const FoundationCalculator = () => {
  const [loadData, setLoadData] = useState(null);
  const [soilData, setSoilData] = useState(null);
  const [results, setResults] = useState(null);

  const handleLoadSubmit = (data) => {
    setLoadData(data);
  };

  const handleSoilSubmit = (data) => {
    setSoilData(data);
    if (loadData) {
      const foundationResults = calculateFoundation(
        loadData.deadLoad + loadData.liveLoad,
        data.soilBearingCapacity,
        data.safetyFactor
      );
      setResults(foundationResults);
    }
  };

  return (
    <div>
      <h1>Foundation Calculator</h1>
      <LoadInput onLoadSubmit={handleLoadSubmit} />
      <SoilDataInput onSoilSubmit={handleSoilSubmit} />
      <ResultsDisplay results={results} />
    </div>
  );
};

export default FoundationCalculator;
