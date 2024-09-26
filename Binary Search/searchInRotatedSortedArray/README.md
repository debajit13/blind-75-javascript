# Find Target in Rotated Sorted Array

## Problem Statement

You are given an array of length `n` which was originally sorted in ascending order. It has now been rotated between `1` and `n` times. For example, the array `nums = [1,2,3,4,5,6]` might become:

`[3,4,5,6,1,2]` if it was rotated `4` times.
`[1,2,3,4,5,6]` if it was rotated `6` times.
Given the rotated sorted array `nums` and an integer `target`, return the index of target within `nums`, or `-1` if it is not present.

You may assume all elements in the sorted rotated array nums are unique,

A solution that runs in `O(n)` time is trivial, can you write an algorithm that runs in `O(log n)` time?

### Example 1

- **Input:** `nums = [3,4,5,6,1,2], target = 1`
- **Output:** `4`

### Example 2

- **Input:** `nums = [3,5,6,0,1,2], target = 4`
- **Output:** `-1`

### Constraints

- `1 <= nums.length <= 1000`
- `-1000 <= nums[i] <= 1000`
- `-1000 <= target <= 1000`

---

## Solution

1. As we already know that the array is sorted so we can use binary search to solve this problem. But as it is rotated sorted so we need to make some changes.
2. At first, take value `l = 0`, `r = nums.length - 1`.
3. Run a while loop on the array and calculate `mid = Math.floor((l + r) / 2)` . Now, check the conditions:
   - If the `nums[mid] === target`, then as the element found return then `mid`.
4. Now, if the `nums[l] <= nums[mid]` then check the following conditions:
   - If `target < nums[l]` or `target > nums[mid]`, then set `l = mid + 1`.
   - Else set `r = mid - 1`.
5. Else, check the following conditions:
   - If `target > nums[r]` or `target < nums[mid]`, then set `r = mid - 1`.
   - Else set `l = mid + 1`.
6. Return `-1` if the `target` is not found.
