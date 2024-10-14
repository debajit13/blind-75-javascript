# Reorder Linked List

## Problem Statement

You are given the head of a singly linked-list.

The positions of a linked list of `length = 7` for example, can intially be represented as:

`[0, 1, 2, 3, 4, 5, 6]`

Reorder the nodes of the linked list to be in the following order:

`[0, 6, 1, 5, 2, 4, 3]`

Notice that in the general case for a list of length = n the nodes are reordered to be in the following order:

`[0, n-1, 1, n-2, 2, n-3, ...]`

You may not modify the values in the list's nodes, but instead you must reorder the nodes themselves.

### Example 1

- **Input:** `head = [2,4,6,8]`
- **Output:** `[2,8,4,6]`

### Example 2

- **Input:** `head = [2,4,6,8,10]`
- **Output:** `[2,10,4,8,6]`

### Constraints

- `0 <= The length of the list <= 1000`
- `-1000 <= Node.val <= 1000`

---

## Solution

1. We can solve this problem by using a `fast` and `slow` pointers.
2. set `slow = head.next` and `fast = head.next.next`.
3. Now, while `fast !== null` && `fast.next !== null`, update `slow = slow.next` and `fast = fast.next.next`.
4. Now, the `slow` is at the middle point of the array. So reverse the linkedList from `slow.next` to end.
5. Take a variable, `second = slow.next`, now while `second !== null`, reverse the linkedList.
6. After the second part is reversed, set `first = head` and `second = prev`.
7. Now run a loop until `second !== null`.
8. Set `temp1 = first.next, temp2 = second.next, first.next = second, first = temp1, second = temp2`.
