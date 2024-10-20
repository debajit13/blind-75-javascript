# Level Order Traversal of Binary Tree

## Problem Statement

Given a binary tree `root`, return the level order traversal of it as a nested list, where each sublist contains the values of nodes at a particular level in the tree, from left to right.

### Example 1

- **Input:** `root = [1,2,3,4,5,6,7]`
- **Output:** `[[1],[2,3],[4,5,6,7]]`

### Example 2

- **Input:** `root = [1]`
- **Output:** `[[1]]`

### Example 3

- **Input:** `root = []`
- **Output:** `[]`

### Constraints

- `0 <= The number of nodes in both trees <= 100.`
- `-100 <= Node.val <= 100`

---

## Solution

1. We can solve this problem using BFS using a queue.
2. First we take 2 variable `res = []` and `q = []`.
3. Check if `root` is not `null` then push the `root` to `q`.
4. Now run a while loop until `q.length > 0`.
5. Create a varaiable `val = []` and run a for loop with condition `let i = 0, len = q.length; i < len; i++`.
6. Now, shift the value `node` from queue `q` and push that to `val`.
7. If that `node` has a left value push that to `q` and same for the `right` value if present.
8. Outside the for loop, push to the `val` to the `res` array.
9. Finally, return `res`.
