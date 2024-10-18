# Invert a Binary Tree

## Problem Statement

You are given the root of a binary tree `root`. Invert the binary tree and return its root.

### Example 1

- **Input:** `root = [1,2,3,4,5,6,7]`
- **Output:** `[1,3,2,7,6,5,4]`

### Example 2

- **Input:** `root = [3,2,1]`
- **Output:** `[3,1,2]`

### Example 3

- **Input:** `root = []`
- **Output:** `[]`

### Constraints

- `0 <= The number of nodes in the tree <= 100.`
- `-100 <= Node.val <= 100`

---

## Solution

1. We can solve this problem using recursion.
2. Our base condition is to check if the `root` is `null` or not. If `root` is `null` return `null`.
3. If not `null`, create a new `TreeNode` using `root.val`. And set `node.right = this.invertTree(root.left)` and `node.left = this.invertTree(root.right)`.
4. Return `node` at the end of the method.
