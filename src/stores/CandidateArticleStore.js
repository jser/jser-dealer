// LICENSE : MIT
"use strict";
import mcFly from "../flux"
import _ from "lodash"
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

function setGroup(KVS) {
    _groupKVS = KVS;
}
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
    var copyGroup = _.clone(_groupKVS, true);

    function findURL(list, url) {
        return _.findIndex(list, function (object) {
            if (!object.url) {
                console.log(object);
            }
            return object.url === url;
        });
    }

    function removeURLFromList(list, url) {
        var index = findURL(list, url);
        if (index === -1) {
            return;
        }
        var removedItem = list[index];
        _.pullAt(list, index);
        return removedItem;
    }

    /**
     *
     * @param list insert li
     * @param url insert point url
     * @param item insert item
     * @returns {*}
     */
    function insertURLToList(list, url, item) {
        var index = findURL(list, url);
        if (index === -1) {
            return;
        }
        list.splice(index, 0, item);
    }

    var removedItem;
    _.forEach(copyGroup, function (list) {
        var item = removeURLFromList(list, id);
        if (item) {
            removedItem = item;
        }
    });
    if (removedItem) {
        _.forEach(copyGroup, function (list) {
            insertURLToList(list, afterId, removedItem);
        });
    }
    setGroup(copyGroup);
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
        case Const.MOVE_ITEM_IN_CANDIDATE:
            moveItem(payload.id, payload.afterId);
            break;
        default:
            return true;
    }
    store.emitChange();
});
export default store;