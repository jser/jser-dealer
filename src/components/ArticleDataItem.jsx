"use strict";
import React from 'react';
import { DragDropMixin } from 'react-dnd';
import ItemTypes  from "./ItemType.js"
export default React.createClass({
    mixins: [DragDropMixin],
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
    componentDidUpdate: function () {
        if (this.props.isReading) {
            var node = this.getDOMNode();
            node.scrollIntoView();
        }
    },
    statics: {
        configureDragDrop(register) {
            register(ItemTypes.CARD, {
                dragSource: {
                    beginDrag(component) {
                        return {
                            item: {
                                url: component.props.url
                            }
                        };
                    }
                },
                dropTarget: {
                    over(component, item) {
                        component.props.moveCard(item.url, component.props.url);
                    }
                }
            });
        }
    },
    render() {
        var className = this.props.isReading ? "is-reading" : "";
        className += " ArticleDataItem";
        return (
            <div {...this.dragSourceFor(ItemTypes.CARD)}
                {...this.dropTargetFor(ItemTypes.CARD)}
                className={className}>
                <a onClick={this.props.onClick}>{this.props.title}</a>
            </div>
        )
    }
});