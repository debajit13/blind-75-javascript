class Solution {
  search(nums, target) {
    let l = 0;
    let r = nums.length - 1;

    while (l <= r) {
      let mid = Math.floor((l + r) / 2);

      if (nums[mid] === target) {
        return mid;
      }

      if (nums[l] <= nums[mid]) {
        if (target < nums[l] || target > nums[mid]) {
          l = m + 1;
        } else {
          r = m - 1;
        }
      } else {
        if (target > nums[r] || target < nums[mid]) {
          r = m - 1;
        } else {
          l = m + 1;
        }
      }
    }
    return -1;
  }
}
