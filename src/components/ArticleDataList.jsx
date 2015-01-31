// LICENSE : MIT
"use strict";
import React from 'react';
import ArticleDataItem from "./ArticleDataItem.jsx"
import ArticleDataStore from "../stores/ArticleDataStore.js"
import ArticleDataAction from "../actions/ArticleDataAction.js"
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
    render() {
        var items = this.state.articles.map(function (article, index) {
            return <ArticleDataItem key={index} {...article}/>
        });
        return (
            <div className="ArticleDataList">
            {items}
            </div>
        )
    }
})