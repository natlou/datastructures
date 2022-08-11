// Importing required functions from LinkedList file 
import * as LinkedList from "./LinkedList.js";

let sortedInsertion = function(head, node) {

    // Return head if node is None
    if (!node) {
        return head;
    }

    // Return node if there is no head node 
    // or node's value is less than or equal to the head's value
    if (!head || node.data <= head.data) {
        node.next = head;
        return node;
    }

    let curr = head;

    // Loop to find the sorted postion in the linked list
    while (curr.next && curr.next.data < node.data) {

        curr = curr.next;
    }
    // Adding node in the linked list
    node.next = curr.next;
    curr.next = node;

    // Returning head of the modified linked list
    return head;
};

let insertionSort = function(head) {
    // Initializing a list for sorted linked list
    let sorted = null;
    let curr = head;
    // Looping over the original linked list and passing each node 
    // to the sorted_insert function to get a sorted linked list
    while (curr) {
        let temp = curr.next;
        sorted = sortedInsertion(sorted, curr);
        curr = temp;
    }

    return sorted;
};

// Declaring and creating first linked list
let obj1 = new LinkedList.LinkedList();
obj1.createLinkedList([29, 23, 82, 11, 4, 3, 21]);

console.log("1. Original list:\t", obj1.displayLinkedList());
let headAfterSort = insertionSort(obj1.head);
let obj11 = new LinkedList.LinkedList();
obj11.head = headAfterSort;
console.log("   Sorted list:\t\t", obj11.displayLinkedList());

console.log("-----------------------------------------------------------------------------------------------------\n" );

// Declaring and creating second linked list
let obj2 = new LinkedList.LinkedList();
obj2.createLinkedList([59, 7, -3, 21, 14, 30, 120]);

console.log("2. Original list:\t", obj2.displayLinkedList());
let headAfterSort2 = insertionSort(obj2.head);
let obj22 = new LinkedList.LinkedList();
obj22.head = headAfterSort2;
console.log("   Sorted list:\t\t", obj22.displayLinkedList());