/*
#
*/

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

const toNumber = function (l) { 
    let n = 0, pow = 1
    
    while (l !== null) {
        n = (n * pow) + l.val
        pow = 10
        l = l.next
    }
    
    return n
}
const toList = function(n) {
    let tail = new ListNode(n % 10), head = tail, num = Math.trunc(n/10)
    
    while(num > 0) {
       tail = head 
       head = new ListNode(num % 10)
       head.next = tail
       num = Math.trunc(num/10)
    }
    
    return head
}

var addTwoNumbers = function(l1, l2) {
    

    return toList(toNumber(l1) + toNumber(l2))
};


console.log(toNumber(addTwoNumbers(toList(123), toList)))