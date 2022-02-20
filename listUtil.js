function ListNode(val, next) {
    this.val = val;
    this.next = next;
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

function listToArray(head) {

    const res = [];

    while(head) {
        res.push(head.val);
        head = head.next;
    }

    return res;
}

function printList(list) {
    if (!list) {
        return "";
    }
    return `(${list.val})${list.next ? "->" : ""}${printList(list.next)}`;
}

module.exports = {ListNode, arrayToList, printList, listToArray};