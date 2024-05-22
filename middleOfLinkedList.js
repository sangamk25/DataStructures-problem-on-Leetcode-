// Define a class for a single node in the linked list
class ListNode {
  constructor(value) {
    this.value = value; // Value stored in the node
    this.next = null; // Pointer to the next node
  }
}

// Define a class for the linked list
class LinkedList {
  constructor() {
    this.head = null; // Initialize the head of the list as null (empty list)
  }

  // Method to append a new node with a given value to the end of the list
  append(value) {
    const newNode = new ListNode(value); // Create a new node with the given value
    if (!this.head) {
      this.head = newNode; // If the list is empty, set the new node as the head
    } else {
      let current = this.head; // Start at the head of the list
      while (current.next) {
        current = current.next; // Traverse the list until the last node is reached
      }
      current.next = newNode; // Set the new node as the next node of the current last node
    }
  }

  // Method to find and return the middle value of the linked list
  findMiddle() {
    let slowPointer = this.head; // Initialize a slow pointer
    let fastPointer = this.head; // Initialize a fast pointer

    while (fastPointer && fastPointer.next) {
      slowPointer = slowPointer.next; // Move slow pointer one step at a time
      fastPointer = fastPointer.next.next; // Move fast pointer two steps at a time
    }

    return slowPointer.value; // Return the value at the middle node
  }
}

// Example usage:
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);

console.log("Middle of the linked list: " + list.findMiddle());
