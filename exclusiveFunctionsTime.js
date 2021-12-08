/*
#636. Exclusive Time of Functions

On a single-threaded CPU, we execute a program containing n functions. Each function has a unique ID between 0 and n-1.

Function calls are stored in a call stack: when a function call starts, its ID is pushed onto the stack, and when a function call ends, its ID is popped off the stack. The function whose ID is at the top of the stack is the current function being executed. Each time a function starts or ends, we write a log with the ID, whether it started or ended, and the timestamp.

You are given a list logs, where logs[i] represents the ith log message formatted as a string "{function_id}:{"start" | "end"}:{timestamp}". For example, "0:start:3" means a function call with function ID 0 started at the beginning of timestamp 3, and "1:end:2" means a function call with function ID 1 ended at the end of timestamp 2. Note that a function can be called multiple times, possibly recursively.

A function's exclusive time is the sum of execution times for all function calls in the program. For example, if a function is called twice, one call executing for 2 time units and another call executing for 1 time unit, the exclusive time is 2 + 1 = 3.

Return the exclusive time of each function in an array, where the value at the ith index represents the exclusive time for the function with ID i.

 

Example 1:


Input: n = 2, logs = ["0:start:0","1:start:2","1:end:5","0:end:6"]
Output: [3,4]
Explanation:
Function 0 starts at the beginning of time 0, then it executes 2 for units of time and reaches the end of time 1.
Function 1 starts at the beginning of time 2, executes for 4 units of time, and ends at the end of time 5.
Function 0 resumes execution at the beginning of time 6 and executes for 1 unit of time.
So function 0 spends 2 + 1 = 3 units of total time executing, and function 1 spends 4 units of total time executing.
Example 2:

Input: n = 1, logs = ["0:start:0","0:start:2","0:end:5","0:start:6","0:end:6","0:end:7"]
Output: [8]
Explanation:
Function 0 starts at the beginning of time 0, executes for 2 units of time, and recursively calls itself.
Function 0 (recursive call) starts at the beginning of time 2 and executes for 4 units of time.
Function 0 (initial call) resumes execution then immediately calls itself again.
Function 0 (2nd recursive call) starts at the beginning of time 6 and executes for 1 unit of time.
Function 0 (initial call) resumes execution at the beginning of time 7 and executes for 1 unit of time.
So function 0 spends 2 + 4 + 1 + 1 = 8 units of total time executing.
Example 3:

Input: n = 2, logs = ["0:start:0","0:start:2","0:end:5","1:start:6","1:end:6","0:end:7"]
Output: [7,1]
Explanation:
Function 0 starts at the beginning of time 0, executes for 2 units of time, and recursively calls itself.
Function 0 (recursive call) starts at the beginning of time 2 and executes for 4 units of time.
Function 0 (initial call) resumes execution then immediately calls function 1.
Function 1 starts at the beginning of time 6, executes 1 units of time, and ends at the end of time 6.
Function 0 resumes execution at the beginning of time 6 and executes for 2 units of time.
So function 0 spends 2 + 4 + 1 = 7 units of total time executing, and function 1 spends 1 unit of total time executing.
Example 4:

Input: n = 2, logs = ["0:start:0","0:start:2","0:end:5","1:start:7","1:end:7","0:end:8"]
Output: [8,1]
Example 5:

Input: n = 1, logs = ["0:start:0","0:end:0"]
Output: [1]
 

Constraints:

1 <= n <= 100
1 <= logs.length <= 500
0 <= function_id < n
0 <= timestamp <= 109
No two start events will happen at the same timestamp.
No two end events will happen at the same timestamp.
Each function has an "end" log for each "start" log.

*/

/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */

 var exclusiveTime = function(n, logs) {

    const ans = new Array(n).fill(0);
    const functionEvents = new Array(n).fill(0).map(_ => []);

    const execTimes = [];

    for(const entry of logs) {

        const [idStr, event, stampStr] = entry.split(":");

        const id = +idStr, stamp = +stampStr;

        if(event === "start") {
            functionEvents[id].push(stamp);
            continue;
        }

        const start = functionEvents[id].pop();

        const totalTime = stamp - start + 1;
        
        let exclusiveTime = totalTime;

        while(execTimes.length && execTimes[execTimes.length -1][0] > start) {
            exclusiveTime -= (execTimes.pop())[1];
        }
        
        ans[id] += exclusiveTime;
        execTimes.push([start, totalTime]);

     }
    
    return ans;
};

let n = 2, logs = ["0:start:0","1:start:2","1:end:5","0:end:6"];
n = 1, logs = ["0:start:0","0:start:2","0:end:5","0:start:6","0:end:6","0:end:7"];
n = 2, logs = ["0:start:0","0:start:2","0:end:5","1:start:6","1:end:6","0:end:7"];
n = 2, logs = ["0:start:0","0:start:2","0:end:5","1:start:7","1:end:7","0:end:8"];
n = 1, logs = ["0:start:0","0:end:0"];
n = 8;
logs = ["0:start:0",
        "1:start:5",
        "2:start:6",
        "3:start:9",
        "4:start:11",
        "5:start:12",
        "6:start:14",
        "7:start:15",
        "1:start:24",
        "1:end:29",
        "7:end:34",
        "6:end:37",
        "5:end:39",
        "4:end:40",
        "3:end:45",
        "0:start:49",
        "0:end:54",
        "5:start:55",
        "5:end:59",
        "4:start:63",
        "4:end:66",
        "2:start:69",
        "2:end:70",
        "2:start:74",
        "6:start:78",
        "0:start:79",
        "0:end:80",
        "6:end:85",
        "1:start:89",
        "1:end:93",
        "2:end:96",
        "2:end:100",
        "1:end:102",
        "2:start:105",
        "2:end:109",
        "0:end:114"]; //[20,14,35,7,6,9,10,14];*/

console.table(exclusiveTime(n, logs));