// LICENSE : MIT
"use strict";
import mcFly from "../flux"
import Const from "../constants/ArticleContants.js"
var articleList = [];
var currentReadItemIndex = 0;
function resetArticleList(data) {
    articleList = data["list"];
}
function removeItemAtIndex(index) {
    articleList.splice(index, 1);
}

var store = mcFly.createStore({
    getArticleList() {
        return articleList;
    },
    getCurrentReadItemIndex() {
        return currentReadItemIndex;
    },
    getCurrentReadItem() {
        return this.getArticleList()[this.getCurrentReadItemIndex()];
    }

}, function (payload) {
    store.setMaxListeners(200);
    function scrollToIndex(index) {
        store.emit("scrollToItem", articleList[index]);
    }

    function decreaseCount() {
        if (currentReadItemIndex > 0) {
            currentReadItemIndex -= 1;
            scrollToIndex(currentReadItemIndex);
        }
    }

    function increaseCount() {
        if (currentReadItemIndex <= articleList.length) {
            currentReadItemIndex += 1;
            scrollToIndex(currentReadItemIndex);
        }
    }

    switch (payload.actionType) {
        case Const.LOAD_ARTICLE:
            resetArticleList(payload.data);
            break;
        case Const.MOVE_TO_NEXT:
            increaseCount();
            break;
        case Const.MOVE_TO_PREV:
            decreaseCount();
            break;
        case Const.MOVE_TO_INDEX:
            currentReadItemIndex = payload.index;
            break;
        case Const.ADD_ITEM_TO_GROUP:
            addItemToGroup(payload.groupName, payload.item);
            break;
        case Const.REMOVE_ITEM_AT_INDEX:
            removeItemAtIndex(payload.index);
            break;
        default:
            return true;
    }

    store.emitChange();
});
export default store;