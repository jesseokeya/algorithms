/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
    if (!candies || candies == 0) return [];
    let candy = 1, index = 0, result = new Array(num_people).fill(0)
    while (candies > 0) {
        index = index % num_people
        if (candies < candy) result[index] += candies
        else result[index] += candy
        
        index++
        candies -= candy
        candy++
    }
    return result
};