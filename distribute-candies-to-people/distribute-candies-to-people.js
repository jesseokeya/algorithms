/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
    if (!candies || candies == 0) return []; //no candies
    let res = new Array(num_people).fill(0); //aovid NaN
    let candy = 1; //give first person
    let i = 0; //tracking res array
    while (candies > 0){
        i = i % num_people; //for assign candy from left again
        if (candies < candy) res[i] += candies;
        else res[i] += candy;
        i++;
        candies -= candy;
        candy++; //increasing candy amount
    }  
    return res;
};