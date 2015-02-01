// LICENSE : MIT
"use strict";
import React from 'react';
import store from "../stores/CandidateArticleStore.js"
import ArticleDataItem from "./ArticleDataItem.jsx"

export default React.createClass({
    mixins: [store.mixin],
    getDefaultProps: function () {
        return {
            groupName: ""
        };
    },
    getInitialState: function () {
        return {
            articles: store.getGroupItemList(this.props.groupName)
        };
    },
    storeDidChange() {
        var articleList = store.getGroupItemList(this.props.groupName);
        this.setState({
            articles: articleList
        });
    },
    render() {
        var that = this;
        var items = this.state.articles.map(function (article, index) {
            return <ArticleDataItem key={index} {...article} />
        });
        return (
            <div className="candidate-article-group">
                <p>{this.props.groupName}</p>
                <div>
                {items}
                </div>
            </div>
        )
    }
});