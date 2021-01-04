/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
 var compareVersion = function(version1, version2) {
    const split1 = version1.split(".");
    const split2 = version2.split(".");    
    const len = Math.max(split1.length, split2.length);
    
    for (let i = 0; i < len; i++) {
        const v1 = i < split1.length ? parseInt(split1[i]) : 0;
        const v2 = i < split2.length ? parseInt(split2[i]) : 0;
        
        if (v1 != v2) return v1 < v2 ? -1 : 1;
    }
    
    return 0;
}; 
