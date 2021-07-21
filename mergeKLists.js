/*
# 23. Merge k Sorted Lists

You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it

*/


 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
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
    if (list === null) {
        return "()";
    }
    if (list.next === null) {
        return "(" + list.val + ")";
    }
    return "(" + list.val + ")->" + printList(list.next);
}


function Heap(compareFunc) {
    this.arr = []
    this.compareFunc = compareFunc
}

Heap.prototype.pop = function() {

  if(this.size() === 0) return undefined
  
  const val = this.arr[0]

  const last = this.arr.pop()

  if(this.arr.length === 0) return val

  this.arr[0] = last
  this.sinkDown(0)

  return val
}

Heap.prototype.push = function(val) {
this.arr.push(val)
this.bubbleUp(this.arr.length-1)
}

Heap.prototype.size = function() {
    return this.arr.length
}

Heap.prototype.bubbleUp = function(n) {
  const val = this.arr[n]

  while(n > 0) {
      const parentN = Math.floor((n+1)/2)-1
      const parent = this.arr[parentN]

      if(this.compareFunc(val,parent) > -1) break

      this._swap(n, parentN)
      n = parentN
  }
}

Heap.prototype.sinkDown = function(n) {

    const val = this.arr[n]
    const len = this.arr.length

    while(true) {
       let child2N = (n+1) * 2
       let child1N = child2N -1
       let swap  = null
       let child1 = null
       let child2 = null

       if(child1N < len) {
         child1 = this.arr[child1N]
          swap = this.compareFunc(val,child1) > -1 ? child1N : swap
       }

       if(child2N < len) {
        child2 = this.arr[child2N]
        swap = this.compareFunc(swap === null? val: child1, child2) > -1 ? child2N : swap
     }

     if(swap === null) break

    this._swap(swap, n)
    n = swap
    }
}

Heap.prototype.heapify = function(arr) {
  for(let i = 0; i< arr.length; i++) {
      this.push(arr[i])
  }
}

Heap.prototype._swap = function(m,n) {
    const tmp = this.arr[m]
    this.arr[m] = this.arr[n]
    this.arr[n] = tmp
} 

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    
    const heap = new Heap((a, b) => a.val-b.val)

    let head = null, current = null


    while(lists.length > 0) {

        const head = lists.pop()

        if(head === null) continue

        heap.push(head)
    }

    while(heap.size() > 0) {
      
        const node = heap.pop()

        if(head === null) {
            head = node
            current = head
        } else {
          current.next = node
          current = current.next 
        }

        if(node.next !== null) {
            heap.push(node.next)
        }
    }

    return head
};

const lists = [[1,4,5],[1,3,4],[2,6]].map(arrayToList)

const list = mergeKLists(lists)

console.log(printList(list))