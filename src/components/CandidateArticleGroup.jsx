// LICENSE : MIT
"use strict";
import React from 'react';
export default React.createClass({
    getDefaultProps: function () {
        return {
            groupName: ""
        };
    },
    render() {
        return (
            <div className="candidate-article-group">
                <p>{this.props.groupName}</p>
            </div>
        )
    }
})