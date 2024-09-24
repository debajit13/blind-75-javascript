class Solution {
  productExceptSelf(nums) {
    let result = new Array(nums.length).fill(1);
    let prefix = 1;
    let postfix = 1;

    for (let i = 0; i < result.length; i++) {
      result[i] = prefix;
      prefix *= result[i];
    }

    for (let i = result.length - 1; i >= 0; i--) {
      result[i] *= postfix;
      postfix *= result[i];
    }

    return result;
  }
}
