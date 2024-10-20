# Subtree of a Binary Tree

## Problem Statement

Given the roots of two binary trees `root` and `subRoot`, return `true` if there is a subtree of `root` with the same structure and node values of `subRoot` and `false` otherwise.

A subtree of a binary tree `tree` is a tree that consists of a node in `tree` and all of this node's descendants. The tree `tree` could also be considered as a subtree of itself.

### Example 1

- **Input:** `root = [1,2,3,4,5], subRoot = [2,4,5]`
- **Output:** `true`

### Example 2

- **Input:** `root = [1,2,3,4,5,null,null,6], subRoot = [2,4,5]`
- **Output:** `false`

### Constraints

- `0 <= The number of nodes in both trees <= 100.`
- `-100 <= root.val, subRoot.val <= 100`

---

## Solution

1. We can solve this problem using recursion.
2. As null is a valid sub tree, we first check if the `subRoot` is `null` returns `true`. But if the `root` is `null` then return `false`.
3. Now check if `this.sameTree(root, subRoot)` then return true. This sameTree method we will defined later.
4. And in the end we will check if non of the above condition satisfies, then return `(this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot))`.
5. To check the `sameTree` we need to create a method which will take 2 parameters `s` and `t`.
6. Our base condition are 2,
   - Check if the `s` and `t` boath are `null` then return `true`.
   - Check if `s` or `t` is `null` or `s.val !== t.val`, then return `false`.
7. If no condition satisfied, then return `this.isSameTree(s.left, t.left) && this.isSameTree(s.right, t.right)`
