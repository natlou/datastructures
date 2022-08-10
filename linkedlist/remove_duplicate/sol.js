import * as LinkedList from "./LinkedList.js";

let removeDuplicates = function(head) {

    // If linked list is empty
    if (!head) {
        return head;
    }
    // Declaring hash set
    let dupSet = new Set();
    dupSet.add(head.data);
    let curr = head;

    while (curr.next) {
        if (dupSet.has(curr.next.data)) {
            // Duplicate node found. Let's remove it from the list.
            curr.next = curr.next.next;
        } else {
            // Element not found in map, let's add it.
            dupSet.add(curr.next.data);
            curr = curr.next;
        }
    }

    return head;
};

// Declaring and creating first linked list
let obj1 = new LinkedList.LinkedList();

// The createLinkedList function will convert our array to a Linked list
obj1.createLinkedList([4, 7, 4, 9, 7, 11, 4]);

let tempHeadWithDup = obj1.head;
console.log("1. Original list:\t\t" + obj1.displayLinkedList());

let headWithDup = removeDuplicates(obj1.head);
let obj2 = new LinkedList.LinkedList();
obj2.head = headWithDup;
console.log("   Removed Duplicate list:\t" + obj2.displayLinkedList());

console.log("\n-----------------------------------------------------------------------------------------------------\n" );

// Declaring and creating second linked list 
let obj3 = new LinkedList.LinkedList();

// The createLinkedList function will convert our array to a Linked list
obj3.createLinkedList([10, -20, 10, -20, 20, 10]);

console.log("2. Original list:\t\t" + obj3.displayLinkedList());

let headWithDup2 =  removeDuplicates(obj3.head);
let obj4 = new LinkedList.LinkedList();
obj4.head = headWithDup2;
console.log("   Removed Duplicate list:\t" + obj4.displayLinkedList());