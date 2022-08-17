import {BinaryTree} from './BinaryTree.js.js';
let mirrorBinaryTree = function(root) {
    // Base case: end recursive call if current node is null
    if (!root) {
        return;
    }

    //  We will do a post-order traversal of the binary tree.
    if (root.left) {
        mirrorBinaryTree(root.left);
    }

    if (root.right) {
        mirrorBinaryTree(root.right);
    }

    //  Let's swap the left and right nodes at current level.
    let temp = root.left;
    root.left = root.right;
    root.right = temp;
};



let input1 = [100, 50, 200, 25, 75, 125, 350];
let tree1 = new BinaryTree(input1);
// Populating parent nodes
tree1.populate_parents();
let orgTree1 = tree1.getTreeDeepCopy();

let input2 = [100];
let tree2 = new BinaryTree(input2);
tree2.insert(50);
tree2.insert(200);
tree2.insert(25);
// Add a node at an incorrect position
tree2.insertBT(110);
tree2.insert(125);
tree2.insert(350);
let orgTree2 = tree2.getTreeDeepCopy();

let input3 = [100];
let tree3 = new BinaryTree(input3);
tree3.insert(50);
tree3.insert(200);
tree3.insert(25);
tree3.insert(75);
// Add a node at an incorrect position
tree3.insertBT(90);
tree3.insert(350);
let orgTree3 = tree3.getTreeDeepCopy();


// Creating a right degenerate binary search tree
let input4 = [100, 50, 200, 25, 75, 125, 350];
input4.sort(function(a, b) {
    return a - b
});
let tree4 = new BinaryTree(input4);
tree4.populate_parents();
let orgTree4 = tree4.getTreeDeepCopy();

// Creating a left degenerate binary search tree
let input5 = [350, 200, 125, 100, 75, 50, 25];
let tree5 = new BinaryTree(input5);
tree5.populate_parents();
let orgTree5 = tree5.getTreeDeepCopy();

// Creating a single node binary search tree
let input6 = [100];
let tree6 = new BinaryTree(input6);
tree6.populate_parents();
let orgTree6 = tree6.getTreeDeepCopy();

let tp = new TreePrint();

// Defining test cases
let inputs = [tree1.root, tree2.root, tree3.root, tree4.root, tree5.root, tree6.root, null];
let originalRoots = [orgTree1.root, orgTree2.root, orgTree3.root, orgTree4.root, orgTree5.root, orgTree6.root, null];

for (let i = 0; i < inputs.length; i++) {
    if (i > 0) {
        process.stdout.write("\n");
    }
    mirrorBinaryTree(inputs[i]);
    process.stdout.write((i + 1) + ".\tBinary tree:");
    tp.displayTree(originalRoots[i]);
    process.stdout.write("\n\tMirrored Binary tree:");
    tp.displayTree(inputs[i]);

    process.stdout.write(
        "-------------------------------------------------------------------------------------------------------------------------------\n");
}