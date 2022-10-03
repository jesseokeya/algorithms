/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function(paths) {
    const results = [], fileMappings = new Map()
    
    for (const path of paths) {
        const filePaths = path.split(" "), pathName = filePaths[0]
        for (let i = 1; i < filePaths.length; i++) {
            const file = filePaths[i], splitFile = file.split("(")
            const filePathName = `${pathName}/${splitFile[0]}`, fileName = splitFile[1].replace(')', '')
            
            if (!fileMappings.has(fileName)) fileMappings.set(fileName, [filePathName])
            else fileMappings.get(fileName).push(filePathName)
        }
    }
    
    for (const [key, value] of fileMappings) {
        if (value.length > 1) results.push(value)
    }
    
    return results 
};