/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  const cache = {};

  for (let idx = 0; idx < nums.length; idx++) {
    const difference = target - nums[idx];
    if (Object.prototype.hasOwnProperty.call(cache, difference)) {
      return [cache[difference], idx];
    }

    cache[nums[idx]] = idx;
  }
}
// function twoSum(nums, target) {
//   const result = [];

//   for (let currentIdx = 0; currentIdx < nums.length; currentIdx++) {
//     for (let idx = nums.length; idx > currentIdx; idx--) {
//       if (nums[currentIdx] + nums[idx] === target) {
//         result.push(currentIdx);
//         result.push(idx);
//         return result;
//       }
//     }
//   }

//   return [];
// }

module.exports = twoSum;
