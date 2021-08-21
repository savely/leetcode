/*
#952. Largest Component Size by Common Factor

You are given an integer array of unique positive integers nums. Consider the following graph:

There are nums.length nodes, labeled nums[0] to nums[nums.length - 1],
There is an undirected edge between nums[i] and nums[j] if nums[i] and nums[j] share a common factor greater than 1.
Return the size of the largest connected component in the graph.

 

Example 1:


Input: nums = [4,6,15,35]
Output: 4
Example 2:


Input: nums = [20,50,9,63]
Output: 2
Example 3:


Input: nums = [2,3,6,7,4,12,21,39]
Output: 8
 

Constraints:

1 <= nums.length <= 2 * 104
1 <= nums[i] <= 105
All the values of nums are unique.
*/


const factor = (n) => {

    const res = [];

    for(let i = 1; i <= Math.sqrt(n) >> 0; i++) {

        if(n % i === 0) {
            res.push(i);

            if(n / i !== i) res.push(n / i);
        }
    }
    return res;
}

const makeSet = () => {

    const root = {rank : 0, size : 0};

    root.parent  = root;

    return root;
};

const find = (node) => {

    if(node.parent === node) return node;

    const parent = find(node.parent);

    node.parent = parent;

    return parent;
};

const union = (node1, node2) => {

    const root1 = find(node1), root2 = find(node2); 

    if(root1 === root2) return;

    if(root1.rank >= root2.rank) {
        root2.parent = root1;
        root1.rank += root1.rank === root2.rank ? 1 : 0;
        root1.size += root2.size;
    } else {
        root1.parent = root2;
        root2.size += root1.size;
    }
}

/**
 * @param {number[]} A
 * @return {number}
 */
 var largestComponentSize = function(A) {
    
    const factors = {};

    let max = 0;

    for(const n of A) {

        const factorsN = factor(n);

        if(!factorsN.length) continue;

        let m  = factorsN[1];

        factors[m] = (factors[m] || makeSet());

        const node = find(factors[m]);

        for (let i = 2; i < factorsN.length; i++) {

             m = factorsN[i];

             factors[m] = (factors[m] || makeSet());

             const currNode = find(factors[m]);

             union(node, currNode);
        }

        const parent = find(node);
        parent.size++;
        max = Math.max(max, parent.size);        
    }

    return max;
};

let  nums = [4,6,15,35];
nums = [20,50,9,63];
nums = [2,3,6,7,4,12,21,39];
nums = [83,99,39,11,19,30,31];

console.log(largestComponentSize(nums));