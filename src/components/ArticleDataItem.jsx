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
        })),
        onClick: React.PropTypes.func
    },
    render() {
        var className = this.props.isReading ? "is-reading" : "";
        className += " ArticleDataItem";
        return (
            <div className={className}>
                <a onClick={this.props.onClick}>{this.props.title}</a>
            </div>
        )
    }
});