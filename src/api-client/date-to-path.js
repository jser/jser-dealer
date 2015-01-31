// LICENSE : MIT
"use strict";
/**
 * 渡されたdateに該当する月の記事データのindex.jsonへのパスを返却する
 * @param date
 * @returns {string}
 */
export function dateToPath(date) {
    var fileDirPath = "/jser-dealer/data/" + date.getFullYear() + '/' + format0((date.getMonth() + 1), 2);
    return fileDirPath + "/index.json?" + new Date().getTime();
}

export function format0(str, len) {
    return ('_' + Math.pow(10, len) + str).slice(-len);
}