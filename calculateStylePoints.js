const calculateStylePoints = (styleNotes) => {
  //check statment
  if (!Array.isArray(styleNotes)) {
    return 'zły format danych!';
  } else if (styleNotes.length !== 5) {
    return 'za mało not!';
  } else if (styleNotes.filter( note => typeof note === 'number').length < 5) {
    return 'noty powinny być liczbami!';
  } else if (checkDecimal(styleNotes).length < 5) {
    return 'zła nota!';
  }

  // core
  const note = styleNotes.sort((a, b) => a - b);
  note.pop();
  note.shift();
  return note.reduce((sum, total) => sum + total, 0);
};

module.exports = calculateStylePoints;

// helper function
function checkDecimal(arrayNotes) {
  return arrayNotes
    .map(note => note.toString().length < 3 ? note + '.0' : note.toString())
    .filter(noteStr => noteStr[noteStr.length -1] === '0' || noteStr[noteStr.length -1] === '5');
};
