const calculateDistancePoints = (distance, hillSize, kPoint) => {
    if (typeof distance !== 'number' || typeof hillSize !== 'string' || typeof kPoint !== 'number') {
        return 'wrong type of data';
    } else {
        switch (hillSize) {
            case 'normal':
              return 60 + ((distance - kPoint)*2);

            case 'big':
              return 60 + ((distance - kPoint)*1.8);

            case 'mamut':
              return 120 + ((distance - kPoint)*1.2);

            default:
              return 'wrong hillSzie';
        }
    }
};

module.exports = calculateDistancePoints;
