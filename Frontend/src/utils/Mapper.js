//takes in the row index,subrow index,and level: returns the corresponding x,y,z positions
export const getCoordinates = (row, subrow, level) => {
  const x = 1 * row;
  const y = 1.3 * level;
  const z = 5* subrow;
  return [ x, y, z ];
};
//takes in the row index,subrow index,and level: returns the corresponding x,y,z positions