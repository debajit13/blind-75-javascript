# Binary Tree Maximum Path Sum

## Problem Statement

Given the `root` of a non-empty binary tree, return the maximum path sum of any non-empty path.

A path in a binary tree is a sequence of nodes where each pair of adjacent nodes has an edge connecting them. A node can not appear in the sequence more than once. The path does not necessarily need to include the root.

The path sum of a path is the sum of the node's values in the path.

### Example 1

- **Input:** `root = [1,2,3]`
- **Output:** `6`

### Example 2

- **Input:** `root = [-15,10,20,null,null,15,5,-5]`
- **Output:** `40`

### Constraints

- `1 <= k <= The number of nodes in the tree <= 1000`
- `-1000 <= Node.val <= 1000`

---

## Solution

1. We can solve this problem by using DFS to the tree.
2. First let's take a variable `res` to store our result and initialize it, `res = [root.val]`. We store it in array because it uses call by reference thus update the array in recursive calls.
3. Call a function `dfs` and run that with parameter `root` and `res`.
4. Return the `res[0]` value.
5. Let's create the dfs function now. First, check if `root` is `null` then return `0`.
6. Now calculate the `leftMax`, `leftMax = Math.max(this.dfs(root.left, res), 0)`. Here we have taken 0 as if the sum is negative we don't want to add that.
7. Same for `rightMax`, `rightMax = Math.max(this.dfs(root.right, res), 0)`.
8. Now update the `res[0]` at each level, `res[0] = Math.max(res[0], root.val + leftMax + rightMax)`.
9. But the return value for each level of dfs will be `root.val + Math.max(leftMax, rightMax)`.
