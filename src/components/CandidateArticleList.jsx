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
    },
    storeDidChange: function () {
    },
    render() {
        var items = this.state.articles.map(function (article, index) {
            return <ArticleDataItem key={index} {...article}/>
        });
        return (
            <div>
              {items}
            </div>
        )
    }
})