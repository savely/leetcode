
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

const a1 = [1,2,3,4,null,null,5]
const a2 = [3,9,20,null,null,15,7]
const a3 = [0,2,4,1,null,3,-1,5,1,null,6,null,8]

const t = fromArray([1,2,null])
const t1 = fromArray(a1)
const t2 = fromArray(a2)
const t3 = fromArray(a3)

console.log(a1.toString() === toArray(t1).toString())
console.log(a2.toString() === toArray(t2).toString())
console.log(a3.toString() === toArray(t3).toString())
console.log(toArray(t).toString())
