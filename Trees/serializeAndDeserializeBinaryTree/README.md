# Serialize and Deserialize Binary Tree

## Problem Statement

Implement an algorithm to serialize and deserialize a binary tree.

Serialization is the process of converting an in-memory structure into a sequence of bits so that it can be stored or sent across a network to be reconstructed later in another computer environment.

You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure. There is no additional restriction on how your serialization/deserialization algorithm should work.

### Example 1

- **Input:** `root = [1,2,3,null,null,4,5]`
- **Output:** `root = [1,2,3,null,null,4,5]`

### Example 2

- **Input:** `root = []`
- **Output:** `[]`

### Constraints

- `0 <= The number of nodes in the tree <= 1000`
- `-1000 <= Node.val <= 1000`

---

## Solution

1. We can solve this problem by using DFS to the tree. There are 2 methods we need to implement mainly `serialize(root)` and `deserialize(root)`.
2. First start with serialize, let's take a variable `res` to store our result and initialize it, `res = []`. We store it in array because it uses call by reference thus update the array in recursive calls.
3. Call a function `dfsSerialize` and run that with parameter `root` and `res`.
4. Return the `res.join(',')`.
5. Let's create the `dfsSerialize` function now. First, check if `root` is `null` then push `"N"` to the array and return.
6. If not `null`, push the `node.val.toStringify()` to the `res`.
7. Run `this.dfsSerialize(node.left, res)` and `this.dfsSerialize(node.right, res)`.
8. Now, let's implement the `deserialize` method. First split the `data` by `,` and store them in a variable `vals` and to track the current index create an object `i = { val: 0 }`.
9. return `this.dfsDeserialize(vals, i)`.
10. Now, implement the `dfsDeserialize` method. First, check if the `vals[i.val]` is `"N"`. Then increment the `i.val++` and return `null`.
11. If not null, create a `node` using the class `TreeNode` with the `parseInt(vals[i.val])`.
12. Increment `i.val++`.
13. For the left and right subtree run the same `dfsDeserialize` method. `node.left = this.dfsDeserialize(vals, i)` and `node.right = this.dfsDeserialize(vals, i)`.
14. Return `node`.
