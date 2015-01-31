// LICENSE : MIT
"use strict";
import mcFly from "../flux"
import Const from "../constants/ArticleContants.js"
import {ArticleClient} from "../api-client/ArticleClient.js"
var client = new ArticleClient();
var TodoActions = mcFly.createActions({
    /**
     *
     * @param {Date} date
     * @returns {{actionType: string, text: text}}
     */
    loadArticle: function (date) {
        return client.asyncLoadArticle(date).then(function (json) {
            return {
                actionType: Const.LOAD_ARTICLE,
                data: json
            };
        }).catch(function (error) {
            console.error(error);
        });
    }
});
export default TodoActions;