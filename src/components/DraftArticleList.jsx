// LICENSE : MIT
"use strict";
import React from 'react';
import ArticleDataItem from "./ArticleDataItem.jsx"
import ArticleDataStore from "../stores/ArticleDataStore.js"
import ArticleDataAction from "../actions/ArticleDataAction.js"

import CandidateArticleAction from "../actions/CandidateArticleAction.js"
export default React.createClass({
    mixins: [ArticleDataStore.mixin],
    getInitialState: function () {
        return {
            articles: ArticleDataStore.getArticleList()
        };
    },
    componentDidMount: function () {
        ArticleDataAction.loadArticle(new Date());
    },
    storeDidChange: function () {
        var articleList = ArticleDataStore.getArticleList();
        this.setState({
            articles: articleList
        });
    },
    _addItemToGroup(groupName, item) {
        console.log(groupName);
        CandidateArticleAction.addItemToGroup("ヘッドライン", item);
    },
    render() {
        var that = this;
        var items = this.state.articles.map(function (article, index) {
            return <ArticleDataItem key={index} onClick={that._addItemToGroup.bind(that, "ヘッドライン", article)} {...article}/>
        });
        return (
            <div>
              {items}
            </div>
        )
    }
})