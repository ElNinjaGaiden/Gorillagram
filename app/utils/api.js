import * as crypto from './crypto';

export function generateApiSignature(paramsMap, secret, keysToIgnore) {
    const sortedKeys = Object.keys(paramsMap).sort((a, b) => a > b ? 1 : -1);
    const filteredKeys = keysToIgnore && keysToIgnore ? sortedKeys.filter(key => keysToIgnore.indexOf(key) < 0) : sortedKeys;
    const paramsStream = filteredKeys.map(key => { 
        return `${key}=${paramsMap[key]}`; 
    }).join('&');

    return crypto.SHA1(`${paramsStream}${secret}`);
}