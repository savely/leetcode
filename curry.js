const sum = a => {
    return b => { 
        if(b) return sum(a + b)

        return a
       }
} 

const calc = (f, ...params) => {
    return (...args) => {
        if(params.length + args.length >= f.length) {
            return f.apply(this, params.concat(args))
        }
        return calc(f, ...params, ...args)
    }
}

const curry = (f, ..._) => {
      if(typeof f !== "function") {
          throw new Error("curry() must accept function as a first parameter")
      }  
       
    const params = [], func = f

    const curried =  (arg, ...rest) => {

        params.push(arg)
        
        if(params.length === f.length) {
              return func.apply(this, params)
        }

        return curried
    }

    return curried
}

const sum3 = (a,b,c) => a + b + c
const mul3  = (a,b,c) => a * b * c
const f = curry(sum3)
const g = curry(mul3)

console.log(g(11)(4)(2))
