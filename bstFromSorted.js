function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
    }
 
 /**
  * @param {TreeNode} root
  * @return {number[]}
  */
 
 const fromArray = function(arr) {
        
     if(arr.length === 0) return null
 
     const nodes = arr.map (n => n === null ? null : new TreeNode(n))
     
     let left = 0, right = 0
 
     for(let i = 0; i < arr.length; i++) {
        if(nodes[i] === null) continue
        
        if(2*left+1 < arr.length) {
           nodes[i].left = nodes[2*left+1]
           left++
        }
 
        if(2*right+2 < arr.length) {
        nodes[i].right = nodes[2*right+2]
         right++
        }
     }
 
    return nodes[0]
  }
 
  const toArray = function root(root) {
 
     if(root === null) return []
 
     const res = []
     const stack1 = [root]
     const stack2 = []
 
     while (stack1.length !== 0 || stack2.length !== 0) {
       const level     = stack1.length > 0 ? stack1 : stack2
       const nextLevel = stack1.length > 0 ? stack2 : stack1
      
       let allNulls = true
 
       while(level.length > 0) {
           const node =  level.shift()
           if(node === null) {
             res.push(null)
             continue
           }
           res.push(node.val)
           allNulls &= node.left === null & node.right === null
           nextLevel.push(node.left)
           nextLevel.push(node.right)
       }
       if(allNulls) break
    }
    return res
  }
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

var sortedArrayToBST = function(nums) {
    if (nums.length === 0) return null

    if(nums.lenth === 1) return new TreeNode(nums[0])

    const mid = Math.floor(nums.length/2)

    const node = new TreeNode(nums[mid])

    node.left = sortedArrayToBST(nums.slice(0, mid))
    node.right = sortedArrayToBST(nums.slice(mid+1))

    return node
};

let arr =[-10,-3,0,5,9]
arr = [8,5,1,7,10,12].sort((a,b) => a-b)

console.log(sortedArrayToBST(arr))