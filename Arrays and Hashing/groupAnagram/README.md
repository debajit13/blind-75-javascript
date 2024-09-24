# Anagram Groups

## Problem Statement

Given an array of strings `strs`, group all anagrams together into sublists. You may return the output in any order.  
An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

### Example 1:

- **Input:** `strs = ["act", "pots", "tops", "cat", "stop", "hat"]`
- **Output:** `[["hat"], ["act", "cat"], ["stop", "pots", "tops"]]`

### Example 2:

- **Input:** `strs = ["x"]`
- **Output:** `[["x"]]`

### Example 3:

- **Input:** `strs = [""]`
- **Output:** `[[""]]`

### Constraints:

- `1 <= strs.length <= 1000`
- `0 <= strs[i].length <= 100`
- `strs[i]` consists of lowercase English letters.

---

## Solution

1. Create a map (object) to store grouped anagrams.
2. Loop through each element of the `strs` array.
3. For each string, create an array of size 26 (for each letter in the alphabet) and fill it with `0`s.
4. Loop through each character of the string, and increment the respective index in the array based on the character code.
5. Join the array to form a unique key representing the character counts and use it as the key in the map.
6. If the key already exists, push the current string into the array corresponding to that key.
7. After processing all strings, return the values of the map using `Object.values(map)` to group the anagrams together.
