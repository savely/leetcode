//Given 1->2->3->4, you should return the list as 2->1->4->3.
// Definition for singly-linked list.
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
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    if (head === null || head.next === null) {
        return head;
    }
    var newHead = head.next;
    var temp = newHead.next;
    newHead.next = head;
    head.next = swapPairs(temp);
    return newHead;
};
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    if (head === null || head.next === null) {
        return head;
    }
    var newHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;
};
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    if (l1 === null && l2 === null)
        return null;
    if (l1 !== null && l2 !== null) {
        if (l1.val <= l2.val) {
            var newHead_1 = new ListNode(l1.val);
            newHead_1.next = mergeTwoLists(l1.next, l2);
            return newHead_1;
        }
        var newHead_2 = new ListNode(l2.val);
        newHead_2.next = mergeTwoLists(l1, l2.next);
        return newHead_2;
    }
    var node = (l1 === null) ? l2 : l1;
    var newHead = new ListNode(node.val);
    newHead.next = mergeTwoLists(node.next, null);
    return newHead;
};
var generateTrees = function (n) {
};
var isPalindrome = function (head) {
    var len = function (list) {
        if (list === null)
            return 0;
        var count = 1;
        var probe = list.next;
        while (probe !== null) {
            probe = probe.next;
            count++;
        }
        return count;
    };
    var reverseList = function (head) {
        if (head === null || head.next === null) {
            return head;
        }
        var newHead = reverseList(head.next);
        head.next.next = head;
        head.next = null;
        return newHead;
    };
    var jumpTo = function (list, pos) {
        if (pos === 0)
            return list;
        var i = 1;
        var probe = list.next;
        while (i < pos) {
            probe = probe.next;
            i++;
        }
        return probe;
    };
    var length = len(head);
    if (length < 2)
        return true;
    var middle = Math.floor(length / 2);
    var revHead = reverseList(jumpTo(head, middle));
    var res = true;
    var i = 0;
    var p1 = head;
    var p2 = revHead;
    while (i < middle) {
        if (p1.val !== p2.val) {
            res = false;
            break;
        }
        i++;
        p1 = p1.next;
        p2 = p2.next;
    }
    //restoring the list  
    var lastNode = jumpTo(head, middle - 1);
    lastNode.next = reverseList(revHead);
    return res;
};
var removeNthFromEnd = function (head, n) {
    var jumpTo = function (pos) {
        if (pos === 0)
            return head;
        var i = 1;
        var probe = head.next;
        while (i < pos) {
            probe = probe.next;
            i++;
        }
        return probe;
    };
    var probe = jumpTo(n);
    if (n > 0 && probe.next === null) {
        return head.next;
    }
    var prev = head;
    while (probe.next !== null) {
        if (probe.next.next === null) {
            prev.next = prev.next.next;
            return head;
        }
        probe = probe.next;
        prev = prev.next;
    }
    return head;
};


var k = arrayToList([1, 2, 3, 4, 11, 12, 13, 14]);
var l = arrayToList([1, 2, 3, 2, 1]);
console.log(printList(k));
console.log('---------------');
console.log(removeNthFromEnd(k, 7));
console.log('---------------');
console.log(printList(k));
