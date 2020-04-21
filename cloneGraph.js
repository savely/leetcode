
 // Definition for a Node.
  function Node(val, neighbors) {
     this.val = val === undefined ? 0 : val;
     this.neighbors = neighbors === undefined ? [] : neighbors;
  };

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {

    const newRoot = new Node(node.val)
    const visited = new Map([[newRoot.val, newRoot]])
     
    const traverse = function(nd) {

        const newNode = new Node(nd.val+100)
        visited.set(nd.val, newNode)       

        nd.neighbors.map(elt => {

            if(visited.has(elt.val)) {
                newNode.neighbors.push(visited.get(elt.val))
                return
            }
            newNode.neighbors.push(traverse(elt))
        });

        return newNode
    }
     
     node.neighbors.forEach( elt => {
          newRoot.neighbors.push(traverse(elt))
     })
       
    return newRoot
};


x1 =[[2,4],[1,3],[2,4],[1,3]]
x2 = [[2,3],[1,3],[1,2]]

const fromAjacencyList = function(list) {
    const nodes = new Map()

    const getNode = function(n) {
      if (!nodes.has(n)) {
         nodes.set(n, new Node(n))
      }
      
      return nodes.get(n)
    }

    for (let i = 0; i < list.length; i++) {
        getNode(i+1)
    }

    for (let i = 0; i < list.length; i++) {
        const node = getNode(i+1)

        for (j = 0; j < list[i].length; j++) {
            node.neighbors.push(getNode(list[i][j]))
        }
    }


    return nodes.get(1)
}

const toAjacencyList = function(list,node) {
   
    if(list[node.val-1] === undefined) {
        list[node.val-1] =[]
    }
  
    node.neighbors.map(nd => {
            list[node.val-1].push(nd.val)
            if(list[nd.val-1] === undefined) {
                  toAjacencyList(list, nd)
            }
        }) 

     return list
}
 
const gr = fromAjacencyList(x2)
const graph = cloneGraph (gr)
  console.log('--------------')
 console.log(toAjacencyList([], graph))
 console.log('--------------')
 console.log(toAjacencyList([], gr))