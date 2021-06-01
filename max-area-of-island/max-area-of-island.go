func maxAreaOfIsland(grid [][]int) int {
    max := 0
    
    for i := 0; i < len(grid); i++ {
        for j := 0; j < len(grid[i]); j++ {
            max = maximum(max, helper(i, j, grid))
        }
    }
    
    return max
}

func helper(i, j int, grid [][]int) int {
    count := 0

    if i < 0 || i >= len(grid) || j < 0 || j >= len(grid[0]) || grid[i][j] == 0 {
        return 0
    }
    
    grid[i][j] = 0
    
    count++
    
    count += helper(i + 1, j, grid)
    count += helper(i - 1, j, grid)
    count += helper(i, j + 1, grid)
    count += helper(i, j - 1, grid)
    
    return count
}

func maximum(i, j int) int {
    if i > j {
        return i
    }
    return j
}