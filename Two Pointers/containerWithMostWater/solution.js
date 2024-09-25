class Solution {
  maxArea(heights) {
    let l = 0;
    let r = heights.length - 1;
    let result = 0;

    while (l < r) {
      const area = (r - l) * Math.min(heights[r], heights[l]);
      result = Math.max(area, result);

      if (heights[l] < heights[r]) {
        l++;
      } else {
        r--;
      }
    }
    return result;
  }
}
