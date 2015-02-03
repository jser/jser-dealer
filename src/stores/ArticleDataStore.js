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
    switch (payload.actionType) {
        case Const.LOAD_ARTICLE:
            resetArticleList(payload.data);
            break;
        case Const.MOVE_TO_NEXT:
            currentReadItemIndex += 1;
            break;
        case Const.MOVE_TO_PREV:
            currentReadItemIndex -= 1;
            break;

        default:
            return true;
    }

    store.emitChange();
});
export default store;