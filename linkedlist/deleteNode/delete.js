import * as LinkedList from "./LinkedList.js";

let deleteNode = function(head, key) {
  // Initializing prev and current markers
  let prev = null;
  let current = head;

  // Scan through the linked list
  while (current) {
    // Delete the node if it matches the key  
    if (current.data === key) {
      // Delete the node if it matches the key    
      if (current === head) {
              head = head.next;
              current = head;
          } else {
              // If key is present in the node other than the head node
              prev.next = current.next;
              current = current.next;
          }
      } else {
          // Move next if no key found
          prev = current;
          current = current.next;
      }
  }
  return head;
};

// Declaring and creating first linked list
let obj1 = new LinkedList.LinkedList();
obj1.createLinkedList([1, 1, 2, 2, 3, -1, 10, 12]);

console.log("1.   Original list:\t" + obj1.displayLinkedList(obj1.head));
console.log("     Key to delete:\t-1");
let listHead = deleteNode(obj1.head, -1);
let obj11 = new LinkedList.LinkedList();
obj11.head = listHead;
console.log("     After deletion:\t" + obj11.displayLinkedList());

console.log("-----------------------------------------------------------------------------------------------------\n" );

// Declaring and creating second linked list
let obj2 = new LinkedList.LinkedList();
obj2.createLinkedList([10, 20, -22, 21, -12]);

console.log("2.   Original list:\t" + obj2.displayLinkedList(obj2.head));
console.log("     Key to delete:\t-12");
let listHead2 = deleteNode(obj2.head, -12);
let obj22 = new LinkedList.LinkedList();
obj22.head = listHead2;
console.log("     After deleteion:\t" + obj22.displayLinkedList());