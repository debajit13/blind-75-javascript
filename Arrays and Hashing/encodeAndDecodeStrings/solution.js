class Solution {
  encode(strs) {
    let result = '';
    for (let s of strs) {
      result += `${s.length}#${s}`;
    }
    return result;
  }

  decode(strs) {
    let result = [];
    let i = 0;
    while (i < strs.length) {
      let j = i;
      while (strs[j] !== '#') {
        j++;
      }

      let length = parseInt(strs.substring(i, j), 10);
      i = j + 1;
      j = i + length;
      let element = strs.substring(i, j);
      result.push(element);
      i = j;
    }
    return result;
  }
}
