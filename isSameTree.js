/**
 * Definition for a binary tree node.
 */
  function TreeNode(val) {
      this.val = val;
      this.left = this.right = null;
 }
 
treeA = new TreeNode(1)
treeA.left  = new TreeNode(2)
treeA.right = new TreeNode(3)
treeA.left.left  = new TreeNode (4)

treeB = new TreeNode(1)
treeB.left  = new TreeNode(2)
treeB.right = new TreeNode(3)
treeB.left.left  = new TreeNode (4)



/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {

    if(p === null || q === null) return false 

    const stackP = [p]
    const stackQ = [q]

    const visitedP = new Map()
    const visitedQ = new Map()

    const isNodesCanBeEqual = function(node1 , node2) {

        if(node1.val !== node2.val)                    return false
        if(node1.left === null && node2.left !== null)   return false
        if(node2.left === null && node1.left !== null)   return false
        if(node1.right === null && node2.right !== null) return false
        if(node2.right === null && node1.right !== null) return false

        return true
    }

    const pushNode = function (node, stack) {
        if (node.left !== null) stack.push(node.left)
        if (node.right !== null) stack.push(node.right)
 
    }

    while(stackP.length > 0 && stackQ.length > 0) {
        
        if(stackP.length !== stackQ.length) return false

        const nodeP  = stackP.pop()
        const nodeQ  = stackQ.pop()

        if(!isNodesCanBeEqual(nodeP, nodeQ)) return false 
        
         if(!visitedP.has(nodeP.val)) {
             visitedP.set(nodeP.val, 0)
             pushNode(nodeP, stackP)
            }

            if(!visitedQ.has(nodeQ.val)) {
                visitedQ.set(nodeQ.val, 0)
                pushNode(nodeQ, stackQ)
               }
    }

      return true
};

console.log(isSameTree(treeA, treeB))