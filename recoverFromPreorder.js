/*
#1028. Recover a Tree From Preorder Traversal

We run a preorder depth-first search (DFS) on the root of a binary tree.

At each node in this traversal, we output D dashes (where D is the depth of this node), then we output the value of this node.  If the depth of a node is D, the depth of its immediate child is D + 1.  The depth of the root node is 0.

If a node has only one child, that child is guaranteed to be the left child.

Given the output traversal of this traversal, recover the tree and return its root.

 

Example 1:

Input: traversal = "1-2--3--4-5--6--7"
Output: [1,2,5,3,4,6,7]

Example 2:

Input: traversal = "1-2--3---4-5--6---7"
Output: [1,2,5,3,null,6,null,4,null,7]

Example 3:

Input: traversal = "1-401--349---90--88"
Output: [1,401,null,349,88,90]

 

Constraints:

    The number of nodes in the original tree is in the range [1, 1000].
    1 <= Node.val <= 109


*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */


const{ TreeNode, fromArray, toArray }  = require('./treeUtil');

/**
 * @param {string} traversal
 * @return {TreeNode}
 */
var recoverFromPreorder = function(traversal) {
    
    const parseNext = (pos) => {

        let depth = 0, val = 0, i = pos;

        while(traversal[i] === '-') {
            depth++;
            i++;
        }

        while(i < traversal.length && traversal[i] !== '-') {
            val = val * 10 + (+traversal[i]);
                i++;
        }

        return [depth, val, i];
    };

    let [_, rootVal, pos] = parseNext(0);

    const root = new TreeNode(rootVal);

    const stack  = [root];

    while(pos < traversal.length) {

        const [depth, val, nextPos] = parseNext(pos);


        while(stack.length > depth) {
            stack.pop();
        }

        const parent = stack[stack.length - 1], node = new TreeNode(val);

        if(parent.left) {
            parent.right = node;
        } else {
            parent.left = node;
        }
        stack.push(node);
        pos = nextPos;
    }

    return root;
}
