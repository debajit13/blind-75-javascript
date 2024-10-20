# Valid Binary Search Tree

## Problem Statement

Given the `root` of a binary tree, return `true` if it is a **valid binary search tree**, otherwise return `false`.

A **valid binary search tree** satisfies the following constraints:

- The left subtree of every node contains only nodes with keys less than the node's key.
- The right subtree of every node contains only nodes with keys greater than the node's key.
- Both the left and right subtrees are also binary search trees.

### Example 1

- **Input:** `root = [2,1,3]`
- **Output:** `true`

### Example 2

- **Input:** `root = [1,2,3]`
- **Output:** `false`

### Constraints

- `0 <= The number of nodes in the tree <= 1000.`
- `-1000 <= Node.val <= 1000`

---

## Solution

1. We can solve this problem using recursion and DFS. The main issue for this problem is to make sure when we go the any child node and checking its children we need to make sure from the root nodes point also its not violating the BST rules.
2. We will implement 2 methods to solve this problem. The main is `isValidBST(root)`, which just return the `this.valid` method with parameter `root, -Infinity, Infinity`. As we are sure that node values will between `-Infinity` and `Infinity`.
3. For the `valid` method, we need to check the following conditions:
   - if `node` is `null` then return `true`.
   - If `left < node.val && node.val < right` is not true then return `false`.
4. Now return `this.valid(node.left, left, node.val) && this.valid(node.right, node.val, right)`.
