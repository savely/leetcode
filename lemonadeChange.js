/*
Customers are standing in a queue to buy from you, and order one at a time (in the order specified by bills).

Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill.  You must provide the correct change to each customer, so that the net transaction is that the customer pays $5.

Note that you don't have any change in hand at first.

Return true if and only if you can provide every customer with correct change.
*/


/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    
    let num5   = 0
    let num10  = 0
    
    for(let i = 0; i < bills.length; i++) {
        const bill = bills[i]
       if(bill === 5) {
           num5++
       } else if(bill === 10) {
           if(num5 < 1) return false
           num10++
           num5--
       } else {
           if(num10 > 0 && num5 > 0) {
             num10--
             num5 --
           } else if(num5 > 2) {
               num5 -= 3
           } else {
               return false
           }
       }
    }
    return true
};