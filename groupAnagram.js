var groupAnagrams = function(strs) {
    
    const map = {};
     
     for(const str of strs) {
         
         let hash = [...str].sort().join('');
         
         if(map[hash] === undefined) map[hash] = [];
         
         map[hash].push(str);
     }
     
     const res = [];
     
     for(const str in map) {
         res.push(map[str]);
     }
     
     return res;
 };

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))