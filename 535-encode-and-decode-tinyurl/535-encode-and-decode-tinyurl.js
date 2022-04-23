const mappings = new Map(), size = 3

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function(longUrl, len = size) {
    let hash = ""
    for (let i = 0; i < len; i++) {
        const idx = Math.floor(Math.random() * 26)
        hash += String.fromCharCode(idx + 97)
    }
    
    if (mappings.has(hash)) return encode(longUrl, len + 1)
    
    mappings.set(hash, longUrl)
    console.log(mappings)
    return `http://tinyurl.com/${hash}`
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    const splitUrl = shortUrl.split("/")
    const key = splitUrl[splitUrl.length - 1]
    return mappings.get(key)
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */