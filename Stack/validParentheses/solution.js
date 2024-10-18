class Solution {
  isValid(s) {
    let stack = [];
    let map = {
      ']': '[',
      '{': '}',
      '(': ')',
    };

    for (let char of s) {
      let isBracket = char in map;
      if (!isBracket) {
        stack.push(char);
        continue;
      }

      let isEqual = stack[stack.length - 1] === map[char];
      if (isEqual) {
        stack.pop();
        continue;
      }

      return false;
    }

    return stack.length === 0;
  }
}
