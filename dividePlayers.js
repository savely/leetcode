/*
#2491. Divide Players Into Teams of Equal Skill

You are given a positive integer array skill of even length n where skill[i] denotes the skill of the ith player. Divide the players into n / 2 teams of size 2 such that the total skill of each team is equal.

The chemistry of a team is equal to the product of the skills of the players on that team.

Return the sum of the chemistry of all the teams, or return -1 if there is no way to divide the players into teams such that the total skill of each team is equal.

 

Example 1:

Input: skill = [3,2,5,1,3,4]
Output: 22
Explanation: 
Divide the players into the following teams: (1, 5), (2, 4), (3, 3), where each team has a total skill of 6.
The sum of the chemistry of all the teams is: 1 * 5 + 2 * 4 + 3 * 3 = 5 + 8 + 9 = 22.

Example 2:

Input: skill = [3,4]
Output: 12
Explanation: 
The two players form a team with a total skill of 7.
The chemistry of the team is 3 * 4 = 12.

Example 3:

Input: skill = [1,1,2,3]
Output: -1
Explanation: 
There is no way to divide the players into teams such that the total skill of each team is equal.

 

Constraints:

    2 <= skill.length <= 105
    skill.length is even.
    1 <= skill[i] <= 1000

*/

/**
 * @param {number[]} skill
 * @return {number}
 */

var dividePlayers = function(skill) {
    
  const values = new Array(1001).fill(0);
  let min = Infinity, max = - Infinity;

  for(const val of skill) {
    
    if(val < min) {
        min = val;
    } 
    if(val > max) {
        max = val;
    }

    values[val]++;
  }

  const sum = min + max;

  let chemistry = 0;

    for(let i = 1; i < values.length; i++) {

        const count = values[i], pairIdx = i <= sum ? sum - i : i - sum, pairCount = values[pairIdx] || 0;

        if(count !== pairCount) return -1;

        if(count === 0) continue;

        if(i === pairIdx && count % 2) return -1;

        chemistry += i * pairIdx * (i === pairIdx ? count / 2 : count);

        values[i] = 0;
        values[pairIdx] = 0;
    }

    return chemistry;
};

let skill = [3,2,5,1,3,4];
//skill = [3,4];
//skill = [1,1,2,3];
skill = [1000,1000];
skill = [5,1,2,4];

console.log(dividePlayers(skill));