/*
#210. Course Schedule II

There are a total of n courses you have to take, labeled from 0 to n-1.

Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]

Given the total number of courses and a list of prerequisite pairs, return the ordering of courses you should take to finish all courses.

There may be multiple correct orders, you just need to return one of them. If it is impossible to finish all courses, return an empty array.

Example 1:

Input: 2, [[1,0]] 
Output: [0,1]
Explanation: There are a total of 2 courses to take. To take course 1 you should have finished   
             course 0. So the correct course order is [0,1] .
Example 2:

Input: 4, [[1,0],[2,0],[3,1],[3,2]]
Output: [0,1,2,3] or [0,2,1,3]
Explanation: There are a total of 4 courses to take. To take course 3 you should have finished both     
             courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0. 
             So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3] .
*/

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {


    const adj = {}, dep = {};

    for(const [end, start] of prerequisites) {
        adj[end] = adj[end] || new Set();
        adj[end].add(start);

        dep[start] = dep[start] || new Set();
        dep[start].add(end);
    }

    const path = new Set();

    let queue = [];

    for(let i = 0; i < numCourses; i++) {

        if(adj[i]) continue;

        queue.push(i);
        path.add(i);
    }

    while(queue.length) {

        const next = new Set();

        while(queue.length) {

            const node = queue.pop(), deps = dep[node] || new Set();

                for(const course of deps) {

                    adj[course].delete(node);

                    if(!adj[course].size) {
                        path.add(course);
                        next.add(course);
                    }
                }
        }

        queue.push(...next)
    }

    return path.size === numCourses ? [...path] : [];
};
