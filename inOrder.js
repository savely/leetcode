/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

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


var inorderTraversal = function(root) {
    
    if(root === null) return []

    const res   = []
    let node    = root
    const stack = []

    while(node !== null || stack.length > 0 ) {
        while(node !== null) {
            stack.push(node)
            node = node.left
        }

        node = stack.pop()

        res.push(node.val)
        node = node.right
    }
    return res
};


//console.log(fromArray([1,null,2,3]))

var isValidBST = function(root) {
    
    if(root === null) return true
    
    if(root.left === null && root.right === null) return true
    
    const isNull = p => p === null
    
    const helper = function (node, max, min) {
        
        if(node === null) return true
        
        if(!isNull(max) && node.val > max) return false
        if(!isNull(min) && node.val < min) return false        
        
        return helper(node.left, node.val, min) && helper(node.right, max, node.val)
        
    }
    
    return helper (root, null,null)
};

x = new TreeNode(2)
x.left = new TreeNode(1)
x.right = new TreeNode(3)

//console.log(isValidBST(x))


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    
    if(root === null) return []

   const stack1 = [root]
   const stack2 = []
   const res    = []

    while (stack1.length !== 0 || stack2.length !== 0) {
         const level     = stack1.length > 0 ? stack1 : stack2
         const nextLevel = stack1.length > 0 ? stack2 : stack1

         const levelNodes = []
         while(level.length > 0) {
             const node =  level.shift()
             levelNodes.push(node.val)
             if(node.left  !== null) nextLevel.push(node.left)
             if(node.right !== null) nextLevel.push(node.right)
         }
         res.push(levelNodes)
    }

    return res
}

t = fromArray([1,2,3,4,null,null,5])
z = fromArray([3,9,20,null,null,15,7])
n = fromArray([0,2,4,1,null,3,-1,5,1,null,6,null,8])

console.log(n)
console.log('---------------------')
console.log(levelOrder(n))

var findWords = function(words) {
    
    const row1 = new Set(Array.from('qwertyuiopQWERTYUIOP'))
    const row2 = new Set(Array.from('asdfghjklASDFGHJKL'))
    //const row3 = new Set(Array.from('zxcvbnmZXCVBNM'))

    const getRow = function (char) {
         if(row1.has(char)) return 1        
         if(row2.has(char)) return 2
         
         return 3
    }

    const sameRow = function(word) {
        const row = getRow(word[0])

        return Array.from(word).reduce((acc, c) => acc && (getRow(c) === row), true)
    }

    return words.filter(sameRow)
};


//console.log(findWords(["Hello", "Alaska", "Dad", "Peace"]))