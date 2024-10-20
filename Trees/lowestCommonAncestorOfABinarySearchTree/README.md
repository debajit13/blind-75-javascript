# Lowest Common Ancestor in Binary Search Tree

## Problem Statement

Given a binary search tree (BST) where all node values are unique, and two nodes from the tree `p` and `q`, return the lowest common ancestor (LCA) of the two nodes.

The lowest common ancestor between two nodes `p` and `q` is the lowest node in a tree `T` such that both `p` and `q` as descendants. The ancestor is allowed to be a descendant of itself.

### Example 1

- **Input:** `root = [5,3,8,1,4,7,9,null,2], p = 3, q = 8`
- **Output:** `5`

### Example 2

- **Input:** `root = [5,3,8,1,4,7,9,null,2], p = 3, q = 4`
- **Output:** `3`

### Constraints

- `0 <= The number of nodes in a tree <= 100.`
- `-100 <= Node.val <= 100`
- `p != q`
- `p and q will both exist in the BST.`

---

## Solution

1. We can solve this problem using recursion.
2. First store the `root` into a variable called `current`. And run a while loop while `current` is not null.
3. Now check the following conditions,
   - If `p.val > current.val && q.val > current.val` then we need to search to the right part of the tree so set `current = current.right`.
   - If `p.val < current.val && q.val < current.val` then we need to search to the left part of the tree so set `current = current.left`.
   - Else return the `current`.
