// Importing required functions
import {BinaryTree} from '../BinaryTree';
import {BinaryTreeNode} from '../BinaryTreeNode';

// Function to find the minimum value node in sub-tree
let treeMin = function(root) {
  // Traversing to the left-most child node
  while (root.left) {
    root = root.left;
  }

  // Returns the left-most node of sub-tree
  return root;
};

// Function to find the in-order successor
let findInorderSuccessor = function(root, nodeValue) {
  if (!root) {
    return null;
  }

  //Initializing variable that will store any potential in-order successor 
  //node in the parent chain
  let successor = null;
  
  // Loop to traverse to the node in question and find its in-order successor
  while (root) {
    // Move root pointer to right child if the nodeValue 
	  // is more than the current node data	  
    if (root.data < nodeValue) {
      root = root.right;
    } else if (root.data > nodeValue) {
      // If the nodeValue is less than the current root
	    // node then point successor to the current root  
      successor = root;
      // and point root pointer to left child 
      root = root.left;
    } else {
      // Find min value node of 
	    // right child's subtree if it exists.  
      if (root.right) {
        successor = treeMin(root.right);
      }
      break;
    }
  }
  if(root == null){
        let temp = new BinaryTreeNode(-1);
        return temp;
    }
  return successor;
};

// Declaring and creating List of Node values
let input = [100,50,200,25,75,125,350];

// Creating BST from List
let tree =  new BinaryTree(input);

input.push(10);
input.push(150);
input.push(400);

// Sorting the input List as in-order using sort() function
// By default, the sort() function sorts values as strings.
// So the sort() method will produce incorrect results when sorting numbers.
// We can fix this by providing a compare function
input.sort(function(a, b){return a - b});

// Populating parent nodes
tree.populate_parents();

let tp = new TreePrint();
process.stdout.write("Binary tree:");
tp.displayTree(tree.root);
process.stdout.write("\n");
let indexVal = 0;

for (let index = 0; index < input.length; ++index) {
  const nodeValue = input[index];
  indexVal++;

  // Function call to get the in-order successor
  let successor = findInorderSuccessor(tree.root, nodeValue);

  // Here we are using process.stdout.write for printing
  process.stdout.write(indexVal + ".");
  process.stdout.write("\tNode Value: " + nodeValue + "\n\t"); 
  if (successor){
    process.stdout.write("Successor Node Value: " + successor.data);
  }
  else{
    process.stdout.write("Successor Node Value: " + "null");
  }
  process.stdout.write("\n----------------------------------------------------------------------------------------------------\n\n");
}