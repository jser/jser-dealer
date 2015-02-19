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
// D&D
/**
 * move {@link id} to {@link afterId} + 1.
 * @param {string} id - the target to move
 * @param {string} afterId the insert position for target
 */
function moveItem(id, afterId) {
    var card = this.state.articles.filter(c => c.url === id)[0],
        afterCard = this.state.articles.filter(c => c.url === afterId)[0],
        cardIndex = this.state.articles.indexOf(card),
        afterIndex = this.state.articles.indexOf(afterCard);
    var stateUpdate = {
        articles: {
            $splice: [
                [cardIndex, 1],
                [afterIndex, 0, card]
            ]
        }
    };
    this.setState(update(this.state, stateUpdate));
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