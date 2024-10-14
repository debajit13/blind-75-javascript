# Merge Two Sorted Linked Lists

## Problem Statement

You are given the heads of two sorted linked lists `list1` and `list2`.

Merge the two lists into one sorted linked list and return the head of the new sorted linked list.

The new list should be made up of nodes from `list1` and `list2`.

### Example 1

- **Input:** `list1 = [1,2,4], list2 = [1,3,5]`
- **Output:** `[1,1,2,3,4,5]`

### Example 2

- **Input:** `list1 = [], list2 = [1,2]`
- **Output:** `[1,2]`

### Example 3

- **Input:** `list1 = [], list2 = []`
- **Output:** `[]`

### Constraints

- `0 <= The length of the list <= 1000`
- `-1000 <= Node.val <= 1000`

---

## Solution

1. We can solve this problem by using a dummy node.
2. First, create a `dummy = { val: 0, next: null}` and set this `dummy` to `node = dummy`.
3. While list1 and list2 both are not null point check the following conditions:
   - If `list1.val < list2.val`, store `node.next = list1` and move `list1 = list1.next`.
   - Else store `node.next = list2` and move `list2 = list2.next`.
4. Also, update `node = node.next` for each iterations.
5. Now, if list1 still remains, then set `node.next = list1`.
6. Else If, list2 still remains, then set `node.next = list2`.
7. Return the `dummy.next`.
