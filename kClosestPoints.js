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

Heap.prototype.heapify = function(arr) {
  for(let i = 0; i< arr.length; i++) {
      this.push(arr[i])
  }
}

Heap.prototype.peek = function() {
    return this.arr.length === 0 ? undefined : this.arr[0]
}

Heap.prototype._swap = function(m,n) {
    const tmp = this.arr[m]
    this.arr[m] = this.arr[n]
    this.arr[n] = tmp
} 


/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function(points, K) {
  
    const dist = (x, y = [0,0]) => Math.sqrt((x[0]-y[0]) * (x[0]-y[0]) + (x[1]-y[1]) * (x[1]-y[1]))
    const cmpDist = (p1, p2) =>  {
        const diff = dist(p2) - dist(p1)
        if(Math.abs(diff) < 0.00000001) return 0
        return diff > 0 ? 1 : -1 
      }
    const heap = new Heap(cmpDist), res = []
    let i = 0

    while(i < points.length) {
        const point = points[i++]
        if(heap.size() < K) {
            heap.push(point)
        } else if(cmpDist(point, heap.peek()) > 0) {
           heap.pop()
           heap.push(point)
       }
    }

    while(heap.size() > 0) {
        res.push(heap.pop())
    }
    return res
};

//console.log(kClosest([[3,3],[5,-1],[-2,4]], 2))