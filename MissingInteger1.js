function solution(A) {
  let max = 0;
  const array = [];

  for (let i = 0; i < A.length; i += 1) {
    if (A[i] > 0) {
      if (A[i] > max) {
        max = A[i];
      }
      array[A[i]] = 0;
    }
  }

  if (max < 1) {
    return 1;
  }

  for (let j = 1; j < max; j += 1) {
    if (typeof array[j] === 'undefined') {
      return j;
    }
  }

  return max + 1;
}

console.log(solution([1, 3, 6, 4, 1, 2]));
// console.log(solution([3]));
// console.log(solution([1, 2, 3]));
// console.log(solution([-1, -3]));
