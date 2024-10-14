# Merge K Sorted Linked Lists

## Problem Statement

You are given an array of `k` linked lists `lists`, where each list is sorted in ascending order.

Return the sorted linked list that is the result of merging all of the individual linked lists.

### Example 1

- **Input:** `lists = [[1,2,4],[1,3,5],[3,6]]`
- **Output:** `[1,1,2,3,3,4,5,6]`

### Example 2

- **Input:** `lists = []`
- **Output:** `[]`

### Example 3

- **Input:** `lists = [[]]`
- **Output:** `[]`

### Constraints

- `0 <= lists.length <= 1000`
- `0 <= lists[i].length <= 100`
- `-1000 <= lists[i][j] <= 1000`

---

## Solution

1. For the solution we will first implement a mergeList function which simply take two linked list and merge them together in sorted order.
2. Create a dummy node and set it to a variable tail.
3. If l1 and l2 both lists are not null then check l1.val < l2.val, then set tail.next = l1 and l1 = l1.next. Else, tail.next = l2 and l2 = l2.next. Update tail = tail.next.
4. Now, if only l1 values left, then set tail.next = l1. Also, if l2 values left then tail.next = l2. Return dummy.next.
5. Now, we will implment the mergeKLists function. First, check if lists is null or lists.length === 0, then return null.
6. Then, while lists length is more than 1, create mergedList = [].
7. Run a loop and increment the i by 2 here. And merge the i-th index and (i+1)-th index.
8. Push the mergedLists values to update lists.
9. Finally, return lists[0].
