# Reverse a Linked List

## Problem Statement

Given the beginning of a singly linked list head, reverse the list, and return the new beginning of the list.

### Example 1

- **Input:** `head = [0,1,2,3]`
- **Output:** `[3,2,1,0]`

### Example 2

- **Input:** `head = []`
- **Output:** `[]`

### Constraints

- `0 <= The length of the list <= 1000`
- `-1000 <= Node.val <= 1000`

---

## Solution

1. Take 3 variables `prev = null`, `current = head`, `next = null`.
2. Now, to reverse the linked list we just need to move the pointers in different direction.
3. While the `current` node is not `null`, first store the `current.next` to `next`.
4. Then set the `current.next` to `prev`.
5. After that set `prev` to `current`.
6. Then set `current` to `next`.
7. After the loop ends, return the `prev`.
