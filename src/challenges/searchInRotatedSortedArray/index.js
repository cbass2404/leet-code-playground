/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function search(nums, target) {
  let end = nums.length - 1;
  for (let idx = 0; end === 0 ? idx < nums.length : idx < end; idx++) {
    if (nums[idx] === target) {
      return idx;
    }
    if (nums[end] === target) {
      return end;
    }

    end--;
  }

  return -1;
}
// function search(nums, target) {
//   return nums.findIndex((num) => num === target);
// }

module.exports = search;
