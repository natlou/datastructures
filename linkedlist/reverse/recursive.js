import * as LinkedList from './LinkedList.js';

let reverse = function(head) {
  //  no need to reverse if head is null 
  //  or there is only 1 node.
  if (!head || !head.next) {
    return head;
  }

  // Recursive call
  let reversedHead = reverse(head.next);
  
  // Reverse the direction of the next pointer of the last element 
  // of the un-reversed part of the list, so that it points back 
  // to the second-last element"

  head.next.next = head;
  // Set the second-last node as the new last element of the 
  // un-reversed part of the list
  head.next = null;
  
    return reversedHead;
};


// Declaring and creating a linked list
let obj1 = new LinkedList.LinkedList();

// The CreateLinkedList function will convert our vector to a Linked list
obj1.createLinkedList([29, 23, 82, 11, 4, 3, 21]);
console.log("1. Original:\t\t" , obj1.displayLinkedList());

// Reversing the created linked list
let head_reverse1 = reverse(obj1.head);
let obj2 = new LinkedList.LinkedList();
obj2.head = head_reverse1;
//Display Reversed List
console.log("   Reversed list:\t", obj2.displayLinkedList());

console.log("\n-----------------------------------------------------------------------------------------------------\n" );

// Declaring and creating a linked list
let obj3 = new LinkedList.LinkedList();

// The CreateLinkedList function will convert our vector to a Linked list
obj3.createLinkedList([59, 7, -3, 21, 14, 30, 120]);
console.log("2. Original:\t\t" , obj3.displayLinkedList() );

// Reversing the created linked list
let head_reverse2 = reverse(obj3.head);
let obj4 = new LinkedList.LinkedList();
obj4.head = head_reverse2;
//Display Reversed List
console.log("   Reversed list:\t", obj4.displayLinkedList());