// LICENSE : MIT
"use strict";
import React from 'react';
import store from "../stores/CandidateArticleStore.js"
import Action from "../actions/CandidateArticleAction.js"
import ArticleDataItem from "./ArticleDataItem.jsx"
import update from "react/lib/update"
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
    // D&D
    moveCard(id, afterId) {
        Action.moveItemInCandidate(id, afterId);
    },

    render() {
        var items = this.state.articles.map((article, index) => {
            return (<ArticleDataItem key={index}
                                     isReading={false}
                                     moveCard={this.moveCard} {...article} />)
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