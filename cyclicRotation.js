function solution(A, K) {
  const isInt = (value) => !Number.isNaN(value)
      && parseInt(Number(value), 10) === value
      && !Number.isNaN(parseInt(value, 10));

  if (!isInt(K) || K < 0 || K > 100) {
    throw new Error(`Solution: Неверный тип или значение попадает в неверный диапозон, K: ${K}`);
  }

  const size = A.length;

  if (size === 0 || size > 100) {
    throw new Error(`Solution: Пустой массив или длина массива больше допустимой. ${size}`);
  }

  A.forEach((item) => {
    if (!isInt(item) || item < -1000 || item > 1000) {
      throw new Error(`Solution: В массиве находятся элементы вне заданного диапозона, ${item}`);
    }
  });

  for (let i = 0; i < K; i += 1) {
    A.unshift(A.pop());
  }

  return A;
}

try {
  console.log(solution([3, 8, 9, 7, 6], 3));
  console.log(solution([0, 0, 0], 1));
  console.log(solution([1, 2, 3, 4], 4));
} catch (e) {
  console.error(`${e.name}: ${e.message}`);
}
