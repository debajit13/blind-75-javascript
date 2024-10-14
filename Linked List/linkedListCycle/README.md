# Linked List Cycle Detection

## Problem Statement

Given the beginning of a linked list `head`, return `true` if there is a cycle in the linked list. Otherwise, return `false`.

There is a cycle in a linked list if at least one node in the list that can be visited again by following the `next` pointer.

Internally, `index` determines the index of the beginning of the cycle, if it exists. The tail node of the list will set it's `next` pointer to the `index-th` node. If `index = -1`, then the tail node points to `null` and no cycle exists.

Note: `index` is not given to you as a parameter.

### Example 1

- **Input:** `head = [1,2,3,4], index = 1`
- **Output:** `true`

### Example 2

- **Input:** `head = [1,2], index = -1`
- **Output:** `false`

### Constraints

- `1 <= Length of the list <= 1000`
- `-1000 <= Node.val <= 1000`
- `index is -1 or a valid index in the linked list`

---

## Solution

1. We can solve this problem using a fast and slow pointer. firstly, slow = head, fast = head.
2. If there is a cycle present in the list then this slow and fast pointer will meet. So run a loop until fast and fast.next is not null.
3. Inside the loop, update slow = slow.next and fast = fast.next.next.
4. Check if slow and fast are same return true or else return false.
