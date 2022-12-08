/*
#872. Leaf-Similar Trees

Consider all the leaves of a binary tree, from left to right order, the values of those leaves form a leaf value sequence.

For example, in the given tree above, the leaf value sequence is (6, 7, 4, 9, 8).

Two binary trees are considered leaf-similar if their leaf value sequence is the same.

Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.

 

Example 1:

Input: root1 = [3,5,1,6,2,9,8,null,null,7,4], root2 = [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]
Output: true

Example 2:

Input: root1 = [1,2,3], root2 = [1,3,2]
Output: false

 

Constraints:

    The number of nodes in each tree will be in the range [1, 200].
    Both of the given trees will have values in the range [0, 200].

*/

const{ TreeNode, fromArray, toArray }  = require('./treeUtil');

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    
    const f = (root) => {
        
        if(!root) return [];
      
        const ans = [], visited = new Set();
        
        visited.add(root);
        
        let q = [root];
        
        while(q.length) {

            while(q[q.length - 1].left && !visited.has(q[q.length - 1].left)) {
                visited.add(q[q.length - 1].left);
                q.push(q[q.length - 1].left);
            }
            
            const node = q.pop();
            
            if(node.right) {
                q.push(node.right);
            } else if(!node.left) {
                ans.push(node.val);     
            }
        }
        return ans;
    };
    
    const seq1 = f(root1), seq2 = f(root2);
    
    if(seq1.length !== seq2.length) return false;
    
    for(let i = 0; i < seq1.length; i++) {
        
        if(seq1[i] !== seq2[i]) return false;
    }
    
    return true;
};

let root1 = fromArray([1,2]), root2 = fromArray([2,2]);

console.log(leafSimilar(root1, root2));