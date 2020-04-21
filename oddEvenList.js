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

var oddEvenList = function(head) {
  
    if(head === null || head.next === null) return head

    
};


const a1 =[1,2,3,4,5]
const l = arrayToList(a1)
console.log(printList(l))
console.log('----------------------')
oddEvenList(l)
console.log(printList(l))