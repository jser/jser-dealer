// LICENSE : MIT
"use strict";
import React from 'react';
import DealerApp from "./components/DealerApp.jsx"
import ArticleDataAction from "./actions/ArticleDataAction.js"
import CandidateArticleAction from "./actions/CandidateArticleAction.js"
import CandidateArticleStore from "./stores/CandidateArticleStore.js"
import ActionDataStore from "./stores/ArticleDataStore.js"

document.body.addEventListener("keydown", function (event) {
    var jKey = 74, kKey = 75;
    var numberKeyBase = 49; // 49 : 1, 50 : 2...
    var groupList = CandidateArticleStore.getGroupNameList();
    // action.moveIndexItemToCandidateGroup
    groupList.forEach(function (groupName, index) {
        var key = numberKeyBase + index;
        if (key === event.keyCode) {
            var currentReadItem = ActionDataStore.getCurrentReadItem();
            var currentItemIndex = ActionDataStore.getCurrentReadItemIndex();
            CandidateArticleAction.addItemToGroup(groupName, currentReadItem);
            ArticleDataAction.removeItemAtIndex(currentItemIndex);
        }
    });
    switch (event.keyCode) {
        case jKey:
            ArticleDataAction.moveToNext();
            break;
        case kKey:
            ArticleDataAction.moveToPrev();
            break;
    }
});
React.render(<DealerApp />, document.body);

