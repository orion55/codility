function solution(N, A) {
  const UPPER_LIMIT = 100000;

  if (!A) return -1;

  const size = A.length;

  if (size < 1 || size > UPPER_LIMIT) return -1;

  if (N < 1 || N > UPPER_LIMIT) return -1;

  A.forEach((item) => {
    if (item < 1 || item > N + 1) return -1;
  });

  const counters = new Array(N).fill(0);

  const increase = (X) => counters[X - 1] += 1;

  const maxCounters = () => {
    const max = Math.max(...counters);
    counters.fill(max);
  };

  A.forEach((item) => {
    if (item >= 1 && item < N + 1) {
      increase(item);
    } else if (item === N + 1) {
      maxCounters();
    }
  });

  return counters;
}

console.log(solution(5, [3, 4, 4, 6, 1, 4, 4]));
