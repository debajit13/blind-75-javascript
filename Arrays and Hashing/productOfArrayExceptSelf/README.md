# Products of Array Discluding Self

## Problem Statement

Given an integer array `nums`, return an array `output` where `output[i]` is the product of all the elements of `nums` except `nums[i]`.  
Each product is guaranteed to fit in a 32-bit integer.

**Follow-up:** Could you solve it in O(n) time without using the division operation?

### Example 1:

- **Input:** `nums = [1, 2, 4, 6]`
- **Output:** `[48, 24, 12, 8]`

### Example 2:

- **Input:** `nums = [-1, 0, 1, 2, 3]`
- **Output:** `[0, -6, 0, 0, 0]`

### Constraints:

- `2 <= nums.length <= 1000`
- `-20 <= nums[i] <= 20`

---

## Solution

1. Use the concept of **prefix** and **postfix** products to solve this problem in O(n) time.
2. First, create an array `result` of the same length as `nums` and fill it with `1`s.
3. Initialize two variables: `prefix = 1` and `postfix = 1`.
4. Run a loop through the array from left to right:
   - Multiply `prefix` with the current element and update the `result[i]` with the `prefix`.
   - Update `prefix` by multiplying it with the current element of `nums`.
5. Run another loop from right to left (reverse loop):
   - Multiply `postfix` with the current element and update `result[i]` with the product of itself and `postfix`.
   - Update `postfix` by multiplying it with the current element of `nums`.
6. Return the `result` array after processing both loops.
