# String Encode and Decode

## Problem Statement

Design an algorithm to encode a list of strings into a single string. The encoded string can then be decoded back to the original list of strings.

**Task:** Implement `encode` and `decode` functions.

### Example 1:

- **Input:** `["neet", "code", "love", "you"]`
- **Output:** `["neet", "code", "love", "you"]`

### Example 2:

- **Input:** `["we", "say", ":", "yes"]`
- **Output:** `["we", "say", ":", "yes"]`

### Constraints:

- `0 <= strs.length < 100`
- `0 <= strs[i].length < 200`
- `strs[i]` contains only UTF-8 characters.

---

## Solution

1. **Encode Function:**

   - Join the array elements into a string in the following format:  
     `<lengthOfElement>#<element>`

2. **Decode Function:**
   - Initialize a result array and a while loop to iterate through the string until `i < str.length`.
   - In this loop, run another loop `j` starting from `i` to find the `#` element.
   - Use `i` and `j` to extract the length of the next string element.
   - Set `i = j + 1` (since `j` points to the `#`), then extract the substring from `i` to `i + length`.
   - Append the extracted element to the result array and update `i = j`.
   - Repeat until the entire string is processed.
   - Return the result array.
