class Solution {
  longestConsecutive(nums) {
    let longest = 1;
    let set = new Set(nums);

    for (const n of set) {
      if (!set.has(n - 1)) {
        let length = 1;
        while (set.has(n + length)) {
          length++;
        }
        longest = Math.max(longest, length);
      }
    }
    return longest;
  }
}
