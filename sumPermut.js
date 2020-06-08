function solution(A) {
  const UPPER_LIMIT = 100000;

  const isInt = (value) => !Number.isNaN(value)
        && parseInt(Number(value), 10) === value
        && !Number.isNaN(parseInt(value, 10));

  if (!A) {
    throw new Error(`${A} не является массивом!`);
  }

  const size = A.length;

  if (size < 0 || size > UPPER_LIMIT) {
    throw new Error(`Пустой массив или длина массива больше допустимой, size: ${size}`);
  }

  A.forEach((item) => {
    if (!isInt(item) || item < 0 || item > UPPER_LIMIT) {
      throw new Error(`Solution: В массиве находятся элементы вне заданного диапозона, ${item}`);
    }
  });

  return true;
}

try {
  console.log(solution([2, 3, 1, 5]));
} catch (e) {
  console.error(`${e.name}: ${e.message}`);
}
