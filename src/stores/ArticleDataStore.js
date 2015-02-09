// LICENSE : MIT
"use strict";
import mcFly from "../flux"
import Const from "../constants/ArticleContants.js"
var articleList = [];
var currentReadItemIndex = 0;
function resetArticleList(data) {
    articleList = data["list"];
}
var store = mcFly.createStore({
    getArticleList() {
        return articleList;
    },
    getCurrentReadItemIndex() {
        return currentReadItemIndex;
    }
}, function (payload) {
    function decreaseCount() {
        if (currentReadItemIndex > 0) {
            currentReadItemIndex -= 1;
        }
    }

    function increaseCount() {
        if (currentReadItemIndex <= articleList.length) {
            currentReadItemIndex += 1;
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
        default:
            return true;
    }

    store.emitChange();
});
export default store;