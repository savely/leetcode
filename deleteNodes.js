/*
#1110. Delete Nodes And Return Forest
Given the root of a binary tree, each node in the tree has a distinct value.

After deleting all nodes with a value in to_delete, we are left with a forest (a disjoint union of trees).

Return the roots of the trees in the remaining forest. You may return the result in any order.

 

Example 1:

Input: root = [1,2,3,4,5,6,7], to_delete = [3,5]
Output: [[1,2,null,4],[6],[7]]

Example 2:

Input: root = [1,2,4,null,3], to_delete = [3]
Output: [[1,2,4]]

 

Constraints:

    The number of nodes in the given tree is at most 1000.
    Each node has a distinct value between 1 and 1000.
    to_delete.length <= 1000
    to_delete contains distinct values between 1 and 1000.


*/

var delNodes = function(root, to_delete) {

    to_delete = new Set(to_delete);

    const dummy = new TreeNode(-1, root), forest = new Set([root]);

    const dfs = (node, parent) => {

        if(!node) return;

        if(to_delete.has(node.val)) {

            if(forest.has(node)) forest.delete(node);
                
            forest.add(node.left);
            forest.add(node.right);

            parent.left = parent.left === node ? null : parent.left;
            parent.right = parent.right === node ? null : parent.right;
        }

        dfs(node.left, node);
        dfs(node.right, node);
    };

    dfs(root, dummy);
    forest.delete(null);

    return [...forest];
};