// LICENSE : MIT
"use strict";
// LICENSE : MIT
"use strict";
import React from 'react';
import store from "../stores/CandidateArticleStore.js"
import Action from "../actions/CandidateArticleAction.js"
export default React.createClass({

    onClick(){
        var list = store.getAllGroup();
        console.log(list);
    },
    render() {
        return (
            <div>
                <button onClick={this.onClick}>テスト</button>
            </div>
        );
    }
});