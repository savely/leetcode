var isSubsequence = function(s, t) {
    
    const searchFrom = function(idx, str) {
        
        if(str === '') return idx
        
        let i = idx
        
        while(i < t.length) {
            if(t[i] === str[0]) return searchFrom(i+1, str.substring(1))
            i++
        }
        return -1
    }
    
    return searchFrom(0, s) > -1
};

//console.log(isSubsequence("agd","ahbgdc"))

/**
 * @param {string} S
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function(S, words) {
    
    const dict = {}

    for(let i =0; i< S.length; i++) {
        if(dict[S[i]] === undefined) {
            dict[S[i]] = []
        }
        dict[S[i]].push(i)
    }

    const bs = function(n, arr) {
      let lo = 0
      let hi = arr.length -1

      while(hi > lo) {
            if(hi - lo === 1) return arr[lo] > n ? arr[lo] :(arr[hi] > n ? arr[hi] : -1)

            let mid = Math.trunc((hi + lo)/2)
           
            if(arr[mid] <= n) {
              lo = mid  
            } else {
               hi = mid 
            }
      }
      
      if(hi === lo)  {
          return arr[lo] > n ? arr[lo] : -1
      }

      return -1
    }

    const search = function(word) {

        let pos = -1

        for(let i = 0; i < word.length; i++) {
            if(dict[word[i]] === undefined) return false
            pos = bs(pos, dict[word[i]])
            if(pos < 0) return false
        }
       return true
    }

    return words.reduce((acc, w) => acc += search(w) ? 1 : 0, 0)
};

var findLucky = function(arr) {
    const freq = {}
    
    for(let i = 0; i < arr.length; i++) {
        if(freq[arr[i]] === undefined) {
            freq[arr[i]] = 0
        }
        freq[arr[i]]++
    }
    
    let n = -1
    
    for(num in freq) {
       if(freq[num] === parseInt(num) && freq[num] > n) {
       n = freq[num]
       }
    }
    
    return n
};
console.log(findLucky([2,2,3,4]))