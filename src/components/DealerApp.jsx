// LICENSE : MIT
"use strict";
import React from 'react';
import DraftArticleList from "./DraftArticleList.jsx"
import CandidateArticleList from "./CandidateArticleList.jsx"
export default React.createClass({

    render: function () {
        return (
            <main>
                <div className="draft-article-list">
                    <DraftArticleList />
                </div>
                <div className="candidate-article-list">
                    <CandidateArticleList />
                </div>
            </main>
        );
    }
});
