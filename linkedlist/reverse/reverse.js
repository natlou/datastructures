
let reverse = function(head) {
    // TODO: Write - Code - Here
    let stack = []; 

    stack.push(head.data);

    let nextNode = head.next; 
    
    while (nextNode !== null) {
        stack.push(nextNode.data);
        nextNode = nextNode.next; 
    }
    
    head.data = stack.pop(); 
    nextNode = head.next; 

    while (nextNode !== null) {
        nextNode.data = stack.pop(); 
        nextNode = nextNode.next;
    }

    return head;
};