var groupAnagrams = function(strs) {

    if(strs.length < 2) return [strs]

    const res = []
    const sorted = strs.map(str => Array.from(str).sort().join(''))
    const hash = {}

    for(let i=0; i < sorted.length; i++) {
        if(hash[sorted[i]] === undefined) {
            hash[sorted[i]] = [strs[i]]
        } else {
            hash[sorted[i]].push(strs[i]) 
        }
    }

    for(const group in hash) {
        res.push(hash[group])
    }
    return res
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))