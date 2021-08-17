/*
#1462. Course Schedule IV

There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course ai first if you want to take course bi.

For example, the pair [0, 1] indicates that you have to take course 0 before you can take course 1.
Prerequisites can also be indirect. If course a is a prerequisite of course b, and course b is a prerequisite of course c, then course a is a prerequisite of course c.

You are also given an array queries where queries[j] = [uj, vj]. For the jth query, you should answer whether course uj is a prerequisite of course vj or not.

Return a boolean array answer, where answer[j] is the answer to the jth query.

 

Example 1:


Input: numCourses = 2, prerequisites = [[1,0]], queries = [[0,1],[1,0]]
Output: [false,true]
Explanation: The pair [1, 0] indicates that you have to take course 1 before you can take course 0.
Course 0 is not a prerequisite of course 1, but the opposite is true.
Example 2:

Input: numCourses = 2, prerequisites = [], queries = [[1,0],[0,1]]
Output: [false,false]
Explanation: There are no prerequisites, and each course is independent.
Example 3:


Input: numCourses = 3, prerequisites = [[1,2],[1,0],[2,0]], queries = [[1,0],[1,2]]
Output: [true,true]
 

Constraints:

2 <= numCourses <= 100
0 <= prerequisites.length <= (numCourses * (numCourses - 1) / 2)
prerequisites[i].length == 2
0 <= ai, bi <= n - 1
ai != bi
All the pairs [ai, bi] are unique.
The prerequisites graph has no cycles.
1 <= queries.length <= 104
0 <= ui, vi <= n - 1
ui != vi
*/

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @param {number[][]} queries
 * @return {boolean[]}
 */
 var checkIfPrerequisite = function(numCourses, prerequisites, queries) {

  const reachable = new Array(numCourses).fill(0).map(_ => new Array(numCourses).fill(0));
  
  const adj = {};
  
  for(const [pr, crs] of prerequisites) {

    if(adj[pr] === undefined) {
        adj[pr] = [];
    }

    adj[pr].push(crs);
  }


    const dfs = (course, parents, visited = new Set()) => {

        if(visited.has(course)) return;

        visited.add(course);

        for(const par of parents) {
            reachable[par][course] = 1;
        }

        for(c of (adj[course] || [])) {

            dfs(c, [...parents, course], visited);
        }

    };

    for(const pr in adj) {
        dfs(pr, []);
    }

  console.table(reachable);

  return queries.map(([pr, crs]) => reachable[pr][crs] === 1);
};