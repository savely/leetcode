/*
Validate if a given string can be interpreted as a decimal number.

Some examples:
"0" => true
" 0.1 " => true
"abc" => false
"1 a" => false
"2e10" => true
" -90e3   " => true
" 1e" => false
"e3" => false
" 6e-1" => true
" 99e2.5 " => false
"53.5e93" => true
" --6 " => false
"-+3" => false
"95a54e53" => false

Note: It is intended for the problem statement to be ambiguous. You should gather all requirements up front before implementing one. However, here is a list of characters that can be in a valid decimal number:

Numbers 0-9
Exponent - "e"
Positive/negative sign - "+"/"-"
Decimal point - "."
Of course, the context of these characters also matters in the input.
*/

const createParser = function(type) {
    switch(type) {
        case 'spaces' :
          return new Parser(c => c === ' ')
        case 'sign' : 
          return new Parser(c => c === '-' || c === '+', 0, 1)     
        case 'digits' : 
          return new Parser(c => !isNaN(parseInt(c)), 1)  
       case 'dot' :
          return new Parser(c => c === '.', 1, 1)    
       case 'mantiss_sign' :
          return new Parser(c => c === 'e', 1, 1) 
       case 'fail':   
       default :
          return new Parser(c => false, 1)
    }
  }
  
class Parser {

    nextParsers = []
    string      = ''

    constructor (func,  minLength = 0, maxLength = Infinity) {
      this.func = func 
      this.minLength = minLength
      this.maxLength = maxLength
    }

    setString(string) {
        this.string = string
    }

    doParse() {
        let pos = 0
        while(pos < this.string.length && pos <= this.maxLength && this.func(this.string[pos])) {
          pos++  
        }
        if(pos < this.minLength || pos > this.maxLength) return [false, this.string]

        return [true, this.string.slice(pos)]
    }

    chain(nextParsers) {
        if(nextParsers.length === undefined) {
          nextParsers = [nextParsers]
        } 
        this.nextParsers.push(...nextParsers.map(Parser.createParser))

        return this
    }

    parse() {
        let res  = this.doParse()
        if(!res[0]) return res

        let i = this.nextParsers.length-1

        while (this.nextParsers.length > 0) {
            const parser = this.nextParsers.pop()
            parser.setString(res[1])
            res = parser.parse()
            if(!res[0]) return res
        }

       return res
    }

    
      static alternative (parsers = [], string = '') {
          if(parsers === undefined  || parsers.length === undefined || parsers.length === 0) { 
          parsers = [Parser.createParser('fail')]
          }

          const res = []

          for(let i = 0; i < parsers.length; i++) {
              const parser = parsers[i]
              parser.setString(string)
              res.push(parser.parse())
          }

          return res.sort((arr1, arr2) => {
              if(arr1[0] === arr2[0]) {
                  return arr1[1].length - arr2[1].length
              }
              return arr1[0] > arr2[0] ? -1 : 1
          }) [0]
      }
}

/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {

    const float = Parser.createParser('spaces').chain(['digits','dot','digits','sign'])
    const int   = Parser.createParser('spaces').chain(['digits','sign'])  
    
    let res = Parser.alternative([float, int], s)

    if(!res[0]) return false

    const mantiss = Parser.createParser('mantiss_sign').chain(['spaces','digits','sign'])

    res = Parser.alternative([mantiss, Parser.createParser('spaces')], res[1])
    
    if(!res[0] || res[1].length !== 0) return false

    return true
};






//const floatParser = Parser.createParser('spaces').chain(['digits','dot','digits','sign'])
//const intParser   = Parser.createParser('spaces').chain(['digits','sign'])
//const dottedNumber = Parser.createParser('digits').chain(['digits', 'dot'])
//const signedDottedNumber = cp('sign').chain(dottedNumber)
//const mantiss    = new cp('mantiss_sign').chain(cp('sign').chain(cp('digits')))
//signedDottedNumber.chain(mantiss)


//parser.setString('    +78.12 c ')
console.log(isNumber('-78.12e+1'))