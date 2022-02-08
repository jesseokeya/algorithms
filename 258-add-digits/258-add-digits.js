/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    const add = (num) => {
        let result = 0
        while (num) {
            const rem = num % 10
            num = Math.trunc(num / 10)
            result += rem
        }
        return result
    }
    
    let cond = add(num)
    while (Math.trunc(cond / 10) > 0) {
        cond = add(cond) 
    }
    
    return cond
};