# Longest Consecutive Sequence

## Problem Statement

Given an array of integers `nums`, return the length of the longest consecutive sequence of elements.  
A consecutive sequence is a sequence of elements in which each element is exactly 1 greater than the previous element.

You must write an algorithm that runs in O(n) time.

### Example 1:

- **Input:** `nums = [2, 20, 4, 10, 3, 4, 5]`
- **Output:** `4`
- **Explanation:** The longest consecutive sequence is `[2, 3, 4, 5]`.

### Example 2:

- **Input:** `nums = [0, 3, 2, 5, 4, 6, 1, 1]`
- **Output:** `7`

### Constraints:

- `0 <= nums.length <= 1000`
- `-10^9 <= nums[i] <= 10^9`

---

## Solution

1. We can solve this problem using a set to remove duplicates and store the unique elements.
2. Initialize a variable `longest = 1` to keep track of the longest consecutive sequence.
3. Loop through each element in the set and check if `element - 1` is present:
   - If it is not present, this indicates the start of a new consecutive sequence.
4. For each potential start of a sequence, initialize a variable `length = 1`.
5. Run a while loop to check if `element + length` exists in the set, and increment `length` by 1 for each consecutive number found.
6. After the while loop breaks, update `longest` by taking the maximum of `longest` and `length`.
7. Return `longest` after processing all elements.
