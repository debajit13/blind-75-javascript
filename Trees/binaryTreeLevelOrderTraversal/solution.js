// Definition for a binary tree node
class TreeNode {
  constructor(val = 0, right = null, left = null) {
    this.val = val;
    this.right = right;
    this.left = left;
  }
}

class Solution {
  levelOrder(root) {
    let q = [];
    let res = [];

    if (root) {
      q.push(root);
    }

    while (q.length > 0) {
      let val = [];

      for (let i = 0, length = q.length; i < length; i++) {
        let node = q.shift();
        val.push(node.val);

        if (node.left) {
          q.push(node.left);
        }

        if (node.right) {
          q.push(node.right);
        }
      }
      res.push(val);
    }

    return res;
  }
}
