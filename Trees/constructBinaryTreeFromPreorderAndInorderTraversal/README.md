# Binary Tree from Preorder and Inorder Traversal

## Problem Statement

You are given two integer arrays `preorder` and `inorder`.

- `preorder` is the preorder traversal of a binary tree
- `inorder` is the inorder traversal of the same tree
- Both arrays are of the same size and consist of unique values.

Rebuild the binary tree from the preorder and inorder traversals and return its root.

### Example 1

- **Input:** `preorder = [1,2,3,4], inorder = [2,1,3,4]`
- **Output:** `[1,2,3,null,null,null,4]`

### Example 2

- **Input:** `preorder = [1], inorder = [1]`
- **Output:** `[1]`

### Constraints

- `1 <= inorder.length <= 1000`
- `inorder.length == preorder.length`
- `-1000 <= preorder[i], inorder[i] <= 1000`

---

## Solution

1. We know that fact, In preorder traversal root -> left -> right and for inorder left -> root -> right.
2. So, we can use the preorder arrays first element to always determine the root of the tree and then find that element in the inorder array to find the mid of the tree and what will be the left and right of the tree.
3. So, first check if any one of the two arrays length is 0 then return `null`.
4. Now, first set the root to `preorder[0]`.
5. Calculate mid by searching `preorder[0]` to the inorder array.
6. Now set `root.left = this.buildTree(preorder.slice(1, mid+1), inorder.slice(0, mid))`;
7. Also set `root.right = this.buildTree(preorder.slice(mid+1), inorder.slice(mid+1))`;
8. return `root`.
