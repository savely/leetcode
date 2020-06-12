/*
#68
Given an array of words and a width maxWidth, format the text such that each line has exactly maxWidth characters and is fully (left and right) justified.

You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces ' ' when necessary so that each line has exactly maxWidth characters.

Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line do not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.

For the last line of text, it should be left justified and no extra space is inserted between words.

Note:

A word is defined as a character sequence consisting of non-space characters only.
Each word's length is guaranteed to be greater than 0 and not exceed maxWidth.
The input array words contains at least one word.
*/

/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {

    const justifyLine  = function(words, width) {

        if(words.length === 0) return ""

        if(words.length === 1) {
            return words[0].padEnd(maxWidth)
        }

        let freespace = maxWidth - width
        const spaces = Math.floor(freespace / (words.length - 1))
        freespace -= spaces * (words.length -1)

        let res = words[0]

        for(let i = 1; i < words.length; i++) {
            const space = freespace > 0 ? " ".repeat(spaces+1) : " ".repeat(spaces)
            res += space + words[i]
            freespace--
        }
        
        return res
    }
  
    const linesArr =  words.reduce((acc, word) => {
    
      const lastLine = acc.length -1
      const words = acc[lastLine][0], len = acc[lastLine][1]
      const spaces =  words.length
      const minLen = word.length + len + spaces

      if(minLen <= maxWidth) {
          acc[lastLine][1] += word.length 
          acc[lastLine][0].push(word)
          return acc
      }

      acc.push([[word], word.length])
      return acc
      
    }, [[[],0]])


    const lastLine = linesArr.pop()[0].join(' ').padEnd(maxWidth)

    
    const res = linesArr.map((el) => justifyLine(...el))
    res.push(lastLine)

    return res
};