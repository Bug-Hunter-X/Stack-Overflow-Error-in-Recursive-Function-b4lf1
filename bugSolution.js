function myFunc(a, b) {
  if (a === 0) {
    return b;
  }
  if (b === 0) {
    return a;
  }
  if (a < 0 || b < 0) {
    return 0; // Handle negative inputs
  }
  return myFunc(a - 1, b - 1);
}