// You should implement your task here.

module.exports = function towelSort(matrix) {
    return matrix
        ? matrix.reduce((accumulator, currentValue, index) => {
              return index % 2 == 0
                  ? accumulator.concat(currentValue)
                  : accumulator.concat(currentValue.reverse());
          }, [])
        : [];
};
