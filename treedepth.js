/**
 * Definition for a binary tree node.
 **/
  function TreeNode(val) {
      this.val = val;
      this.left = this.right = null;
  }
 

  function arr2Tree(arr) {

    if(arr.length === 0) return null;

    const arr2node = function(pos)  {
        if(pos >= arr.length || arr[pos] === null) return null

        const node = new TreeNode(arr[pos])
        node.left = arr2node((pos+2))
        node.right = arr2node((pos+3))
       return node
    }    

    const head = new TreeNode(arr[0])

    head.left = arr2node(1)
    head.right = arr2node(2)
     
     return head
  }
  /**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (root === undefined || root === null) return 0
    
    let left  = 1 + maxDepth(root.left)
    let right = 1 + maxDepth(root.right)
    
    return Math.max(left, right)
};
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if(n === 0 ) return 1
    if (n === 1) return x
    if(n < 0)    return myPow(1/x, Math.abs(n))
     
    res = myPow(x, Math.floor(n/2))
    return res * res * (n % 2 ? x : 1)
};


const tree = [3,9,20,null,null,15,7,34,23,3]
//2.00000
//-2147483648
//2.0000, 2147483648
console.log (myPow(2,1024))