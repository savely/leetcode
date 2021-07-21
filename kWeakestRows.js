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

Heap.prototype._swap = function(m,n) {
    const tmp = this.arr[m]
    this.arr[m] = this.arr[n]
    this.arr[n] = tmp
} 


/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    
    const heap = new Heap(([ones1, pos1], [ones2, pos2]) => {
        
        if(ones1 === ones2) return pos1 - pos2

        return ones1 - ones2
    })

    const bSearch = function(row) {

        if(row[0] === 0) return 0

        let lo = 0, hi = row.length - 1

        if(row[hi] === 1) return hi

        while(hi > lo) {
            const mid = Math.ceil((hi + lo) / 2)

            if(hi - lo === 1) return row[lo] === 0 ? lo : hi

            if(row[mid] === 0 && row[mid-1] === 1) return mid

            if(row[mid] === 1) {
                lo = mid
            } else {
                hi = mid
            }
        }

        return lo
    }

     for(let i = 0; i < mat.length; i++) {

        const row = mat[i]
        let ones = bSearch(row)

        heap.push([ones, i])
     }

     const res = []

     while(k-- > 0) {
         res.push(heap.pop()[1])
     }

     return res
};

let mat = 
[[1,1,0,0,0],
 [1,1,1,1,0],
 [1,0,0,0,0],
 [1,1,0,0,0],
 [1,1,1,1,1]]

 mat = [[1,0],[0,0],[1,0]]

 mat = [[1,1,0],[1,0,0],[1,0,0],[1,1,1],[1,1,0],[0,0,0]]

mat = [[1,1,1,1,1],
       [1,0,0,0,0],
       [1,1,0,0,0],
       [1,1,1,1,0],
       [1,1,1,1,1]]

 
console.log(kWeakestRows(mat, 3))