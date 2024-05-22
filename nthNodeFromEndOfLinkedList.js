class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  findNthFromEnd(n) {
    if (n <= 0 || !this.head) {
      return -1; // Invalid input or empty list
    }

    let mainPointer = this.head;
    let refPointer = this.head;

    for (let i = 0; i < n; i++) {
      if (refPointer === null) {
        return -1; // N is greater than the number of nodes in the list
      }
      refPointer = refPointer.next;
    }

    while (refPointer) {
      mainPointer = mainPointer.next;
      refPointer = refPointer.next;
    }

    return mainPointer.value;
  }
}

// Example usage:
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.append(6);
list.append(7);
list.append(8);
list.append(9);

console.log("2nd from the end: " + list.findNthFromEnd(2));
console.log("5th from the end: " + list.findNthFromEnd(5));
