/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1, m, nums2, n) {
  if (nums2.length) {
    nums1.push(...nums2);
  }

  for (let i = 0; i < nums1.length; i++) {
    let indexOfMin = i;

    for (let j = i + 1; j < nums1.length; j++) {
      if (nums1[j] < nums1[indexOfMin]) {
        indexOfMin = j;
      }
    }

    if (indexOfMin !== i) {
      const lesser = nums1[indexOfMin];
      nums1[indexOfMin] = nums1[i];
      nums1[i] = lesser;
    }
  }

  if (nums1.length !== n + m) {
    nums1.splice(
      nums1.findIndex((num) => num === 0),
      nums1.length - (m + n),
    );
  }
}

module.exports = merge;
