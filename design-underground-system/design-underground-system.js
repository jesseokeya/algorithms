
var UndergroundSystem = function() {
    this.checkIns = new Map();
    this.timeBetweenStations = new Map();
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
    this.checkIns.set(id, { stationName, time: t });
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
    const checkInStation = this.checkIns.get(id);
    
    if (!checkInStation) {
        throw new Error('This user has no check in');
    }
    
    const stationsRoute = `${checkInStation.stationName} - ${stationName}`;
    const duration = t - checkInStation.time;
    
    if (this.timeBetweenStations.has(stationsRoute)) {
        this.timeBetweenStations.set(
            stationsRoute, { 
                total: this.timeBetweenStations.get(stationsRoute).total + duration,
                count: this.timeBetweenStations.get(stationsRoute).count + 1,
            }
        );
    } else {
        this.timeBetweenStations.set(
            stationsRoute, { 
                total: duration,
                count: 1,
            }
        );
    }
};

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
    const stationsRoute = `${startStation} - ${endStation}`;
    
    if (this.timeBetweenStations.has(stationsRoute)) {
        return this.timeBetweenStations.get(stationsRoute).total / this.timeBetweenStations.get(stationsRoute).count;
    }
    
    return null;
};

/** 
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */