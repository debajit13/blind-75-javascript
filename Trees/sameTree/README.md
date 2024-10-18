# Same Binary Tree

## Problem Statement

Given the roots of two binary trees `p` and `q`, return `true` if the trees are equivalent, otherwise return `false`.

Two binary trees are considered equivalent if they share the exact same structure and the nodes have the same values.

### Example 1

- **Input:** `p = [1,2,3], q = [1,2,3]`
- **Output:** `true`

### Example 2

- **Input:** `p = [4,7], q = [4,null,7]`
- **Output:** `false`

### Constraints

- `0 <= The number of nodes in the tree <= 100.`
- `-100 <= Node.val <= 100`

---

## Solution

1. We can solve this problem using recursion.
2. Our base condition are 2,
   - Check if the `p` and `q` boath are `null` then return `true`.
   - Check if `p` or `q` is `null` or `p.val !== q.val`, then return `false`.
3. If no condition satisfied, then return `this.isSameTree(p.left, q.left) && this.isSameTree(p.right, q.right)`
