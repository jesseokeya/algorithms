const store = new Map()

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function(longUrl) {
    let unique = ''
    const salt = 26, len = 6, host = 'http://tinyurl.com'
    for (let i = 0; i < len; i++) {
        unique += String.fromCharCode(97 + Math.floor(Math.random() * 26))
    }
    const url = `${host}/${unique}`
    store.set(url, longUrl)
    return url
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    return store.get(shortUrl)
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */