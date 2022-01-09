/*
#1041. Robot Bounded In Circle

On an infinite plane, a robot initially stands at (0, 0) and faces north. The robot can receive one of three instructions:

"G": go straight 1 unit;
"L": turn 90 degrees to the left;
"R": turn 90 degrees to the right.
The robot performs the instructions given in order, and repeats them forever.

Return true if and only if there exists a circle in the plane such that the robot never leaves the circle.

 

Example 1:

Input: instructions = "GGLLGG"
Output: true
Explanation: The robot moves from (0,0) to (0,2), turns 180 degrees, and then returns to (0,0).
When repeating these instructions, the robot remains in the circle of radius 2 centered at the origin.
Example 2:

Input: instructions = "GG"
Output: false
Explanation: The robot moves north indefinitely.
Example 3:

Input: instructions = "GL"
Output: true
Explanation: The robot moves from (0, 0) -> (0, 1) -> (-1, 1) -> (-1, 0) -> (0, 0) -> ...
 

Constraints:

1 <= instructions.length <= 100
instructions[i] is 'G', 'L' or, 'R'.

*/

/**
 * @param {string} instructions
 * @return {boolean}
 */
 var isRobotBounded = function(instructions) {

    let pos = [0,0]; 
    const  dirs = {'N' : {'L' : 'W', 'R' : 'E'},
                   'S' : {'L': 'E', 'R' : 'W'},
                   'W' : {'L': 'S', 'R' : 'N'},
                   'E' : {'L': 'N', 'R' : 'S'}};

    const  go = (dir) => {

        let [x, y] = pos;

        switch(dir) {
            case 'N': 
            pos = [x, y + 1];
            break;
            case 'S': 
            pos = [x, y - 1];
            break;
            case 'W': 
            pos = [x - 1, y];
            break;
            case 'E': 
            pos = [x + 1, y];
        }
    }

    let dir = 'N';

    for(const instr of instructions) {

        if(instr === 'G') {
            go(dir);
            continue;
        }

        dir = dirs[dir][instr];
    }
    
    return pos[0] + pos[1] === 0 || dir !== 'N';
};
