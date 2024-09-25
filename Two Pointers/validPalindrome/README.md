# Is Palindrome

## Problem Statement

Given a string `s`, return `true` if it is a palindrome, otherwise return `false`.
A palindrome is a string that reads the same forward and backward. It is also case-insensitive and ignores all non-alphanumeric characters.

### Example 1:

- **Input:** `s = "Was it a car or a cat I saw?"`
- **Output:** `true`

### Example 2:

- **Input:** `tab a cat`
- **Output:** `false`

### Constraints:

- `1 <= s.length <= 1000`
- `s is made up of only printable ASCII characters.`

---

## Solution

1. We can solve this using two pointers method. Create two pointers `l = 0` and `r = s.length - 1`.
2. Run a while loop until `l < r`.
3. Check if `s[l]` is non alphanumberic increse `l` and also if `s[r]` is non alphanumeric decrese `r`.
4. Check if `s[l].toLowerCase() !== s[r].toLowerCase()` return `false`.
5. Increment `l` and decrement `r`.
6. Return `true`;
