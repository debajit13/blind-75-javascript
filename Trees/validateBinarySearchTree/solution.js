// Definition for a binary tree node.
class TreeNode {
  constructor(value = 0, right = null, left = null) {
    this.value = value;
    this.right = right;
    this.left = left;
  }
}

class Solution {
  isValidBST(root) {
    return this.valid(root, -Infinity, Infinity);
  }

  valid(node, left, right) {
    if (!node) {
      return true;
    }
    if (!(node.left < left && node.val < right)) {
      return false;
    }

    return (
      this.valid(node.left, left, node.val) &&
      this.valid(node.right, node.val, right)
    );
  }
}
