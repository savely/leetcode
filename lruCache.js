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

   return true
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

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    
    this.capacity = capacity
    this.queue  = new DoublyLinkedList()
    this.hash     = new Map()
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {

    if(!this.hash.has(key)) return -1

    const node = this.hash.get(key)
    const ret = node.val.payload
    this.queue.removeNode(node)
    this.queue.enqueue(node)

    return ret
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    
    if(this.hash.has(key)) {
        const changeNode = this.hash.get(key)
        changeNode.val.payload = value
        return true
    }

    if(this.queue.size() === this.capacity) {
        const delNode = this.queue.dequeue()
        this.hash.delete(delNode.val.key)
    }
    const node = new ListNode({'key' : key, 'payload' : value})
    const res = this.queue.enqueue(node)

    if(res) {
      this.hash.set(key, node)
    }

    return res
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */