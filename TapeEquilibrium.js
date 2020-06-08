function solution(A) {
  const UPPER_LIMIT = 100000;

  if (!A) return null;

  const N = A.length;

  if (N < 2 || N > UPPER_LIMIT) return null;

  // eslint-disable-next-line consistent-return
  A.forEach((item) => {
    if (item < -1000 || item > 1000) return null;
  });

  if (N === 2) return Math.abs(A[0] - A[1]);

  const actualSum = A.reduce((a, b) => a + b, 0);

  let min = UPPER_LIMIT;
  let firstSum = 0;
  let lastSum = actualSum;

  A.forEach((item) => {
    firstSum += item;
    lastSum -= item;
    const delta = Math.abs(firstSum - lastSum);
    if (delta < min) min = delta;
  });

  return min;k
}

console.log(solution([3, 1, 2, 4, 3]));
