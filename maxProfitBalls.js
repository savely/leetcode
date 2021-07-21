/*
#1648. Sell Diminishing-Valued Colored Balls

You have an inventory of different colored balls, and there is a customer that wants orders balls of any color.

The customer weirdly values the colored balls. Each colored ball's value is the number of balls of that color you currently have in your inventory. For example, if you own 6 yellow balls, the customer would pay 6 for the first yellow ball. After the transaction, there are only 5 yellow balls left, so the next yellow ball is then valued at 5 (i.e., the value of the balls decreases as you sell more to the customer).

You are given an integer array, inventory, where inventory[i] represents the number of balls of the ith color that you initially own. You are also given an integer orders, which represents the total number of balls that the customer wants. You can sell the balls in any order.

Return the maximum total value that you can attain after selling orders colored balls. As the answer may be too large, return it modulo 109 + 7.
*/



/**
 * @param {number[]} inventory
 * @param {number} orders
 * @return {number}
 */
 var maxProfit = function(inventory, orders) {
    
    inventory.sort((a, b) => b - a)
    inventory.push(0)

    orders = BigInt(orders)

    const modulo = BigInt(10 ** 9 + 7)
    let total = 0n

    const rangeSum = function (x, y) {
        const fst = (x * (x + 1n) / 2n ) , snd =  (y * (y + 1n) /2n) 

        return fst > snd ? fst - snd : snd - fst
    }

    for(let i = 1 ; i < inventory.length; i++) {

        const I = BigInt(i)
        const prev = BigInt(inventory[i - 1]), curr = BigInt(inventory[i]), availableOrders = I * (prev - curr)

       if(availableOrders === 0) continue;

       const ordersToMake = orders <  availableOrders ? orders : availableOrders

       orders -= ordersToMake
       
       const fullLevels  =  ordersToMake / I
       const count = (ordersToMake - fullLevels * I) % I
       const  diff = prev - curr - fullLevels, rest = diff * count

       total = ( total + rangeSum(prev - fullLevels, prev) * I + rest)
       
       if(orders === 0) break
    }
   
    return  Number(total % modulo)
};

//let balls = [2,5];
//let orders = 4;

balls = [3,5]
orders = 6

//balls = [2,8,4,10,6]
//orders  = 20

//balls = [1000000000]
//orders = 1000000000

//balls = [773160767]
//orders = 252264991

balls = [497978859,167261111,483575207,591815159]
orders = 836556809

console.log(maxProfit(balls, orders))
