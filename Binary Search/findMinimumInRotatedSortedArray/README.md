# Find Minimum in Rotated Sorted Array

## Problem Statement

You are given an array of length `n` which was originally sorted in ascending order. It has now been rotated between `1` and `n` times. For example, the array `nums = [1,2,3,4,5,6]` might become:

`[3,4,5,6,1,2]` if it was rotated `4` times.
`[1,2,3,4,5,6]` if it was rotated `6` times.

Notice that rotating the array `4` times moves the last four elements of the array to the beginning. Rotating the array `6` times produces the original array.

Assuming all elements in the rotated sorted array nums are unique, return the minimum element of this array.

A solution that runs in `O(n)` time is trivial, can you write an algorithm that runs in `O(log n)` time?

### Example 1

- **Input:** `nums = [3,4,5,6,1,2]`
- **Output:** `1`

### Example 2

- **Input:** `nums = [4,5,0,1,2,3]`
- **Output:** `0`

### Example 3

- **Input:** `nums = [4,5,6,7]`
- **Output:** `4`

### Constraints

- `1 <= nums.length <= 1000`
- `-1000 <= nums[i] <= 1000`

---

## Solution

1. As we already know that the array is sorted so we can use binary search to solve this problem. But as it is rotated sorted so we need to make some changes.
2. At first, take value `l = 0`, `r = nums.length - 1`, `min = nums[0]`.
3. Run a while loop on the array and check the conditions:
   - If the `nums[l] < nums[r]`, it means the array is sorted, so set the min to the minimum between the current `min` and `nums[l]`.
4. Now calculate the `mid = Math.floor((l + r) / 2)`. And update the `min` to the minimum between the current `min` and the `nums[mid]`.
5. Now, if the `nums[l] <= nums[mid]` then we need to search to the right subarray, which means set the `l = mid + 1`.
6. Else, we can search to the left subarray means set the `r = mid - 1`.
7. Return `min` at the end of program.
