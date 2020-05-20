function solution(N) {
  const UPPER_LIMIT = 2147483647;

  const isInt = (value) => !Number.isNaN(value)
        && parseInt(Number(value), 10) === value
        && !Number.isNaN(parseInt(value, 10));

  if (!isInt(N)) {
    throw new Error(`Solution: Неверный тип данных ${N}`);
  }
  if (N < 1 || N > UPPER_LIMIT) {
    throw new Error(`Solution: Значение попадает в неверный диапозон ${N}`);
  }
  const binArr = N.toString(2).split('');

  let count = 0;
  const allGap = [];

  for (let i = 0; i < binArr.length; i += 1) {
    const elem = binArr[i] * 1;
    if (elem === 1) {
      if (count !== 0) {
        allGap.push(count);
        count = 0;
      }
    }
    if (elem === 0) {
      count += 1;
    }
  }
  return allGap.length !== 0 ? Math.max(...allGap) : 0;
}

try {
  // console.log(solution(null));
  // console.log(solution({}));
  // console.log(solution(undefined));
  // console.log(solution(-1));
  // console.log(solution(9));
  console.log(solution(529));
  // console.log(solution(20));
  // console.log(solution(15));
  // console.log(solution(32));
} catch (e) {
  console.error(`${e.name}: ${e.message}`);
}
