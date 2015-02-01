// LICENSE : MIT
"use strict";
import React from 'react';
import store from "../stores/CandidateArticleStore.js"
import CandidateArticleGroup from "./CandidateArticleGroup.jsx"
export default React.createClass({
    getInitialState: function () {
        return {
            groupList: store.getGroupNameList()
        };
    },
    render() {
        var groupList = this.state.groupList.map(function (name, index) {
            return (<CandidateArticleGroup key={index} groupName={name}/>)
        });
        return (
            <div>
        {groupList}
            </div>
        );
    }
});