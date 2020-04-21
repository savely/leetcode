/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
 
 if(nums.length < 2)  return nums

 let zeroIdx = 0
 let firstNonZeroidx = 0
 
  while (firstNonZeroidx < nums.length) {
    while (zeroIdx < nums.length && nums[zeroIdx] !== 0) {
      zeroIdx++
    }
    firstNonZeroidx =  zeroIdx + 1
    while(firstNonZeroidx < nums.length && nums[firstNonZeroidx] === 0) {
       firstNonZeroidx++  
    }

     if(firstNonZeroidx >= nums.length) break

    if(zeroIdx < firstNonZeroidx) {
        const t = nums[zeroIdx]
        nums[zeroIdx] = nums[firstNonZeroidx]
        nums[firstNonZeroidx] = t
    }
  }
};

var guessNumber = function(n) {
    
    
    const guessRange = function(lo, hi) {
        
        if (lo === hi) return lo
        if(hi - lo === 1) return (guess(hi) === 0) ? hi : lo
        
        const mid = lo + Math.floor((hi-lo)/2)    
        
        if(guess(mid) === -1) return guessRange(lo,mid)
        if(guess(mid) === 1) return guessRange(mid, hi)
        
        return mid

    }
    
    return guessRange(1, n)    
    
};

const guess = function (num) {
    if(num > 1) return -1
    if(num < 1) return 1
    return 0
}

const z = [0,0,0,0,0,0]

var search = function(nums, target) {

    const s  = function(l, h) {

        if(l === h) return nums[l] === target ? l : -1
        if(h - l === 1) return nums[l] === target ? l : (nums[h] === target ? h : -1)
        const m = l + Math.floor((h-l)/2)

        return (nums[m] === target) ? m : (nums[m] > target ? s(l,m) : s(m,h))
    }

    const searchRange = function (lo, hi) {

        if(nums[hi] >= nums[lo]) return s(lo,hi)

        let pivot = lo

        while(pivot <= hi - 1) {
            if(nums[pivot] > nums[pivot+1]) {
                return Math.max(s(lo,pivot), s(pivot+1, hi))
            }
            pivot++
        }
    }

    return searchRange(0, nums.length-1)
};

const x = [4,5,6,7,0,1,2]

//moveZeroes(z)

//console.log(search(x, 12))

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
    }

var hasPathSum = function(root, sum) {

   
    const _s = function(s, node) {
    
    if(node === null) return 0
        
    if(sum === s + node.val
      && node.left === null
      && node.right === null) {
          return 1
      }
    
    return _s(s + node.val, node.left) + _s(s + node.val, node.right)
    }
    
    return _s( 0, root)
};


const fromArray = function(arr) {
       
    if(arr.length === 0) return null

    const nodes = arr.map (n => n === null ? null : new TreeNode(n))
    
    let left = 0, right = 0

    for(let i = 0; i < arr.length; i++) {
       if(nodes[i] === null) continue
       
       if(2*left+1 < arr.length) {
          nodes[i].left = nodes[2*left+1]
          left++
       }

       if(2*right+2 < arr.length) {
       nodes[i].right = nodes[2*right+2]
        right++
       }
    }

   return nodes[0]
 }

 var pathSum = function(root, sum) {

   
    const _s = function(s, node) {
    
    if(node === null) return 0
        
    if(sum === s + node.val) return 1

    
    return _s(s + node.val, node.left) + _s(s + node.val, node.right)
    }
    
    return _s( 0, root)
};

 //const s = fromArray([1,-2,-3,1,3,-2,null,-1])
 //console.log(pathSum(s,-1))

 var isAnagram = function(s, t) {
    
    if(s.length !== t.length) return false
    
    const hash = new Map()

    for(let i = 0; i < s.length; i++) {
       if(!hash.has(s[i])) {
          hash.set(s[i], 0)
       } 
       hash.set(s[i], hash.get(s[i]) + 1)
    }

    
    for(let i = 0; i < t.length; i++) {
        if(hash.has(t[i])) {
            hash.get(t[i]) > 1 ? hash.set(t[i], hash.get(t[i]) - 1) : hash.delete(t[i])
        }
    }
    
    return hash.size === 0
};

var firstUniqChar = function(s) {
    
    const hash = new Map()
    
    for(let i = 0; i < s.length; i++) {
       if(!hash.has(s[i])) {
          hash.set(s[i], [i,0])
       } 
       const t = hash.get(s[i])
       hash.set(s[i], [t[0], t[1]+1])
    }
    
     for(let ent of Array.from(hash)) {
        if(ent[1][1] === 1) return ent[1][0]
     }
      
    return -1
};

var plusOne = function(digits) {
    if(digits.length === 0) return [1]

    return digits.reverse().reduce((acc, d) => {
        return acc[1] + d === 10 ? [[...acc[0],0],1] : [[...acc[0],acc[1] + d],0]}, [[],1])[0].reverse()
};

console.log(plusOne([1,9,9]))