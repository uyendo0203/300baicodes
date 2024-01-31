/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
function Node(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

const invertTree = function (root) {
    const reverseNode = node => {
        if (node == null) {
            return null
        }
        reverseNode(node.left);
        reverseNode(node.right);
        let holdLeft = node.left;
        node.left = node.right;
        node.right = holdLeft;
        return node;
    }

    return reverseNode(root);
};


const tree = new Node(4, new Node(2, new Node(1), new Node(3)), new Node(7, new Node(6), new Node(9)));
// console.log(tree);
// console.log(JSON.parse(JSON.stringify(tree)), invertTree(tree));

// Input: root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]

// Input: root = [2,1,3]
// Output: [2,3,1]