/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function(big, medium, small) {
    this.track = { big, medium, small }
};
​
/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
    const mappings = {
        1: 'big',
        2: 'medium',
        3: 'small'
    }
    const value = mappings[carType]
    if (this.track[value]) {
        this.track[value]--
        return true
    }
    return false
};
​
/** 
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
