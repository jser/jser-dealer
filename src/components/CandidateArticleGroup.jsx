// LICENSE : MIT
"use strict";
import React from 'react';
import store from "../stores/CandidateArticleStore.js"
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
    /**
     * move {@link id} to {@link afterId} + 1.
     * @param {string} id - the target to move
     * @param {string} afterId the insert position for target
     */
    moveItem(id, afterId) {
        var card = this.state.articles.filter(c => c.url === id)[0],
            afterCard = this.state.articles.filter(c => c.url === afterId)[0],
            cardIndex = this.state.articles.indexOf(card),
            afterIndex = this.state.articles.indexOf(afterCard);
        var stateUpdate = {
            articles: {
                $splice: [
                    [cardIndex, 1],
                    [afterIndex, 0, card]
                ]
            }
        };
        this.setState(update(this.state, stateUpdate));
    },

    render() {
        /**
         *
         */
        var items = this.state.articles.map((article, index) => {
            return (<ArticleDataItem key={index}
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