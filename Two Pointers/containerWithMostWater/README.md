# Max Water Container

## Problem Statement

You are given an integer array `heights` where `heights[i]` represents the height of the `i-th bar`.

You may choose any two bars to form a container. Return the maximum amount of water a container can store.

### Example 1

- **Input:** `heights = [1,7,2,5,4,7,3,6]`
- **Output:** `36`

### Example 2

- **Input:** `heights = [2,2,2]`
- **Output:** `4`

### Constraints

- `2 <= height.length <= 1000`
- `0 <= height[i] <= 1000`

---

## Solution

1. We can solve this using two pointer method. Create a `result = 0`, `l = 0`, `r = nums.length - 1`.
2. Run a while loop until `l < r`.
3. Calculate the `area = (r - l) * Math.min(heights[l],heights[r])`.
4. Compare `area` with the current `result` and store the max among them to `result`.
5. Now check:
   - If `heights[l] < heights[r]`, increase `l`.
   - Else decrese `r`.
6. Return `result`.
