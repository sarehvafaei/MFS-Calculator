// src/utils/calculateFoundation.js
export const calculatePadFoundation = ({ appliedLoad, soilBearingCapacity, safetyFactor }) => {
    const adjustedBearingCapacity = soilBearingCapacity / safetyFactor;
    const requiredArea = appliedLoad / adjustedBearingCapacity;
    const sideLength = Math.sqrt(requiredArea);
    const thickness = 0.3; // example fixed value for demonstration
    const depth = 1.5 * thickness;
    const volume = sideLength * sideLength * thickness;
  
    return {
      area: requiredArea.toFixed(2),
      sideLength: sideLength.toFixed(2),
      thickness: thickness.toFixed(2),
      depth: depth.toFixed(2),
      volume: volume.toFixed(2),
      reinforcement: "Basic reinforcement info",
    };
  };
  
  export const calculateStripFooting = ({ wallLoad, soilBearingCapacity, safetyFactor }) => {
    const adjustedBearingCapacity = soilBearingCapacity / safetyFactor;
    const width = wallLoad / adjustedBearingCapacity;
    const thickness = 0.3; // example fixed value
    const depth = 1.5 * thickness;
    const volumePerMeter = width * thickness;
  
    return {
      width: width.toFixed(2),
      thickness: thickness.toFixed(2),
      depth: depth.toFixed(2),
      volumePerMeter: volumePerMeter.toFixed(2),
      reinforcement: "Basic reinforcement info",
    };
  };
  