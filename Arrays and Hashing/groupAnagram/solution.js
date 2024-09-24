class Solution {
  groupAnagram(strs) {
    let ans = {};

    for (let s of strs) {
      let count = new Array(26).fill(0);

      for (let c of s) {
        count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
      }

      const key = count.join('#');

      if (!ans[key]) {
        ans[key] = [];
      }

      ans[key].push(s);
    }

    return Object.values(ans);
  }
}
