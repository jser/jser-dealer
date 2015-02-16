// LICENSE : MIT
"use strict";
import mcFly from "../flux"
import Const from "../constants/CandidateArticleContants.js"
var _groupNameList = [
    "ヘッドライン",
    "アーティクル",
    "スライド、動画関係",
    "サイト、サービス",
    "ソフトウェア、ツール、ライブラリ関係",
    "書籍関係"
];
var _groupKVS = _groupNameList.reduce(function (memo, current) {
    memo[current] = [];
    return memo;
}, {});

function addItemToGroup(groupName, item) {
    _groupKVS[groupName].push(item);
}
var store = mcFly.createStore({
    getGroupNameList() {
        return _groupNameList;
    },
    /**
     * groupのitem一覧を返却する
     * @param groupName
     * @returns {Array}
     */
    getGroupItemList(groupName) {
        return _groupKVS[groupName] || [];
    }
}, function (payload) {
    switch (payload.actionType) {
        case Const.ADD_ITEM_TO_GROUP:
            addItemToGroup(payload.groupName, payload.item);
            break;
        default:
            return true;
    }
    store.emitChange();
});
export default store;