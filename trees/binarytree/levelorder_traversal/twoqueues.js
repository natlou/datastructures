import {BinaryTree} from './BinaryTree.js';

let levelOrderTraversal = function(root) {
    // We print null if the root is null
    if (!root) {
        process.stdout.write("null");
    } else {
        // Declaring an array of two queues
        let queues = [
            [],
            []
        ];

        // Initializing the current and next queues
        let cureentQueue = queues[0];
        let nextQueue = queues[1];

        // Enqueuing the root node into the current queue and setting
        // level to zero
        cureentQueue.push(root);
        let levelNumber = 0;

        // Printing nodes in level-order until the current queue remains
        // empty
        while (cureentQueue.length > 0) {
            // Dequeuing and printing the first element of queue
            let temp = cureentQueue.shift();
            process.stdout.write(String(temp.data));

            // Adding dequeued node's children to the next queue
            if (temp.left) {
                nextQueue.push(temp.left);
            }

            if (temp.right) {
                nextQueue.push(temp.right);
            }

            // When the current queue is empty, we increase the level, print a new line
            // and swap the current and next queues
            if (cureentQueue.length == 0) {
                ++levelNumber;
                if (nextQueue.length != 0) {
                    process.stdout.write(" : ");
                }
                cureentQueue = queues[levelNumber % 2];
                nextQueue = queues[(levelNumber + 1) % 2];
            } else {
                process.stdout.write(", ");
            }
        }
    }
};

// Driver code
// Creating a binary tree	
let input = [100,50,200,25,75,350];
let tree1 = new BinaryTree(input);  
tree1.populate_parents();

// Creating a right degenerate binary tree
let input1 = [100,50,200,25,75,350];
input1.sort(function(a, b){return a - b});
let tree2 = new BinaryTree(input1);  
tree2.populate_parents();

// Creating a left degenerate binary tree
let input2 = [350,200,75,100,50,25];
let tree3 = new BinaryTree(input2);  
tree3.populate_parents();

// Creating a single node binary tree
let tree4 = new BinaryTree([100]);  
tree4.populate_parents();

let testCaseRoots = [tree1.root, tree2.root, tree3.root, tree4.root, null ];
let testCaseStatements = ["Level-Order Traversal of a normal binary search tree: ",
                "Level-Order Traversal of a right degenerate binary search tree: ",
                "Level-Order Traversal of a left degenerate binary search tree: ",
                "Level-Order Traversal of a single node binary tree: ",
                "Level-Order Traversal of a null tree: "];


// It will be used for only printing purpose
let tp =  new TreePrint();

for (let  i = 0; i < testCaseRoots.length; i++) {
	if (i > 0) {
		process.stdout.write("\n");
	}

	process.stdout.write(i + 1 +  ".\tBinary tree:  ");
	tp.displayTree(testCaseRoots[i]);
	process.stdout.write("\n\t" + testCaseStatements[i] + "\n\t");

	// Printing the in-order list using the method we just implemented
    levelOrderTraversal(testCaseRoots[i]);
	process.stdout.write("\n----------------------------------------------------------------------------------------------------\n");
	
}