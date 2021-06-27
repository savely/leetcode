function ListNode(val, next) {
    this.value = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }

  const toList = function(n) {
      let head = new ListNode(n%10), tail = head

      n = Math.trunc(n/10)

      while(n > 0) {
          tail.next = new ListNode(n%10)
          tail = tail.next
          n = Math.trunc(n/10)
      }
     return head
  }

  var reverseList = function (head) {
    if (head === null || head.next === null) {
        return head;
    }
    var newHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;
};

function addTwoHugeNumbers(a, b) {
    
    if(!a) return b
    if(!b) return a
    
  const reverseList = function (head) {
    if (head === null || head.next === null) {
        return head;
    }
    var newHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;
};

a = reverseList(a)
b = reverseList(b)

const newHead = a

let carry  = 0

  while (a) {
      if(a && b) {
          const val = a.value + b.value + carry
          
          if(val > 9999) {
              carry = 1
              a.value = val % 10000
          } else {
              a.value = val
              carry = 0
          }
           
           b = b.next
           
           if(!a.next) {
               if(carry) {
                   a.next = new ListNode(carry)
               } else {
                   a.next = b
               } 
      }

    }
      
      else if(carry) {
          const val = a.value + carry
          
          if(val > 9999) {
            a.value = val % 10000
            a.next  = new ListNode(1)  
          } else {
              a.value = val
          }
      }
      
      a = a.next
  }
  
  return reverseList(newHead)
}

console.log(addTwoHugeNumbers(toList(12), toList(3456)))