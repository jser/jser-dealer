// LICENSE : MIT
"use strict";
import mcFly from "../flux"
import Const from "../constants/ArticleContants.js"
var _groupList = ["ヘッドライン", "アーティクル"];

var store = mcFly.createStore({
    getGroupList() {
        return _groupList;
    }
}, function (payload) {
    switch (payload.actionType) {
        case Const.LOAD_ARTICLE:
            break;
        default:
            return true;
    }
    store.emitChange();
});
export default store;