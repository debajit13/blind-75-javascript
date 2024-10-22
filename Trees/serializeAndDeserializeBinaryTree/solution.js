// Definition for a binary tree node.
class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class Codec {
  serialize(root) {
    let res = [];
    this.dfsSerialize(root, res);
    return res.join(',');
  }

  dfsSerialize(node, res) {
    if (node === null) {
      res.push('N');
      return;
    }

    res.push(node.val.toString());

    this.dfsSerialize(node.left, res);
    this.dfsSerialize(node.right, res);
  }

  deserialize(data) {
    let vals = data.split(',');
    let i = {
      val: 0,
    };
    return this.dfsDeserialize(vals, i);
  }

  dfsDeserialize(vals, i) {
    if (vals[i.val] === 'N') {
      i.val++;
      return null;
    }

    let node = new TreeNode(parseInt(vals[i.val]));
    i.val++;
    node.left = this.dfsDeserialize(vals, i);
    node.right = this.dfsDeserialize(vals, i);

    return node;
  }
}
