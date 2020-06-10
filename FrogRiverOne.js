function solution(X, A) {
  const UPPER_LIMIT = 100000;

  if (!A) return null;

  if (X < 1 || X > UPPER_LIMIT) return null;

  // eslint-disable-next-line consistent-return
  A.forEach((item) => {
    if (item < 1 || item > X) return null;
  });

  const set = new Set();

  for (let i = 0; i < A.length; i += 1) {
    set.add(A[i]);
    if (set.size === X) return i;
  }

  return -1;
}

console.log(solution(5, [1, 3, 1, 4, 2, 3, 5, 4]));
