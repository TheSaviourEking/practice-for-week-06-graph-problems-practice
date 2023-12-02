function getNeighbors(row, col, graph) {
    
    // Check top
    const top = [ row-1, col ];
    
    // Check bottom
    const bottom = [ row + 1, col ];

    // Check left
    const left = [ row, col - 1 ];

    // Check right
    const right = [ row, col + 1 ];

    // Return neighbors
    // const neighbors = [ top, bottom, left, right ];
    const neighbors = [ top, left, right, bottom ];

    // console.log(neighbors);
    const result = [];
    // Your code here
    neighbors.forEach(neighbor => {
	if (isValidIndex(neighbor, graph)) result.push(neighbor);
    });

    return result;
}
const matrix = [
        [1,1,1,0,0],
        [0,1,1,0,1],
        [0,1,1,0,1],
    ]


// console.log(getNeighbors(1, 1, matrix));

/** checks if value at neighbor !== 0 and neighbors indexes are not out of range */
function isValidIndex(neighbor, graph) {
    const neighborRow = neighbor[0];
    const neighborCol = neighbor[1];
    // console.log(neighbor, 'neighbor');
    
    if ((neighborRow >= 0 && neighborRow < graph.length) && (neighborCol >= 0 && neighborCol < graph[0].length) && (graph[neighborRow][neighborCol] === 1)) return true;
}


function islandSize(row, col, graph) {

    // Create a visited set to store visited nodes
    const visited = new Set();

    // Create a stack, put the starting node in the stack
    const stack = [ ];

  // Put the stringified starting node in visited

  // Initialize size to 0

  // While the stack is not empty,

    // Pop the first node

    // DO THE THING (increment size by 1)

    // Then push all the UNVISITED neighbors on top of the stack
    // and mark them as visited
    // HINT: This is what your helper function `getNeighbors` is for
    // HINT: Remember, you're storing your visited nodes as strings!

  // return size

  // Your code here
}

module.exports = [getNeighbors, islandSize];
