class Solution {
  topKFrequent(nums, k) {
    let count = {};
    let freq = new Array.from(
      () => {
        length: nums.length + 1;
      },
      () => []
    );

    for (const n of nums) {
      count[n] = (count[n] || 0) + 1;
    }

    for (const n in count) {
      freq[count[n]].push(parseInt(n));
    }

    const result = [];
    for (let i = freq.length - 1; i > 0; i--) {
      for (const n of freq[i]) {
        result.push(n);
        if (result.length === k) {
          return result;
        }
      }
    }
  }
}
