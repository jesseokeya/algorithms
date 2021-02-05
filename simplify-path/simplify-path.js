/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const paths = path.split('/'), results = []
    for (let i = 0; i < paths.length; i++) {
        const path = paths[i]
        if (path === '..') results.pop()
        else if (path !== '.' && path.length > 0) results.push(path)
    }
    return `/${results.join('/')}`
};