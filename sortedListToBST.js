/*
# 109. Convert Sorted List to Binary Search Tree

Given the head of a singly linked list where elements are sorted in ascending order, convert it to a height balanced BST.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1
*/
function ListNode(val) {
    this.val = val;
    this.next = null;
}

function arrayToList(arr) {
    if (arr.length === 0)
        return null;
    var head = new ListNode(arr.shift());
    var a2l = function (arr, node) {
        if (arr.length === 0)
            return;
        var nextNode = new ListNode(arr.shift());
        node.next = nextNode;
        a2l(arr, nextNode);
    };
    a2l(arr, head);
    return head;
}

function printList(list) {
    if (typeof list.val === 'undefined') {
        return "";
    }
    if (list.next === null) {
        return "(" + list.val + ")";
    }
    return "(" + list.val + ")->" + printList(list.next);
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

 function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
 var sortedListToBST = function(head) {
    
    if(head == null) return null
    
    if(head.next === null) return new TreeNode(head.val)
    
    let slow = head, fast = head.next
    
    while(fast.next) {
        
        fast = fast.next
        
        if(fast.next) {
            fast = fast.next
            slow = slow.next
        }
    }
    
    const rootNode = slow.next
    
    slow.next = null
    
    return  new TreeNode(rootNode.val, sortedListToBST(head), sortedListToBST(rootNode.next))
};


let arr = [-10,-3,0,5,9]

const tree = sortedListToBST(arrayToList(arr)) 

console.dir(toArray(tree))