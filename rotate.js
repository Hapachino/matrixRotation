function rotate(matrix, direction = 'l') {
  const height = matrix.length;
  const width = matrix[0].length;
  const total = height * width;
  const rotated = [];

  for (let i = 0; i < total; i++) {
    const y = i / width | 0;
    const x = i % width;
    const newY = direction === 'r' ? x : width - 1 - x;
    const newX = direction === 'r' ? height - 1 - y : y;
    const value = matrix[y][x]; 

    if (!rotated[newY]) rotated[newY] = [];
    
    rotated[newY][newX] = value;
  }

  return rotated;
}

const shape = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [9, 10, 11]
];

const rotatedRight = [
  [9, 6, 3, 0],
  [10, 7, 4, 1],
  [11, 8, 5, 2],
];

const rotatedLeft = [
  [2, 5, 8, 11],
  [1, 4, 7, 10],
  [0, 3, 6, 9],
];

const test = rotate(shape, 'l');
test.forEach(x => console.log(x));
