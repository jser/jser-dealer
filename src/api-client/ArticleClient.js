// LICENSE : MIT
"use strict";
import {dateToPath} from "./date-to-path.js"
import qwest from "qwest"
var debug = require('debug')("ArticleClient");
export class ArticleClient {
    asyncLoadArticle(date) {
        var filePath = dateToPath(date);
        debug(filePath);
        return qwest.get(filePath);
    }
}