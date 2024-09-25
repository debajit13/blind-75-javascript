# Three Integer Sum

## Problem Statement

Given an integer array `nums`, return all the triplets `[nums[i], nums[j], nums[k]]` where `nums[i] + nums[j] + nums[k] == 0`, and the indices `i`, `j` and `k` are all distinct.

The output should not contain any duplicate triplets. You may return the output and the triplets in any order.

### Example 1

- **Input:** `nums = [-1,0,1,2,-1,-4]`
- **Output:** `[[-1,-1,2],[-1,0,1]]`

### Example 2

- **Input:** `nums = [0,1,1]`
- **Output:** `[]`

### Constraints

- `3 <= nums.length <= 1000`
- `-10^5 <= nums[i] <= 10^5`

---

## Solution

1. At first we need to sort the `nums` array and create a `result` array.
2. Run a for loop on nums and check two base conditions:
   - If `nums[i] > 0` then break the loop. as for positive number it makes no sense to check.
   - If `i > 0 && nums[i] === nums[i - 1]`, then continue, it will make sure no duplicate pair are there.
3. Now we use two pointers method. Create two pointers `l = i + 1` and `r = nums.length - 1`.
4. Run a while loop until `l < r`.
5. Calculate the `sum = nums[i] + nums[l] + nums[r]`.
   - If `sum < 0`, increase l.
   - If `sum > 0`, decrease r.
   - Else, push the `nums[i]`, `nums[l]` and `nums[r]` to the `result` array. Increse `l` and decrese `r`.
6. Also run a while loop to check if `l < r` and `nums[l] === nums[l - 1]` then `l++`. These code will make sure that no duplicate pair are there.
7. Return `result` array.
