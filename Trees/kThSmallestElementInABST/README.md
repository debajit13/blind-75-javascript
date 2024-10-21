# Kth Smallest Integer in BST

## Problem Statement

Given the `root` of a binary search tree, and an integer `k`, return the `kth` smallest value (1-indexed) in the tree.

A binary search tree satisfies the following constraints:

- The left subtree of every node contains only nodes with keys less than the node's key.
- The right subtree of every node contains only nodes with keys greater than the node's key.
- Both the left and right subtrees are also binary search trees.

### Example 1

- **Input:** `root = [2,1,3], k = 1`
- **Output:** `1`

### Example 2

- **Input:** `root = [4,3,5,2,null], k = 4`
- **Output:** `5`

### Constraints

- `1 <= k <= The number of nodes in the tree <= 1000`
- `0 <= Node.val <= 1000`

---

## Solution

1. We can solve this problem by doing in-order traversal.
2. To traverse a tree in-order, first we need to check if the `node` is `null` then return `[]`.
3. If not null, then return `[...this.inOrder(node.left), node.val, ...this.inOrder(node.right)]`.
4. Now call this `inOrder` method to our main `kthSmallest` method with the parameter `root`. Store the returned array of inOrder method in an array `sortedArray`.
5. Return the `[k - 1]-th` indexed value of the array.
