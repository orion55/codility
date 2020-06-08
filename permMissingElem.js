function solution(A) {
  const UPPER_LIMIT = 100000;

  const isInt = (value) => !Number.isNaN(value)
        && parseInt(Number(value), 10) === value
        && !Number.isNaN(parseInt(value, 10));

  if (!A) {
    throw new Error(`${A} не является массивом!`);
  }

  if (A.length === 0) return 1;

  const N = A.length;

  if (N <= 0 || N > UPPER_LIMIT) {
    throw new Error(`Пустой массив или длина массива больше допустимой, size: ${N}`);
  }

  if (N === 0 || N === 1) {
    return 1;
  }

  let flag1 = false;
  let flagN1 = false;

  A.forEach((item) => {
    if (!isInt(item) || item < 1 || item > N + 1) {
      throw new Error(`В массиве находятся элементы вне заданного диапозона, ${item}`);
    }
    if (item === 1) {
      flag1 = true;
    }
    if (item === N + 1) {
      flagN1 = true;
    }
  });

  if (!flag1 || !flagN1) {
    return 1;
  }

  const min = Math.min(...A);
  const max = Math.max(...A);
  const sum = ((min + max) / 2) * (N + 1);
  const sumArr = A.reduce((a, b) => a + b, 0);

  return sum - sumArr;
}

try {
  console.log(solution([2, 3, 1, 5]));
  // console.log(solution([2, 3]));
} catch (e) {
  console.error(`${e.name}: ${e.message}`);
}
