class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

class Solution {
  removeNthFromEnd(head, n) {
    const dummy = new ListNode(head, 0);
    let left = dummy;
    let right = head;

    while (n !== 0) {
      right = right.next;
      n--;
    }

    while (right !== null) {
      left = left.next;
      right = right.next;
    }

    left.next = left.next.next;
    return dummy.next;
  }
}
