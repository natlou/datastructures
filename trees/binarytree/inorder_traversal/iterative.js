import {BinaryTree} from '../BinaryTree';

// Function that prints the in-order traversal of the binary tree
let iterativeInorder = function(root) {
  // If the root is null, we simply print null
  if (!root) {
    process.stdout.write("null");
  } else {
    let result = "";
    // Initializing the stack 
    let stk = [];
    // This loop will print keep printing the tree node in "L N R"
    // until the current node in stack is null or the stack becomes empty
    while (stk.length != 0 || root) {
      // If the current node is not null, we push it into the stack and point it
      // to its left child and skip to the next iteration  
      if (root) {
        stk.push(root);
        root = root.left;
        continue;
      }
      // Popping and printing the top-most element of the stack
        result = result + stk[stk.length - 1].data + ", ";
        root = stk[stk.length - 1].right;
        stk.pop();
      }

    //Truncating right most comma
    result = result.slice(0, -2);   
    process.stdout.write(result);
  }
};
    
// Creating a binary tree with root as tree
let input1 = [100,50,200,25,75,125,300,12,35,60];

let tree1 = new BinaryTree(input1);

// Populating parent nodes
tree1.populate_parents();

// Creating a binary tree with root as tree2
let input2 = [100,50,200,25,75,125,300,12,35,60];
input2.sort(function(a, b){return a - b});

let tree2 = new BinaryTree(input2);

// Populating parent nodes
tree2.populate_parents();
// Creating a binary tree with root as tree3
let input3 = [300,200,125,100,75,60,50,35,12];

let tree3 = new BinaryTree(input3);

// Populating parent nodes
tree3.populate_parents();
// Creating a binary tree with root as tree3
let input4 = [100];
let tree4 =  new BinaryTree(input4);
tree4.populate_parents();
let tp =new TreePrint();
let testCaseRoots = [tree1.root, tree2.root, tree3.root, tree4.root, null];
let testCaseStatements = ["In-Order Traversal of a normal binary search tree: ",
        "In-Order Traversal of a right degenerate binary search tree: ",
        "In-Order Traversal of a left degenerate binary search tree: ",
        "In-Order Traversal of a single node binary tree: ",
        "In-Order Traversal of a null tree: "];

for (let i = 0; i < testCaseRoots.length; i++) {
    if (i > 0) {
        process.stdout.write("\n");
    }
    process.stdout.write((i + 1) + ".\tBinary Tree:");
    tp.displayTree(testCaseRoots[i]);;
    process.stdout.write("\n\t" + testCaseStatements[i] + "\n\t");

    // Printing the in-order list using the method we just implemented
    iterativeInorder(testCaseRoots[i]);
    process.stdout.write(
            "\n-------------------------------------------------------------------------------------------------------------------------------\n");
}    