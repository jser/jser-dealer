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
    _focusItem(index) {
        ArticleDataAction.moveToIndex(index);
    },
    render() {
        var currentIndex = ArticleDataStore.getCurrentReadItemIndex();
        var items = this.state.articles.map((article, index) => {
            var isReading = index === currentIndex;
            return <ArticleDataItem key={index} isReading={isReading} onClick={this._focusItem.bind(this, index)} {...article}/>
        });
        return (
            <div>
              {items}
            </div>
        )
    }
})