# Duplicate Integer

## Problem Statement

Given an integer array `nums`, return `true` if any value appears more than once in the array; otherwise, return `false`.

### Example 1:

- **Input:** `nums = [1, 2, 3, 3]`
- **Output:** `true`

### Example 2:

- **Input:** `nums = [1, 2, 3, 4]`
- **Output:** `false`

---

## Solution

1. Initialize an empty set.
2. Loop through the `nums` array and check if the current element is already present in the set:
   - If **present**, return `true`.
   - Otherwise, add the current element to the set.
3. If no duplicates are found after the loop, return `false`.
