var findAnagrams = function(s, p) {
    
    const hash = new Map()
    const res  = []

    for(let i = 0; i < p.length; i++) {
        if(!hash.has(p[i])) {
           hash.set(p[i],1)
           continue
        }
        hash.set(p[i], hash.get(p[i])+1)
    }

    let tmp = new Map(hash)

    for(let i = 0; i <= s.length-p.length; i++) {
        if(!hash.has(s[i])) {
             continue
        }
        tmp = new Map(hash)
        let j = i

        while(tmp.size > 0) {
           if(!tmp.has(s[j])) {
               break
           }
           let count = tmp.get(s[j])
           if(count === 1) {
               tmp.delete(s[j])
           } else {
               tmp.set(s[j], count-1)
           }
           j++
        }

        if(tmp.size === 0) {
            res.push(i)

            while(j < s.length && s[i] === s[j]) {
               i++
               j++
               res.push(i)
            }

        } else if(!hash.has(s[j])) {
            i = j
        }
    }
    return res
};

console.log(findAnagrams('aaaabaaaab','aaa'))
