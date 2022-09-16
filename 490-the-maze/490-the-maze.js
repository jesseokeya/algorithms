/**
 * @param {number[][]} maze
 * @param {number[]} start
 * @param {number[]} destination
 * @return {boolean}
 */
const hasPath = (maze, start, destination) => {
    const visited = new Array(maze.length).fill(false).map(() => new Array(maze[0].length).fill(false));
    
    return dfs(maze, start, destination, visited);
};

const dfs = (maze, currPosition, destination, visited) => {
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    
    // DFS Goal
    if (currPosition[0] === destination[0] && currPosition[1] === destination[1]) {
        return true;
    }
    
    // Check from visited
    if (visited[currPosition[0]][currPosition[1]]) {
        return false;
    }
    
    visited[currPosition[0]][currPosition[1]] = true;
    
    // DFS Choices
    for (const direction of directions) {
        let newX = currPosition[0];
        let newY = currPosition[1];
        let nextPosition = [newX, newY];
        
        // keep rolling when it's at a valid position
        while (isValidPosition(newX, newY, maze)) {
            nextPosition = [newX, newY];
            newX = newX + direction[0];
            newY = newY + direction[1];
        }
        
        if (dfs(maze, nextPosition, destination, visited)) {
            return true;
        } 
    }
    
    return false;
}

const isValidPosition = (x, y, maze) => {
    if (x >= 0 && x < maze.length && y >= 0 && y < maze[0].length && maze[x][y] === 0) {
        return true; 
    } else {
        return false;
    }
}