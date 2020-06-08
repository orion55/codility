function solution(A) {
  if (A.length === 0) return 1;

  const actualSum = A.reduce((a, b) => a + b, 0);

  const requiredSum = ((A.length + 1) * (A.length + 2)) / 2;

  return requiredSum - actualSum;
}

console.log(solution([2, 3, 1, 5]));
