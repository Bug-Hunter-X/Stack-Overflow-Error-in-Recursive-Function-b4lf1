function myFunc(a, b) {
  if (a === 0) {
    return b;
  }
  if (b === 0) {
    return a;
  }
  return myFunc(a - 1, b - 1);
}