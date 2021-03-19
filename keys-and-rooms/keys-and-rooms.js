var canVisitAllRooms = module.exports = function(rooms) {
   
    function visit(i, rooms) {
        if(visited[i] == 1) {
            return;
        }
        visited[i] =1;
        for(next of rooms[i]) {
            visit(next, rooms);
        }
    }     
    
    let n = rooms.length;
    var visited = Array(n).fill(0);
    visit(0, rooms);
    for(i of visited) {
        if(i == 0) {
            return false;
        }
    }
    return true;    
};