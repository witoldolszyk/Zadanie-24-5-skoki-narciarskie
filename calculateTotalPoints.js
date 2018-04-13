const calculateDistancePoints = require('./calculateDistancePoints');
const calculateStylePoints = require('./calculateStylePoints');

const calculateTotalPoints = (distance, hillSize, kPoint, styleNotes, windFactor = 0, gateFactor = 0) => {
  if (typeof windFactor !== 'number' || typeof gateFactor !== 'number') {
    return 'zły typ danych';
    } else {
    const distancePoints = calculateDistancePoints(distance, hillSize, kPoint);
    const stylePoints = calculateStylePoints(styleNotes);

    const total = Math.round(((distancePoints + stylePoints + windFactor + gateFactor)*10))/10;
    return total;
  };
};

module.exports = calculateTotalPoints;
