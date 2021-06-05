/*
#1383. Maximum Performance of a Team

ou are given two integers n and k and two integer arrays speed and efficiency both of length n. There are n engineers numbered from 1 to n. speed[i] and efficiency[i] represent the speed and efficiency of the ith engineer respectively.

Choose at most k different engineers out of the n engineers to form a team with the maximum performance.

The performance of a team is the sum of their engineers' speeds multiplied by the minimum efficiency among their engineers.

Return the maximum performance of this team. Since the answer can be a huge number, return it modulo 109 + 7.

 

Example 1:

Input: n = 6, speed = [2,10,3,1,5,8], efficiency = [5,4,3,9,7,2], k = 2
Output: 60
Explanation: 
We have the maximum performance of the team by selecting engineer 2 (with speed=10 and efficiency=4) and engineer 5 (with speed=5 and efficiency=7). That is, performance = (10 + 5) * min(4, 7) = 60.
Example 2:

Input: n = 6, speed = [2,10,3,1,5,8], efficiency = [5,4,3,9,7,2], k = 3
Output: 68
Explanation:
This is the same example as the first but k = 3. We can select engineer 1, engineer 2 and engineer 5 to get the maximum performance of the team. That is, performance = (2 + 10 + 5) * min(5, 4, 7) = 68.
Example 3:

Input: n = 6, speed = [2,10,3,1,5,8], efficiency = [5,4,3,9,7,2], k = 4
Output: 72
 

Constraints:

1 <= <= k <= n <= 105
speed.length == n
efficiency.length == n
1 <= speed[i] <= 105
1 <= efficiency[i] <= 108
*/

function Heap(compareFunc) {
    this.arr = []
    this.compareFunc = compareFunc
}

Heap.prototype.pop = function() {

  if(this.size() === 0) return undefined
  
  const val = this.arr[0]

  const last = this.arr.pop()

  if(this.arr.length === 0) return val

  this.arr[0] = last
  this.sinkDown(0)

  return val
}

Heap.prototype.top = function() {
    return this.size() ? this.arr[0] : undefined
}

Heap.prototype.push = function(val) {
this.arr.push(val)
this.bubbleUp(this.arr.length-1)
}

Heap.prototype.size = function() {
    return this.arr.length
}

Heap.prototype.bubbleUp = function(n) {
  const val = this.arr[n]

  while(n > 0) {
      const parentN = Math.floor((n+1)/2)-1
      const parent = this.arr[parentN]

      if(this.compareFunc(val,parent) > -1) break

      this._swap(n, parentN)
      n = parentN
  }
}

Heap.prototype.sinkDown = function(n) {

    const val = this.arr[n]
    const len = this.arr.length

    while(true) {
       let child2N = (n+1) * 2
       let child1N = child2N -1
       let swap  = null
       let child1 = null
       let child2 = null

       if(child1N < len) {
         child1 = this.arr[child1N]
          swap = this.compareFunc(val,child1) > -1 ? child1N : swap
       }

       if(child2N < len) {
        child2 = this.arr[child2N]
        swap = this.compareFunc(swap === null? val: child1, child2) > -1 ? child2N : swap
     }

     if(swap === null) break

    this._swap(swap, n)
    n = swap
    }
}

Heap.prototype._swap = function(m,n) {
    const tmp = this.arr[m]
    this.arr[m] = this.arr[n]
    this.arr[n] = tmp
} 

var maxPerformance = function(n, speed, efficiency, k) {
    
    const mod = BigInt((10 ** 9) + 7);
  
    efficiency = efficiency.map((eff, i) => [BigInt(eff), BigInt(speed[i])]);

    efficiency.sort(([e1,s1], [e2,s2]) => e1 === e2 ? 0 : (e2 > e1) ? 1 : -1);

    const minSpeedHeap = new Heap((a,b) => a - b);

    let maxTeamSpeed = 0n, maxPerf = 0n;

    for(let i = 0; i < efficiency.length; i++) {

        const [eff, speed] = efficiency[i];

        if(i < k) {
            minSpeedHeap.push(speed);
            maxTeamSpeed += speed;

        } else if(speed > minSpeedHeap.top()) {

            maxTeamSpeed -= minSpeedHeap.pop();
            minSpeedHeap.push(speed);
            maxTeamSpeed += speed;
        }
        
        const perf = maxTeamSpeed * eff;
        
        if(perf > maxPerf) maxPerf = perf;
    }

    return maxPerf % mod;
};

let n = 6, speed = [2,10,3,1,5,8], efficiency = [5,4,3,9,7,2], k = 2;

console.log(Number(maxPerformance(n, speed, efficiency, k)));