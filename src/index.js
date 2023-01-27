
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === (undefined)) { 
    return [];} 
    else {
    return matrix.reduce((accmulator, curient, i) => {
      curient.sort((a, b) => !(i & 1) ? a - b : b - a).map(e => accmulator.push(e));
  return accmulator;
}, []);}
}