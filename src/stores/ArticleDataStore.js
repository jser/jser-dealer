// LICENSE : MIT
"use strict";
import mcFly from "../flux"
import Const from "../constants/ArticleContants.js"
var articleList = [];

function resetArticleList(data) {
    articleList = data["list"];
}
var store = mcFly.createStore({
    getArticleList() {
        return articleList;
    }
}, function (payload) {
    switch (payload.actionType) {
        case Const.LOAD_ARTICLE:
            resetArticleList(payload.data);
            break;
        default:
            return true;
    }
    store.emitChange();
});
export default store;