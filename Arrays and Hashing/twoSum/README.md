# Two Integer Sum

## Problem Statement

Given an array of integers `nums` and an integer `target`, return the indices `i` and `j` such that `nums[i] + nums[j] == target` and `i != j`.  
You may assume that every input has exactly one pair of indices `i` and `j` that satisfy the condition.  
Return the answer with the smaller index first.

### Example 1:

- **Input:** `nums = [3, 4, 5, 6], target = 7`
- **Output:** `[0, 1]`

### Example 2:

- **Input:** `nums = [4, 5, 6], target = 10`
- **Output:** `[0, 2]`

### Example 3:

- **Input:** `nums = [5, 5], target = 10`
- **Output:** `[0, 1]`

---

## Solution

1. Create a map (object) to store the previously seen elements and their indices.
2. Loop through the `nums` array and calculate the complement for each element as `complement = target - nums[i]`.
3. Check if the complement is already present in the map:
   - If present, retrieve the index of the complement from the map and return it along with the current index.
4. If not present, store the current element in the map as the key and its index as the value.
5. If no valid pair is found by the end of the loop, return `[-1, -1]` as the default case (though this should never occur based on the problem constraints).
