/*
#
There is a new alien language which uses the latin alphabet. However, the order among letters are unknown to you. 
You receive a list of words from the dictionary, where words are sorted lexicographically by the rules of this new language. 
Derive the order of letters in this language.

For example,
Given the following words in dictionary,

[
"wrt",
"wrf",
"er",
"ett",
"rftt"
]
The correct order is: "wertf".
*/

function  alienDictionary (words) {

    if(!words.length) return ""

    const dict = new Map()

    for(let i = 1; i < words.length; i++) {
        
      const prev = words[i-1], curr = words[i], len = Math.min(prev.length, curr.length)

       for(let j = 0; j < len; j++) {
         const pJ = prev[j], cJ =curr[j]
         if(pJ !== cJ) {
           const  pSet = dict.get(pJ) || new Set()
           pSet.add(cJ)
           dict.set(pJ, pSet)

           if(!dict.has(cJ)) {
             dict.set(cJ, new Set())
           }
           break
         }
       }

     }
    
     console.dir(dict)

     let char;

     for(const [ch, set] of dict) {
        if(set.size === 0) {
            char = ch
            dict.delete(ch)
            break
       }
    }
    
    const res = [char]

    
    while(dict.size) {

        let newChar;

        for(const [ch, set] of dict) {
            set.delete(char)
            if(set.size === 0) {
                newChar = ch
            }
         }
         
         char = newChar
         res.unshift(char)
         dict.delete(char)

    }
   
    return res.join('')
}


let words = [
    "wrt",
    "wrf",
    "er",
    "ett",
    "rftt"
    ]

console.log(alienDictionary(words))