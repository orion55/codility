function solution(A) {
  const UPPER_LIMIT = 100000;
  const UPPER_ITEM = 1000000;
  const UPPER_ITEM_MINUS = -1000000;

  if (!A) return -1;

  const N = A.length;

  if (N < 1 || N > UPPER_LIMIT) return -1;

  A.forEach((item) => {
    if (item < UPPER_ITEM_MINUS || item > UPPER_ITEM) return -1;
  });

  if (N === 1) {
    return (A[0] === 1) ? 2 : 1;
  }

  const unique = [...new Set(A)].sort();

  const filterArr = unique.filter((item) => item > 0);

  const size = filterArr.length;

  if (size === 0) {
    return 1;
  } if (size === 1) {
    return (filterArr[0] === 1) ? 2 : 1;
  } if (size >= 2) {
    console.log(filterArr);
    for (let i = 1; i < filterArr.length; i += 1) {
      if ((filterArr[i] - filterArr[i - 1]) !== 1) return filterArr[i - 1] + 1;
    }
    return filterArr[size - 1] + 1;
  }
  return -1;
}

// console.log(solution([1, 3, 6, 4, 1, 2]));
// console.log(solution([3]));
console.log(solution([1, 2, 3]));
// console.log(solution([-1, -3]));
