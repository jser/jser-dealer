// LICENSE : MIT
"use strict";
import React from 'react';
import DealerApp from "./components/DealerApp.jsx"
import ArticleDataAction from "./actions/ArticleDataAction.js"
document.body.addEventListener("keydown", function (event) {
    var jKey = 74, kKey = 75;
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

