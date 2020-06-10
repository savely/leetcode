/*
#809
Sometimes people repeat letters to represent extra feeling, such as "hello" -> "heeellooo", "hi" -> "hiiii".  
In these strings like "heeellooo", we have groups of adjacent letters that are all the same:  "h", "eee", "ll", "ooo".

For some given string S, a query word is stretchy if it can be made to be equal to S by any number of applications of the following extension operation:
 choose a group consisting of characters c, and add some number of characters c to the group so that the size of the group is 3 or more.

For example, starting with "hello", we could do an extension on the group "o" to get "hellooo",
 but we cannot get "helloo" since the group "oo" has size less than 3.  
 Also, we could do another extension like "ll" -> "lllll" to get "helllllooo".  If S = "helllllooo", then the query word "hello" would be stretchy because of
 these two extension operations: query = "hello" -> "hellooo" -> "helllllooo" = S.

Given a list of query words, return the number of words that are stretchy. 
*/

/**
 * @param {string} S
 * @param {string[]} words
 * @return {number}
 */
var expressiveWords = function(S, words) {
    
    const isStretched = function(word) {
        if(word.length > S.length) return false


        let i = 0, j = 0

        while(i < word.length && j < S.length) {
            if(word[i++] !== S[j++]) return false

            let countS = 1, countW = 1

            while(S[j-1] === S[j]) {
                j++
                countS++
            }

            while(word[i-1] === word[i]) {
                i++
                countW++
            }
            
            if(countS === countW) continue

            if(countS < countW 
               || countS < 3) return false
        }
        
        return i === word.length && j === S.length
    }

    return words.reduce((acc, w) => acc += isStretched(w) ? 1 : 0, 0)
};  

//console.log (expressiveWords('heeellooo', ["hello", "hi", "helo"]))
//console.log (expressiveWords('abcd', ["abc"]))
//console.log (expressiveWords('leee', ["le"]))
//console.log(expressiveWords("dddiiiinnssssssoooo",
//                           ["dinnssoo","ddinso","ddiinnso","ddiinnssoo","ddiinso","dinsoo","ddiinsso","dinssoo","dinso"]))
//console.log(expressiveWords("dddiiiinnssssssoooo",["dinnssoo"]))