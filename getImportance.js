/*
#690
You are given a data structure of employee information, which includes the employee's unique id, his importance value and his direct subordinates' id.

For example, employee 1 is the leader of employee 2, and employee 2 is the leader of employee 3. They have importance value 15, 10 and 5, respectively. Then employee 1 has a data structure like [1, 15, [2]], and employee 2 has [2, 10, [3]], and employee 3 has [3, 5, []]. Note that although employee 3 is also a subordinate of employee 1, the relationship is not direct.

Now given the employee information of a company, and an employee id, you need to return the total importance value of this employee and all his subordinates.
*/

/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function(employees, id) {
    
    if(employees.length === 0) return 0
    
    for(let i = 0; i < employees.length; i++) {
        
        if(employees[i][0] === id) {
            let [employee] = employees.splice(i,1)
            let imp = employee[1]
            
            for(let j = 0; j < employee[2].length; j++) {
                const subId = employee[2][j]
                imp += GetImportance(employees, subId)
            }
            return imp
        }
    }
    return 0
};

console.log(GetImportance([[1,5,[2,3]],[2,3,[4]],[3,4,[]],[4,1,[]]],    1))