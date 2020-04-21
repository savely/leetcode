/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    this.entries = []
    this.capacity = k
    this.head = null
    this.tail = null
};

MyCircularQueue.prototype._next = function (pos) {
    return (pos === this.capacity-1) ? 0 : pos+1
}

MyCircularQueue.prototype._length = function (pos) {
    if(this.isEmpty()) return 0
    
    if(this.head <= this.tail) return this.tail - this.head + 1

    return (this.capacity - this.head) + this.tail + 1

}
MyCircularQueue.prototype._reset = function () {
     this.entries.length = 0
     this.head = null
     this.tail = null
  }

/**
 * Insert an element into the circular queue. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if(this.isFull()) {
        return false
    }
    if(this.isEmpty()) {
      this.head = this.tail = 0
      this.entries[0] = value
      return true;
    }

    this.tail = this._next(this.tail)
    this.entries[this.tail] = value
    return true
};

/**
 * Delete an element from the circular queue. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    
    if(this.isEmpty()) {
        return false
       }

       if(this.head === this.tail) {
        this._reset()
        return true
       }

       this.head = this._next(this.head)
       return true;
};

/**
 * Get the front item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    return this.isEmpty() ? -1 : this.entries[this.head]
};

/**
 * Get the last item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    return this.isEmpty() ? -1 : this.entries[this.tail]
};

/**
 * Checks whether the circular queue is empty or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return (this.head === null)
};

/**
 * Checks whether the circular queue is full or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return this._length() === this.capacity
};

const printMaze = function(arr) {
   const printRow = function(row) {
       console.log (
       row.map((x) => {
           if(x === Infinity) return 'i'
           if(x === -1)       return 'w'
           if(x === 0)        return 'd'
           return `${x}`
        }))
    }
   arr.map(printRow)
}

const printGrid = function(grid) {
   console.log(grid)
}

const wg = function(maze) {
    
    if(maze.length === 0 || maze[0].length === 0 ) return maze

    const width = maze.length
    const height =  maze[0].length

    const dirs = [[-1,0],[1,0],[0,-1],[0,1]]

     const queue = new MyCircularQueue(width * height)

     for (let i = 0; i < width; i++) {
         for(let j = 0; j < height; j++ ) {
             if(maze[i][j] === 0 ) {
                 queue.enQueue([i,j])
             }
         }
     }

     while(! queue.isEmpty()) {
           let pos = queue.Front()
           queue.deQueue()
            
           const curDist = maze[pos[0]][pos[1]]

           dirs.map(dir => {
              const x = pos[0] + dir[0]
              const y = pos[1] + dir [1]
              if(x < 0 || y < 0 || x >= width || y >=height || maze[x][y] <= curDist ) {
                  return
              }
              maze[x][y] = curDist + 1
              queue.enQueue([x,y])
           })
     }

    return maze
      
} 


const INF = Infinity
const maze =[[INF,  -1,  0,  INF], 
            [INF, INF, INF, -1],
            [-1,  -1, INF,  -1],
            [INF,  -1, INF,  -1]]

const grid = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]
const grid2 = [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let res = 0
    if(grid.length === 0 || grid[0].length === 0 ) return res

    const width = grid.length
    const height = grid[0].length

    const dirs = [[-1,0],[1,0],[0,-1],[0,1]]
    const queue = new MyCircularQueue(width * height)

    for(let i = 0; i < width; i++) {
        for(let j=0; j < height; j++) {
            if (grid[i][j] === '0') continue

            res++
            grid[i][j] = '0'
            queue.enQueue([i,j])
            while(!queue.isEmpty()) {
               const pos = queue.Front()
               queue.deQueue()

               dirs.map(dir => {
                   const x = pos[0] + dir[0]
                   const y = pos[1] + dir[1]

                   if(x < 0 || y < 0 || x >= width | y >= height || grid[x][y] === '0') {
                       return
                   }

                   grid[x][y] = '0'
                   queue.enQueue([x,y])
               })
            }
        }
        
    }
    return res
};

var openLock = function(deadends, target) {
  
  const tgt    = Array.from(target).map(n => parseInt(n))    
  const start =  Array(tgt.length).fill(0)
  const visited = new Map(deadends.map(str => [str, null]))
  const queue = [start]
  let  steps = -1

  if(visited.has(start.join('')) || visited.has(target)) {return -1}

  const next = function (n) {
    return (n+1) % 10
  }
  const prev = function (n) {
    return n === 0 ? 9 : (n-1) % 10
  }
  const neightbours = function (arr) {

  return arr.reduce((acc, val, i)  => {
       const nxt = Array.from(arr)
       nxt[i] = next(nxt[i])
       if(!visited.has(nxt.join(''))) {acc.push(nxt)}
       const prv = Array.from(arr)
       prv[i] = prev(prv[i])
       if(!visited.has(prv.join(''))) {acc.push(prv)}

       return acc
  }, [] )         
  }

  while(queue.length !== 0) {
     steps ++
     let len = queue.length
     for (let i = 0; i < len; i++) {
     const comb = queue.shift() 
     if(comb.join('') === target) {
         return steps
     }
     if(visited.has(comb.join(''))) {continue}

     visited.set(comb.join(''), null)
     let nbrs = neightbours(comb)
     nbrs.map (x => queue.push(x))
    }
  }

  return -1
};


//["8887","8889","8878","8898","8788","8988","7888","9888"]
//"8888"
//printMaze(maze)
//console.log('----------------')
//printMaze(wg(maze))
//printGrid(grid2)
console.log('----------------')
console.log(openLock(["8887","8889","8878","8898","8788","8988","7888","9888"], '8888'))
console.log('----------------')
//printGrid(grid2)

 
// Your MyCircularQueue object will be instantiated and called as such:
 //["MyCircularQueue","enQueue","Front","isFull","enQueue","enQueue","enQueue","deQueue","enQueue","enQueue","isEmpty","Rear"]
//[[4],[3],[],[],[7],[2],[5],[],[4],[2],[],[]]
/*var obj = new MyCircularQueue(4)
let param = []
 param.push(obj.enQueue(3))
 param.push(obj.Front())
 param.push(obj.isFull())
 param.push(obj.enQueue(7))
 param.push(obj.enQueue(2))
 param.push(obj.enQueue(5))
 param.push(obj.deQueue())
 param.push(obj.enQueue(4))
 param.push(obj.enQueue(2))
 param.push(obj.isEmpty())
 param.push(obj.Rear())

 console.log('expected', [null,true,3,false,true,true,true,true,true,false,false,4])
 console.log([obj, param])*/



