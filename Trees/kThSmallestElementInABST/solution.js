// Definition for a binary tree node.
class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class Solution {
  kthSmallest(root, k) {
    const sortedArray = this.inOrder(root);
    return sortedArray[k - 1];
  }

  inOrder(node) {
    if (node === null) {
      return [];
    }

    return [...this.inOrder(node.left), node.val, ...this.inOrder(node.right)];
  }
}
