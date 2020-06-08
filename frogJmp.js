function solution(X, Y, D) {
  const UPPER_LIMIT = 1000000000;

  const isInt = (value) => !Number.isNaN(value)
        && parseInt(Number(value), 10) === value
        && !Number.isNaN(parseInt(value, 10));

  if (!isInt(X) || !isInt(Y) || !isInt(D)) {
    throw new Error('Неверный тип данных');
  }
  if (X < 1 || X > UPPER_LIMIT || Y < 1 || Y > UPPER_LIMIT) {
    throw new Error('Значение попадает в неверный диапозон');
  }
  if (X > Y) {
    throw new Error('Входные параметры некорректны');
  }

  return Math.ceil((Y - X) / D);
}

try {
  console.log(solution(10, 85, 30));
} catch (e) {
  console.error(`${e.name}: ${e.message}`);
}
