/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
function removeElement(nums, val) {
  return nums.filter((num) => num !== val).length;
}

module.exports = removeElement;
