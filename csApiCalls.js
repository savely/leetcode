/**

You are given a list of API calls in the format /project/subproject/method. You need to calculate and print the number of calls to each node of the API endpoint as a tree.

In this tree, projects, subprojects, and methods should be sorted in the same order as they were given in the input data. The output tree should consist of several strings. All subprojects fall under their parent project, and all methods fall under the subproject in which they are included. The string that represents a project starts with --, while subprojects start with ---- and methods start with ------. After the project, subproject, or method name, put the number of requests to this module in parentheses. Take a look at the example for a guide of what this tree should look like.

Example

For

calls = [
        "/project1/subproject1/method1",
        "/project2/subproject1/method1",
        "/project1/subproject1/method1",
        "/project1/subproject2/method1",
        "/project1/subproject1/method2",
        "/project1/subproject2/method1",
        "/project2/subproject1/method1",
        "/project1/subproject2/method1"
]
the output should be

countAPI(calls) = [
        "--project1 (6)",
        "----subproject1 (3)",
        "------method1 (2)",
        "------method2 (1)",
        "----subproject2 (3)",
        "------method1 (3)",
        "--project2 (2)",
        "----subproject1 (2)",
        "------method1 (2)"
]

 */

function countAPI(calls) {

    calls = calls.map(str => str.slice(1).split('/'))
    const freq = {}, res =[]

    const freqReq = function(fr, c) {
        
        if(c.length === 0) return fr
        const key = c[0]

        if(fr[key] === undefined) {
            fr[key] = {count : 0, next : c.length ? {} : null }
        }

        fr[key]['count']++

        return freqReq(fr[key]['next'], c.slice(1))
    }

    const printReq = function(fr, count = 2) {

        for(key in  fr) {
            const obj = fr[key]
            res.push(`${'-'.repeat(count)}${key}(${obj['count']})` )
            if(obj.next !== null) {
                printReq(obj.next, count+2)
            }
        }        
    }

   calls.map( pathArr => freqReq(freq, pathArr))

   printReq(freq)
  
   return res
}

calls = [
    "/project1/subproject1/method1",
    "/project2/subproject1/method1",
    "/project1/subproject1/method1",
    "/project1/subproject2/method1",
    "/project1/subproject1/method2",
    "/project1/subproject2/method1",
    "/project2/subproject1/method1",
    "/project1/subproject2/method1"
]

console.log(countAPI(calls))