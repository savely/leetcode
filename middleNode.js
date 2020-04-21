var middleNode = function(head) {
    
    if(head.next === null) return head
    
    let middle = head
    let end    = head.next
    
    while(end !== null) {
        end = end.next
        middle = middle.next
        if(end === null) break
        end = end.next
    }
    return middle
};