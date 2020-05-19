
var StockSpanner = function() {
    this.arr = []
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
  let count = 1, i = this.arr.length-1

  while(i >= 0) {
      const [el, cnt] = this.arr[i]
      if(el > price) {
          break;
      }
      count += cnt
      i -= Math.max(1, cnt)
  }

  this.arr.push([price, count])
  
  return count
}

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */

const spanner = new StockSpanner()

const arr = [100, 80, 60, 70, 60, 75, 85]

for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    console.log(spanner.next(el))
}


 