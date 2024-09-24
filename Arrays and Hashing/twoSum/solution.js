class Solution {
  twoSum(nums, target) {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
      let complement = target - nums[i];
      let sumIndex = map.get(complement);
      let isTarget = map.has(complement);

      if (isTarget) {
        return [i, sumIndex];
      }

      map.set(nums[i], i);
    }

    return [-1, -1];
  }
}
