// LICENSE : MIT
"use strict";
import mcFly from "../flux"
import Const from "../constants/CandidateArticleContants.js"
var CandidateActions = mcFly.createActions({
    addItemToGroup(groupName, item) {
        return {
            actionType: Const.ADD_ITEM_TO_GROUP,
            groupName: groupName,
            item: item
        };
    }
});
export default CandidateActions;