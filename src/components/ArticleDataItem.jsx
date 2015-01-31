"use strict";
import React from 'react';
export default React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
        url: React.PropTypes.string.isRequired,
        content: React.PropTypes.string.isRequired,
        tags: React.PropTypes.array,
        date: React.PropTypes.string,
        relatedLinks: React.PropTypes.arrayOf(React.PropTypes.shape({
            title: React.PropTypes.string.isRequired,
            url: React.PropTypes.string.isRequired
        }))
    },
    render() {
        return (
            <div className="ArticleDataItem">
                <a href={this.props.url}>{this.props.title}</a>
            </div>
        )
    }
});