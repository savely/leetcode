/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.entries    = []
    this.minEntries = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
      this.entries.unshift(x)
      const min = this.getMin()
      if(min === undefined || min >= x ) {
          this.minEntries.unshift(x)
      }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
     const x = this.entries.shift()
    if(x === this.getMin()) {
     this.minEntries.shift()  
    }

    return x 
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.entries[0]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minEntries[0]
};

//a = ["push","push","push","getMin","pop","top","getMin"]
//b = [[-2],[0],[-3],[],[],[],[]]

a = ["push","push","push","getMin","top","pop","getMin"]
b = [[-2],[0],[-1],[],[],[],[]]

const zip = function(ar1, ar2, zipper) {
    return zipper 
      ? ar1.map((value, index) => zipper(value, ar2[index]))
      : ar1.map((value, index) => [value, ar2[index]])
    ;
  }

const run = function(obj, fun, args) {
     
    return zip(fun, args, (fname,arg) => {
        const f = obj[fname] 
        res = f.apply(obj, arg) 
        return res === undefined ? null : res
    } )

}

//console.log(run(new MinStack(), a, b))


/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    
    if(strs.length < 1) return ''
   
    if(strs.length === 1) return strs[0]

    let prefix = Array.from(strs[0])
    
    for(let i=1; i < strs.length; i++) {
        
        if(strs[i].length > prefix.length) {
           prefix.length = strs[i].length
        }  
           
        for(j = 0; j < prefix.length; j++) {
            
              if(strs[i][j] !== prefix[j]) {
                  prefix.length = j
                  break
              }
        }
        
        if(prefix.length === 0) return ''
    }
    
    return prefix.join('')
};

const words = ["flower","flow","flight"]

console.log(longestCommonPrefix(words))