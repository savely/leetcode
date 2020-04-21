var romanToInt = function(s) {
    
    if(s.length === 0) return 0

    const romans = {'I': 1, 'V' : 5, 'X' : 10, 'L': 50, 'C' : 100, 'D': 500, 'M' : 1000 }
    const modifiers = ['I','X','C']

    const res = Array.from(s).reduce((acc, letter) => {
         
      const val = romans[letter] 
      const prev = romans[acc.prev]  

      if((val / prev === 5 || val/prev === 10)) {
        return { val: acc.val + val - prev , prev : '' }
      }
      
      if(prev !== undefined) {
         acc.val += prev
      }
      
      if(modifiers.includes(letter)) {
          return {val: acc.val, prev: letter}
      }

      return {val: acc.val + val , prev: ''}  

    }, {val: 0, prev: ''})

    return res.prev !== '' ? res.val + romans[res.prev] : res.val
};

//console.log(romanToInt('MCMXCIV'))



var intToRoman = function(num) {
 
    const romans = {0 : '', 1 : 'I', 5 : 'V', 10: 'X', 50 : 'L',100 : 'C', 500 : 'D', 1000 : 'M' }

    let s = 1000
    let res = ''

    const times  = function(c,k) {
        let str = ''
        while (k > 0) {
            str += c
            k--
        }
        return str
    }

        while(s >= 1) {
            let d = ((num/s) >> 0) % 10 

            if(d === 9) res += romans[s] + romans[s * 10]
            else if(d === 4) res += romans[s] + romans[s * 5]
            else if(d >=  5) res += romans[s * 5] + times(romans[s], d-5)
            else {
                res += times(romans[s], d)
            }

            s = s / 10
        }

        return res
};

//console.log(intToRoman('1994'))


var subdomainVisits = function(cpdomains) {
  const visits = new Map()
  
  const parse = function(domain) {

      [n, dmn] = domain.split(' ')
     
      while(dmn.length > 0) {
      const val = visits.has(dmn) ? visits.get(dmn) : 0
      visits.set(dmn, val + parseInt(n))
      let idx = dmn.indexOf('.')
      dmn = idx > -1 ? dmn.substr(idx + 1) : ''
      }
    }

    cpdomains.forEach(parse)
    
    return Array.from(visits).map(entry => entry[1] + ' ' + entry[0])
};

//console.log(subdomainVisits(["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]))

var numUniqueEmails = function(emails) {
  
    return Object.getOwnPropertyNames(emails.reduce((acc, email) => {
        [local, domain] = email.split('@')
        const mail = local.split('+')[0].split('.').join('') + '@' + domain
        if(acc[mail] === undefined) {
            acc[mail] = 0
        }
        return acc
    }, {})).length
};

//console.log(numUniqueEmails(["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]))

function firstNotRepeatingCharacter(s) {

    const freq = Array.from(s).reduce((acc, c) => {
           if(acc[c] === undefined) {
               acc[c] = 0
           }
           acc[c] ++   
           return acc
    }, {})
   
     for(name in freq) {
         if(freq[name] === 1) return name
     }
       return '_'
   }

//console.log(firstNotRepeatingCharacter('abcabad'))
   
var minSteps = function(s, t) {
  
    const freq = function(str) {
        return Array.from(str).reduce((acc, c) => {
        if(acc[c] === undefined) {
            acc[c] = 0
        }
        acc[c] ++   
        return acc
        }, {})
     }

   const freqS = freq(s)
   const freqT  = freq(t)

   let num = 0 
   for (sym in freqS) {

    if((freqT[sym]) === undefined) {
        num += freqS[sym] 
    }
       
   if(freqS[sym] > freqT[sym]) {
    num += freqS[sym] - freqT[sym]
   } 

   }

   return num
};

//console.log(minSteps('leetcode','practice'))

var validPalindrome = function(s) {

    if(s.length  === 0) return false

    const validP = function(i,j, wcard = false) {

        while(j > i) {
           if(s[j] === s[i]) {
               i++
               j--
               continue
           }

           if(wcard) {
               return validP(i+1, j) || validP(i, j-1)
           }
           return false
        }
      return true
    }

    return validP(0, s.length-1, true)
};

console.log(validPalindrome("aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuculmgmqfvnbgtapekouga"))