/**
 * Definition for s
 * ingly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @re,turn {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    
    const addList = function (n1, n2, x = 0) {
        
        if(n1 === null && n2 === null) {
            return x === 0 ? null : new ListNode(x)
        }
        const val1 = n1 === null ? 0 : n1.val
        const val2 = n2 === null ? 0 : n2.val

        const sum = val1 + val2 + x

        const node = new ListNode(sum % 10)
        node. next = addList(n1 === null ? null : n1.next, 
                             n2 === null ? null : n2.next, 
                             Math.trunc(sum/10))
        return node
    }
       return addList(l1, l2)
};



