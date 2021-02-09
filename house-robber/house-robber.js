var rob = function(nums) {
    let previous = 0;
    let beforePrevious = 0;
    
    for(let i = 0; i < nums.length; i++){
        let tmp = previous;
        previous = Math.max(nums[i] + beforePrevious, previous);
        beforePrevious = tmp;
    }
    
    return previous;
};