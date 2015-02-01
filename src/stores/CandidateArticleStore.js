// LICENSE : MIT
"use strict";
import mcFly from "../flux"
import Const from "../constants/ArticleContants.js"
var _groupNameList = ["ヘッドライン", "アーティクル"];
var _groupKVS = {};
var store = mcFly.createStore({
    getGroupNameList() {
        return _groupNameList;
    },
    /**
     * groupのitem一覧を返却する
     * @param name
     * @returns {Array}
     */
    getGroupItemList(name) {
        return _groupKVS[name] || [];
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