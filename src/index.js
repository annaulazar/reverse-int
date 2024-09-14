module.exports = function reverse (n) {
  nums = String(n).split('');
  nums = nums.reverse();

  while (nums[0] == 0) {
      nums = nums.slice(1);
  }
  if (nums[nums.length - 1] === '-') {
      nums.pop();
  }
  return Number(nums.join(''));
}
