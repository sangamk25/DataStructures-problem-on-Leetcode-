// Definition for a singly-linked list. This will define the creation of the singly linked list
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function detectLoop(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next; // Move slow one step at a time
    fast = fast.next.next; // Move fast two steps at a time

    // If there is a loop, slow and fast will meet at some point
    if (slow === fast) {
      return true; // Loop detected
    }
  }

  return false; // No loop found
}

// Create a sample linked list with a loop
const head = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);

head.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2; // Creating a loop

const hasLoop = detectLoop(head);
if (hasLoop) {
  console.log("The linked list contains a loop.");
} else {
  console.log("The linked list does not contain a loop.");
}
