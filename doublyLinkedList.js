function ListNode (val) {
    this.val = val
    this.prev = this.next = null
}

removeNode = function(node) {
   if(node.prev === null) {
       if(node.next !== null) {
       node.next.prev = null
       }
       return node.next
    }
   node.prev.next = node.next
   if(node.next !== null) {
   node.next.prev = node.prev
   }
   return node.prev
}

function DoublyLinkedList () {
    this.head = this.tail = null
    this.length = 0
}

DoublyLinkedList.prototype.size = function() {
    return this.length
}

DoublyLinkedList.prototype.enqueue = function(node) {
    //const node = new ListNode(val)
    node.prev = node.next = null

    if(this.head === null) {
        this.head = this.tail = node
    } else {
        node.next = this.head
        this.head.prev = node
        this.head = node
    }
   this.length++

   return node
}

DoublyLinkedList.prototype.dequeue = function(){
     if(this.tail === null) return null

     const ret = this.tail

     this.tail = removeNode(this.tail)
     this.length--

     if(this.length === 0) {
        this.head = null
     }

     return ret
}

DoublyLinkedList.prototype.removeNode = function(node) {
    let isTailOrHead = false

    if(this.head == node) {
        this.head = removeNode(node)
        isTailOrHead = true
    } 

    if(this.tail === node) {
        isTailOrHead = true
        this.tail = node.prev
        if(node.prev) {
        node.prev.next = null
        }
    }

    if(this.head !== null && !isTailOrHead) {
        removeNode(node)
    }
    this.length--
}

