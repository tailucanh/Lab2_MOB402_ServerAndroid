function isSum(a, b) {
  return a + b;
}
function isSub(a, b) {
  return a - b;
}
function isMul(a, b) {
  return a * b;
}
function isDiv(a, b) {
  if (b === 0) {
    return "Cannot divide by zero";
  }
  return a / b;
}

module.exports = {
  isSum,
  isSub,
  isMul,
  isDiv,
};
