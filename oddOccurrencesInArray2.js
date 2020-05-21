function solution(A) {
  const isInt = (value) => !Number.isNaN(value)
        && parseInt(Number(value), 10) === value
        && !Number.isNaN(parseInt(value, 10));

  if (!A) {
    throw new Error(`Solution: ${A} не является массивом!`);
  }

  const size = A.length;

  if (size === 0 || size > 1000000) {
    throw new Error(`Solution: Пустой массив или длина массива больше допустимой, size: ${size}`);
  }

  if (size % 2 === 0) {
    throw new Error('Solution: Число элементов массива чётное!');
  }

  A.forEach((item) => {
    if (!isInt(item) || item < 1 || item > 1000000000) {
      throw new Error(`Solution: В массиве находятся элементы вне заданного диапозона, ${item}`);
    }
  });

  const B = A.sort();

  let i = 0;
  while (i < B.length) {
    if (B[i] === B[i + 1]) {
      i += 2;
    } else {
      return B[i];
    }
  }

  return null;
}

try {
  console.log(solution([9, 7, 3, 9, 3, 9, 9, 7, 10]));
} catch (e) {
  console.error(`${e.name}: ${e.message}`);
}
