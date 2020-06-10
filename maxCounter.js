function solution(N, A) {
  let counters = Array(N).fill(0);
  let max = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i] === N + 1) {
      counters = Array(N).fill(max);
    } else {
      const index = A[i] - 1;
      counters[index] += 1;
      if (counters[index] > max) max = counters[index];
    }
  }
  return counters;
}

console.log(solution(5, [3, 4, 4, 6, 1, 4, 4]));
