import {LinkedListNode} from './LinkedListNode.js';

class LinkedList {
    constructor (){
        this.head = null;
    }
    
    insertAtHead (data) {
        let newNode = new LinkedListNode(data);
        if(this.head == null){
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    insertAtTail (head, node) {
        if (!head) {
          return node;
        }
        let temp = head;
        while (temp.next) {
          temp = temp.next;
        }
        temp.next = node;
    }

    createLinkedList (lst) {
        let listHead = null;
        lst.reverse();
        for (let x = 0; x < lst.length; x++) {
            listHead = this.insertAtHead(lst[x]);
        }
    }

    displayLinkedList (head) {
        let temp = head;
        let s = "";
        while (temp) {
          s += temp.data;
          temp = temp.next;
          if (temp) {
            s += ", ";
          }
        }
        return s;
        }
};
export {LinkedList};