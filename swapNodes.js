//Given 1->2->3->4, you should return the list as 2->1->4->3.
// Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}
function arrayToList(arr) {
    if (arr.length === 0)
        return null;
    let head = new ListNode(arr.shift());
    const a2l = function (arr, node) {
        if (arr.length === 0)
            return;
        let nextNode = new ListNode(arr.shift());
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
        return `(${list.val})`;
    }
    return `(${list.val})->` + printList(list.next);
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    if (head === null || head.next === null) {
        return head;
    }
    const newHead = head.next;
    const temp = newHead.next;
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
    const newHead = reverseList(head.next);
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
            const newHead = new ListNode(l1.val);
            newHead.next = mergeTwoLists(l1.next, l2);
            return newHead;
        }
        const newHead = new ListNode(l2.val);
        newHead.next = mergeTwoLists(l1, l2.next);
        return newHead;
    }
    const node = (l1 === null) ? l2 : l1;
    const newHead = new ListNode(node.val);
    newHead.next = mergeTwoLists(node.next, null);
    return newHead;
};
var generateTrees = function (n) {
};
var isPalindrome = function (head) {
    var len = function (list) {
        if (list === null)
            return 0;
        let count = 1;
        let probe = list.next;
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
        const newHead = reverseList(head.next);
        head.next.next = head;
        head.next = null;
        return newHead;
    };
    var jumpTo = function (list, pos) {
        if (pos === 0)
            return list;
        let i = 1;
        let probe = list.next;
        while (i < pos) {
            probe = probe.next;
            i++;
        }
        return probe;
    };
    const length = len(head);
    if (length < 2)
        return true;
    const middle = Math.floor(length / 2);
    const revHead = reverseList(jumpTo(head, middle));
    let res = true;
    let i = 0;
    let p1 = head;
    let p2 = revHead;
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
    const lastNode = jumpTo(head, middle - 1);
    lastNode.next = reverseList(revHead);
    return res;
};
var removeNthFromEnd = function (head, n) {
    var jumpTo = function (pos) {
        if (pos === 0)
            return head;
        let i = 1;
        let probe = head.next;
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
const k = arrayToList([1, 2, 3, 4, 11, 12, 13, 14]);
const l = arrayToList([1, 2, 3, 2, 1]);
console.log(printList(k));
console.log('---------------');
console.log(removeNthFromEnd(k, 1));
console.log('---------------');
console.log(printList(k));
//# sourceMappingURL=swapNodes.js.map