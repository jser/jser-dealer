// LICENSE : MIT
"use strict";
import React from 'react';
import DraftArticleList from "./DraftArticleList.jsx"
import CandidateArticleList from "./CandidateArticleList.jsx"
import CandidateArticleToolbar from "./CandidateArticleToolbar.js"
export default React.createClass({

    render: function () {
        return (
            <main>
                <div className="draft-article-list">
                    <DraftArticleList />
                </div>
                <div className="candidate-article-list">
                    <CandidateArticleToolbar />
                    <CandidateArticleList />
                </div>
            </main>
        );
    }
});
