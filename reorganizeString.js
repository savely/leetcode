/**
 * @param {string} S
 * @return {string}
 */
 var reorganizeString = function(S) {
    
    const freq = [...S].reduce((acc, n) => {
       if(!acc[n]) {
           acc[n] = 0
       }
       acc[n]++
       return acc
   }, {})
    
 
    const freqArr = []
    
    for(const char in freq) {
        freqArr.push([char, freq[char]])
    }
     
     if(freqArr.length === 1) return freqArr[0][1] === 1 ? freqArr[0][0] : ""
     
     const sortFunc = ([c1, fr1], [c2, fr2]) => fr1 === fr2 ? c2.charCodeAt(0) - c1.charCodeAt(0) : fr2 - fr1  
    freqArr.sort(sortFunc) 
     
     console.table(freqArr)
     
     const res =[]
  
     while(freqArr.length > 1) {
         const first = freqArr.shift()
         
         if(first[1] > Math.ceil((S.length - res.length) / 2)) return ""
         
         const second = freqArr.shift()
         
          while(second[1] > 0) {
              res.push(first[0], second[0])
              first[1] -= 1
              second[1] -= 1
          }
         
          if(first[1] > 0) {
              freqArr.push(first)
              freqArr.sort(sortFunc) 
          } 
     }

     if(freqArr.length) {
         const [char, count] = freqArr.pop()

         if(count > 1) return ""

         res.push(char)
     }
     
     console.log(S.length, res.length)
     return res.join('')
 };

 let str = "asdasdafjakdfdkdfvurbddddf"
 let str2 = 'sgfsdgfgjfdereddresddds'
 console.log(reorganizeString(str2))