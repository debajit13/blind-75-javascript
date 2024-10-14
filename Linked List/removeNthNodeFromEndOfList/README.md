# Remove Node From End of Linked List

## Problem Statement

You are given the beginning of a linked list `head`, and an integer `n`.

Remove the `nth` node from the end of the list and return the beginning of the list.

### Example 1

- **Input:** `head = [1,2,3,4], n = 2`
- **Output:** `[1,2,4]`

### Example 2

- **Input:** `head = [5], n = 1`
- **Output:** `[]`

### Example 3

- **Input:** `head = [1,2], n = 2`
- **Output:** `[2]`

### Constraints

- The number of nodes in the list is `sz`.
- `1 <= sz <= 30`
- `0 <= Node.val <= 100`
- `1 <= n <= sz`

---

## Solution

1. We can solve this problem using a left and right pointer and using a dummy node. dummy = new ListNode(0, head), left = dummy, right = head.
2. First, run a loop until n becomes 0 and shift the right pointer. Now the left and right has exactly n nodes between them.
3. Run another loop until the right pointer is reached at the end of the list. Then the left pointer is just before the nth index we want to remove.
4. Now, set the next of the (n-1)th node to (n+1)th node and return the dummy.next.
