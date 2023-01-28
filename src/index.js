
// You should implement your task here.

module.exports = function towelSort (matrix) {
  return matrix === undefined
    ? []
    : matrix.reduce((accum, curent, item) => {
        curent.sort((a, b) => (!(item & 1) ? a - b : b - a)).map(e => accum.push(e));
        return accum;
      }, []);
}