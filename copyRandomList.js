/*
#138
A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.

Return a deep copy of the list.

The Linked List is represented in the input/output as a list of n nodes. Each node is represented as a pair of [val, random_index] where:

val: an integer representing Node.val
random_index: the index of the node (range from 0 to n-1) where random pointer points to, or null if it does not point to any node.
*/

// Definition for a Node.
  function Node(val, next, random) {
    this.val = val;
    this.next = next;
    this.random = random;
 };


/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    
    if (head === null) return null
    
    const newHead = new Node(head.val, null, null)
    
    if(head.next === null) {
        newHead.random = head.random === null ? null : newHead
        return newHead
    }
    
    let newNode = newHead, node = head.next
    map = new Map([[head, newHead]])
    
    while(node !== null) {
        newNode.next = new Node(node.val, null, null)
        map.set(node, newNode.next)
        node = node.next
        newNode = newNode.next
    }
   
    node = head, newNode = newHead
    
    while(node !== null) {
        if(node.random !== null) {
           newNode.random = map.get(node.random)
        }
        node = node.next
        newNode = newNode.next
    }
    
   return newHead 
};

let arr = [[7,null],[13,0],[11,4],[10,2],[1,0]]


const fromArray = function (arr)  {
    if(arr.length === 0) return null

    let nodes = arr.map(node => new Node(node[0], null, null))

    for(let i = 0; i < nodes.length-1; i++) {
        nodes[i].next = nodes[i+1]
    }

    arr.map((node, i) => {
        if(node[1] !== null) {
            nodes[i].random = nodes[node[1]]
        }
    })
    return nodes[0]
}

const list = fromArray(arr)

console.log(copyRandomList(list))